const Employee = require ('../lib/Employee');
    
class Intern extends Employee {
    constructor(name, id, email) {
        super (name, email);
        this.id = 4;
        this.school = 'Butler';
    }
    // getSchool()
    getSchool() {
        return this.school;
    }
    // getRole() // Returns 'Intern'
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;