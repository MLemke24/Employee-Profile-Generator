const Employee = require('../lib/Employee');

test('employee object', () => {
    const employee = new Employee('Matt', '1020', 'matt@matt.com')

    expect(employee.name).toBe('Matt')
    expect(employee.id).toBe('1020')
    expect(employee.email).toBe('matt@matt.com')
    expect(employee.getRole()).toBe('employee')
    
});

test('for employee name', () => {
    const employee = new Employee('Matt')
    expect(employee.getName()).toEqual(expect.stringContaining('Matt'));
})

test('for employee email', () => {
    const employee = new Employee('Matt', '1020', 'matt@matt.com')
    expect(employee.getEmail()).toEqual(expect.stringContaining('matt@matt.com'));
})

test('for employee id', () => {
    const employee = new Employee('Matt', '1020', 'matt@matt.com')
    expect(employee.getId()).toEqual(expect.stringContaining('1020'));
});

test('for employee role', () => {
    const employee = new Employee('Matt', '1020', 'matt@matt.com')
    expect(employee.getRole()).toEqual(expect.stringContaining('employee'));
});



 