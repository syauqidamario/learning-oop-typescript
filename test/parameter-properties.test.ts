describe('Parameter Properties', () => {

      class Person {
            constructor(public name:string){
                  this.name = name;
            }
      }

      it('should support', () => {
            const person = new Person("Gento");
            console.info(person.name);

            person.name="Teruaki";
            console.info(person.name);
      });
});