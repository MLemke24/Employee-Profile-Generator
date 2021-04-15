const Intern = require('../lib/Intern');

test('intern object', () => {
    const intern = new Intern('Matt', '1020', 'matt@matt.com', 'ut-austin')

    expect(intern.name).toBe('Matt')
    expect(intern.id).toBe('1020')
    expect(intern.email).toBe('matt@matt.com')
    expect(intern.school).toBe('ut-austin')
    
});

test('for intern school', () => {
    const intern = new Intern('Matt', '1020', 'matt@matt.com', 'ut-austin')
    expect(intern.getSchool()).toEqual(expect.stringContaining('ut-austin'));
});

test('for employee role', () => {
    const intern = new Intern('Matt', '1020', 'matt@matt.com', 'ut-austin')
    expect(intern.getRole()).toEqual(expect.stringContaining('intern'));
});