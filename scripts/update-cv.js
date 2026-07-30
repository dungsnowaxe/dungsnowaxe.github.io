#!/usr/bin/env node
/**
 * CV Updater Script (Bilingual)
 * Reads profile.md or profile-vi.md and regenerates src/data/cv.json or cv-vi.json
 * Usage:
 *   node scripts/update-cv.js        (English, default)
 *   node scripts/update-cv.js --vi   (Vietnamese)
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isVietnamese = process.argv.includes('--vi');
const profilePath = join(__dirname, '..', isVietnamese ? 'profile-vi.md' : 'profile.md');
const outputPath = join(__dirname, '..', 'src', 'data', isVietnamese ? 'cv-vi.json' : 'cv.json');

function parseMarkdown(content) {
  const lines = content.split('\n');
  const data = {
    personalInfo: {},
    aboutMe: '',
    experience: [],
    education: [],
    skills: {},
    footer: { line1: '', line2: '' }
  };

  let currentSection = null;
  let currentItem = null;
  let currentList = null;
  let currentSkillCategory = null;
  let currentSkillItems = [];

  function flushCurrentItem() {
    if (!currentItem) return;
    if (currentSection === 'experience') {
      data.experience.push(currentItem);
    } else if (currentSection === 'education') {
      data.education.push(currentItem);
    }
    currentItem = null;
    currentList = null;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('>')) continue;

    const sectionMatch = trimmed.match(/^##\s+(.+)$/);
    if (sectionMatch) {
      flushCurrentItem();
      
      const sectionName = sectionMatch[1].trim();
      if (sectionName === 'Personal Information') {
        currentSection = 'personalInfo';
      } else if (sectionName === 'About Me') {
        currentSection = 'aboutMe';
      } else if (sectionName === 'Experience') {
        currentSection = 'experience';
      } else if (sectionName === 'Education') {
        currentSection = 'education';
      } else if (sectionName === 'Skills') {
        currentSection = 'skills';
      } else if (sectionName === 'Footer') {
        currentSection = 'footer';
      }
      continue;
    }

    const subSectionMatch = trimmed.match(/^###\s+(.+)$/);
    if (subSectionMatch) {
      flushCurrentItem();
      
      const title = subSectionMatch[1].trim();
      
      if (currentSection === 'skills') {
        if (currentSkillCategory && currentSkillItems.length > 0) {
          data.skills[currentSkillCategory] = currentSkillItems;
        }
        currentSkillCategory = title;
        currentSkillItems = [];
      } else if (currentSection === 'experience') {
        currentItem = {
          title: title,
          company: '',
          period: '',
          details: []
        };
      } else if (currentSection === 'education') {
        currentItem = {
          degree: title,
          institution: '',
          period: '',
          description: ''
        };
      }
      currentList = null;
      continue;
    }

    if (currentSection === 'personalInfo') {
      const match = trimmed.match(/^-\s*\*\*(.+?):\*\*\s*(.+)$/);
      if (match) {
        const key = match[1].toLowerCase().replace(/\s+/g, '');
        let fieldName = key;
        if (key === 'fullname') fieldName = 'fullName';
        if (key === 'jobtitle') fieldName = 'jobTitle';
        data.personalInfo[fieldName] = match[2].trim();
      }
      continue;
    }

    if (currentSection === 'aboutMe') {
      if (trimmed && !trimmed.startsWith('#')) {
        data.aboutMe += (data.aboutMe ? ' ' : '') + trimmed;
      }
      continue;
    }

    if (currentSection === 'experience' && currentItem) {
      const companyMatch = trimmed.match(/^-\s*\*\*Company:\*\*\s*(.+)$/);
      if (companyMatch) {
        currentItem.company = companyMatch[1].trim();
        continue;
      }

      const periodMatch = trimmed.match(/^-\s*\*\*Period:\*\*\s*(.+)$/);
      if (periodMatch) {
        currentItem.period = periodMatch[1].trim();
        continue;
      }

      if (trimmed === '- **Details:**') {
        currentList = 'details';
        continue;
      }

      if (currentList === 'details' && trimmed.startsWith('- ')) {
        currentItem.details.push(trimmed.substring(2).trim());
        continue;
      }
      continue;
    }

    if (currentSection === 'education' && currentItem) {
      const instMatch = trimmed.match(/^-\s*\*\*Institution:\*\*\s*(.+)$/);
      if (instMatch) {
        currentItem.institution = instMatch[1].trim();
        continue;
      }

      const periodMatch = trimmed.match(/^-\s*\*\*Period:\*\*\s*(.+)$/);
      if (periodMatch) {
        currentItem.period = periodMatch[1].trim();
        continue;
      }

      const descMatch = trimmed.match(/^-\s*\*\*Description:\*\*\s*(.+)$/);
      if (descMatch) {
        currentItem.description = descMatch[1].trim();
        let j = i + 1;
        while (j < lines.length) {
          const nextLine = lines[j].trim();
          if (!nextLine || nextLine.startsWith('#') || nextLine.startsWith('- **')) {
            break;
          }
          currentItem.description += ' ' + nextLine;
          j++;
        }
        i = j - 1;
        continue;
      }
      continue;
    }

    if (currentSection === 'skills') {
      const categoryMatch = trimmed.match(/^###\s+(.+)$/);
      if (categoryMatch) {
        if (currentSkillCategory && currentSkillItems.length > 0) {
          data.skills[currentSkillCategory] = currentSkillItems;
        }
        currentSkillCategory = categoryMatch[1].trim();
        currentSkillItems = [];
        continue;
      }

      if (currentSkillCategory && trimmed && !trimmed.startsWith('#')) {
        const items = trimmed.split(',').map(s => s.trim()).filter(Boolean);
        currentSkillItems.push(...items);
      }
      continue;
    }

    if (currentSection === 'footer') {
      if (trimmed && !trimmed.startsWith('#')) {
        if (!data.footer.line1) {
          data.footer.line1 = trimmed;
        } else if (!data.footer.line2) {
          data.footer.line2 = trimmed;
        }
      }
      continue;
    }
  }

  flushCurrentItem();
  
  if (currentSkillCategory && currentSkillItems.length > 0) {
    data.skills[currentSkillCategory] = currentSkillItems;
  }

  return data;
}

function main() {
  try {
    const mdContent = readFileSync(profilePath, 'utf-8');
    const cvData = parseMarkdown(mdContent);
    
    writeFileSync(outputPath, JSON.stringify(cvData, null, 2));
    
    const langLabel = isVietnamese ? 'Vietnamese' : 'English';
    console.log(`✅ CV data updated successfully! (${langLabel})`);
    console.log(`   Source: ${profilePath}`);
    console.log(`   Output: ${outputPath}`);
    console.log('');
    console.log('Summary:');
    console.log(`  - Name: ${cvData.personalInfo.fullName}`);
    console.log(`  - Experience: ${cvData.experience.length} positions`);
    console.log(`  - Education: ${cvData.education.length} entries`);
    console.log(`  - Skills: ${Object.keys(cvData.skills).length} categories`);
  } catch (error) {
    console.error('❌ Error updating CV:', error.message);
    process.exit(1);
  }
}

main();
