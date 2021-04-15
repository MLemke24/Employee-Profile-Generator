
class Employee {
    constructor (name, id, email, role) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role
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
        return this.role;
    }
}

module.exports = Employee;


// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole
