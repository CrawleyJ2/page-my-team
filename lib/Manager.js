const Employee = require ('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super( name, email);
        this.id = 2;
    }
    // office number???

    // getRole() // Returns 'Manager'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;