const Engineer = require('../lib/Engineer');

test('engineer object', () => {
    const engineer = new Engineer('Matt', '1020', 'matt@matt.com', 'mlemke24')

    expect(engineer.name).toBe('Matt')
    expect(engineer.id).toBe('1020')
    expect(engineer.email).toBe('matt@matt.com')
    expect(engineer.github).toBe('mlemke24')
    
});

test('for engineer github', () => {
    const engineer = new Engineer('Matt', '1020', 'matt@matt.com', 'mlemke24')
    expect(engineer.getGithub()).toEqual(expect.stringContaining('mlemke24'));
});

test('for employee role', () => {
    const engineer = new Engineer('Matt', '1020', 'matt@matt.com', 'mlemke24')
    expect(engineer.getRole()).toEqual(expect.stringContaining('engineer'));
});