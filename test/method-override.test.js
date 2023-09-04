"use strict";
describe('Method Overriding', () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.info('Hello ${name}, my name is ${this.name}');
        }
    }
    class Manager extends Employee {
        sayHello(name) {
            super.sayHello(name);
            console.info('And I am your manager');
            // console.info('Hello ${name}, my name is ${this.name}, I am your manager');
        }
    }
    it('should support', () => {
        const employee = new Employee("Eko");
        employee.sayHello("Budi");
        const manager = new Manager("Eko");
        manager.sayHello("Budi");
    });
});
