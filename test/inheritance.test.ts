describe('Inheritance', () => {

      //kelas parent
      class Employee {
            name: string;

            constructor(name: string){
                  this.name=name;
            }
      }

      class Manager extends Employee{

      }

      class Director extends Manager{

      }

      it('should support', () => {

            const employee = new Employee("Itono Okita");
            console.info(employee.name);

            const manager = new Manager("Arisa Sakamaki");
            console.info(manager.name);

            const director = new Director("Ryuta Tasaki");
            console.info(director.name);
      });
})