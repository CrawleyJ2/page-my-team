const Employee = require('../lib/Employee');
const { test, expect } = require('@jest/globals');

// test for employee object
test ('creates an employee object', () => {
    const employee = new Employee ('John');

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
});
// test for name
test ('gets name of employee', () => {
    const employee = new Employee ('John', 1, 'johndoe@gmail.com');

    expect(employee.getName()).toEqual('John');
});
// test for id
test ('gets ID of employee', () => {
    const employee = new Employee ('John', 1, 'johndoe@gmail.com');

    expect(employee.getId()).toEqual(1);
});
// test for email
test ('gets email of employee', () => {
    const employee = new Employee ('John', 1, 'johndoe@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});
// test for role
test ('gets role of employee', () => {
    const employee = new Employee ('John', 1, 'johndoe@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});