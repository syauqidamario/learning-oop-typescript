"use strict";
//Polymorphism artinya object berubah menjadi bentuk lain, berkaitan dengan inheritance/pewarisan
//Bisa berubah bentuk, tapi sesuai dengan keturunannya
describe('Polymorphism', () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class VicePresident extends Manager {
    }
    class Director extends VicePresident {
    }
    function helloThere(employee) {
        if (employee instanceof VicePresident) {
            const vp = employee;
            console.info(`Hello VP ${vp.name}`);
        }
        else if (employee instanceof Manager) {
            const manager = employee;
            console.info(`Hello Manager ${manager.name}`);
        }
        else {
            console.info(`Hello employee ${employee.name}`);
        }
    }
    it('should support', () => {
        let employee = new Employee("Daisuke");
        console.info(employee);
        employee = new Manager("Daisuke");
        console.info(employee);
        employee = new VicePresident("Daisuke");
        console.info(employee);
        employee = new Director("Daisuke");
        console.info(employee);
    });
    it('should support method parameter polymorphism', () => {
        helloThere(new Employee("Joe"));
        helloThere(new Manager("Megumi"));
        helloThere(new VicePresident("Tetsuya"));
    });
});
// Saat melakukan Type Cast, Child harus di posisi paling bawah, lakukan pengecekan di awal, supaya tidak terjadi kesalahan konversi
