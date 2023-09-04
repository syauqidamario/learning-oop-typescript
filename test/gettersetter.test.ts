describe('Getter & Setter', () => {

      class Category {
            _name?: string;

            get name(): string{
                  if(this._name){
                        return this._name;
                  }
                  else{
                        return "empty";
                  }
            }

            set name(value: string){

                  if(value !== ""){
                        this._name = value;
                  }

            }
      }

      it('should support in class', () => {

            const category = new Category();
            console.info(category.name);

            category.name = "Insects";
            console.info(category.name);
      });
});