const Employee = require ('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super( name, email);
        this.id = 3;
        this.github = 'github';
    }
    // github // GitHub username
    getGitHub() {
        return this.github;
    }

    // getRole() // Returns 'Engineer'
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;