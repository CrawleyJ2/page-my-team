const Employee = require ('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // get office number
    getOfficeNumber() {
        return `<span>Office Number:</span> ${this.officeNumber}`;
    }
    // getRole() // Returns 'Manager'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;