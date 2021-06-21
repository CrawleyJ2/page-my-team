const Manager = require ('../lib/Manager');

// test for manager object
test ('creates a manager object', () => {
    const manager = new Manager('Eric', 2, 'ericdoyle@yahoo.com');

    expect(manager.name).toBe('Eric');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
});
// test for name
test ('gets name of manager', () => {
    const manager = new Manager('Eric', 2, 'ericdoyle@yahoo.com');

    expect(manager.getName()).toBe('Eric');
});
// test for id
test ('gets id of manager', () => {
    const manager = new Manager('Eric', 2, 'ericdoyle@yahoo.com');

    expect(manager.getId()).toBe(2);
});
// test for email
test ('gets email of manager', () => {
    const manager = new Manager('Eric', 2, 'ericdoyle@yahoo.com');

    expect(manager.getEmail()).toEqual(expect.stringContaining('@'));
});
// test for role
test ('gets role of manager', () => {
    const manager = new Manager('Eric', 2, 'ericdoyle@yahoo.com');

    expect(manager.getRole()).toEqual('Manager');
});
// test for office number - role specific