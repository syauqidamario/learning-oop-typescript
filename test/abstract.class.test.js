"use strict";
//Abstract class adalah deklarasi Class yang belum selesai.
//Abstract Class boleh ada properties atau method abstract/belum ada implementasinya
//Abstract Class tidak bisa menjadi object menggunakan kata kunci new
describe('Abstract Class', () => {
    class Customer {
        constructor(id) {
            this.id = id;
        }
        hello() {
            console.info('Hello');
        }
    }
    class RegularCustomer extends Customer {
        constructor(id, name) {
            super(id);
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it('should support', () => {
        const customer1 = new RegularCustomer(1, "Tatsumi");
        customer1.sayHello("Akihiko");
    });
});
