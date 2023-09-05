describe('Relationship', () => {

      class Person{
            constructor(public name: string){

            }
      }

      class Audience {
            constructor(public name: string){

            }
      }

      it('should support', () => {
            const person: Person = new Audience("Jeen");
            console.info(person.name);
      });
});