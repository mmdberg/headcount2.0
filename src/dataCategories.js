import kinderData from './data/kindergartners_in_full_day_program.js';
import highSchool from './data/high_school_graduation_rates.js';
import specialEd from './data/special_education.js';
import titleI from './data/title_i_students.js';
import medianIncome from './data/median_household_income.js';
import remediation from './data/remediation_in_higher_education';

export const dataList = [
  { type: 'Kindergarteners in Full Day Programs'}, 
  { type: 'High School Graduation Rates'}, 
  { type: 'Median Household Income'},
  { type: 'Special Education'},
  { type: 'Title I Students'},
  { type: 'Remediation In Higher Education'}
]

export const getProgram = (program) => {

  switch(program) {
    case 'Kindergarteners in Full Day Programs':
      return kinderData
      break;

    case 'High School Graduation Rates':
      return highSchool
      break;

    case 'Median Household Income':
      return medianIncome
      break;

    case 'Special Education':
      return specialEd
      break;

    case 'Title I Students':
      return titleI
      break;

    case 'Remediation In Higher Education':
      return remediation
      break;

    default: console.log('error');
  }
}