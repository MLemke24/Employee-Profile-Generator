const Manager = require('../lib/Manager');

test('manager object', () => {
    const manager = new Manager('Matt', '1020', 'matt@matt.com', '123')

    expect(manager.name).toBe('Matt')
    expect(manager.id).toBe('1020')
    expect(manager.email).toBe('matt@matt.com')
    expect(manager.office).toBe('123')
    
});


test('for employee role', () => {
    const manager = new Manager('Matt', '1020', 'matt@matt.com', '123')
    expect(manager.getRole()).toEqual(expect.stringContaining('manager'));
});