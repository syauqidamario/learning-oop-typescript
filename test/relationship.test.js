"use strict";
describe('Relationship', () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Audience {
        constructor(name) {
            this.name = name;
        }
    }
    it('should support', () => {
        const person = new Audience("Jeen");
        console.info(person.name);
    });
});
