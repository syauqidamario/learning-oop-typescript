"use strict";
describe('Parameter Properties', () => {
    class Person {
        constructor(name) {
            this.name = name;
            this.name = name;
        }
    }
    it('should support', () => {
        const person = new Person("Gento");
        console.info(person.name);
        person.name = "Teruaki";
        console.info(person.name);
    });
});
