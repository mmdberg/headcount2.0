import kinderData from '../../data/kindergartners_in_full_day_program.js';
import {getProgram} from '../../dataCategories.js';
import specialEd from '../../data/special_education.js';

describe('getProgram', () => {

  it('should return data file if passed that matching string', () => {
    expect(getProgram('Kindergarteners in Full Day Programs'))
      .toEqual(kinderData);
    expect(getProgram('Kindergarteners in Full Day Programs'))
      .not.toEqual(specialEd);
    expect(getProgram('Special Education')).toEqual(specialEd);
  });
});