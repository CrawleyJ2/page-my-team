class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = 1;
        this.email = 'johndoe@gmail.com';
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    } // Returns 'Employee'

};

module.exports = Employee;