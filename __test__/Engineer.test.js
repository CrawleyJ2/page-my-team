const Engineer = require ('../lib/Engineer');

// test for engineer object
test ('creates an engineer object', () => {
    const engineer = new Engineer ('James', 3, 'crawleyj2@gmail.com');

    expect(engineer.name).toBe('James');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.github).toEqual(expect.any(String));
});
// test for name
test ('gets name of engineer', () => {
    const engineer = new Engineer ('James', 3, 'crawleyj2@gmail.com');

    expect(engineer.getName()).toEqual('James');
});
// test for id
test ('gets ID of engineer', () => {
    const engineer = new Engineer ('James', 3, 'crawleyj2@gmail.com');

    expect(engineer.getId()).toBe(3);
});
// test for email
test ('gets email of engineer', () => {
    const engineer = new Engineer ('James', 3, 'crawleyj2@gmail.com');

    expect(engineer.getEmail()).toEqual(expect.stringContaining('@'));
});
// test for role
test ('gets role of engineer', () => {
    const engineer = new Engineer ('James', 3, 'crawleyj2@gmail.com');

    expect(engineer.getRole()).toEqual('Engineer');
});
// test for github - role specific
test ('gets github username of engineer', () => {
    const engineer = new Engineer ('James', 3, 'crawleyj2@gmail.com');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
});