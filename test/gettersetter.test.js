"use strict";
describe('Getter & Setter', () => {
    class Category {
        get name() {
            if (this._name) {
                return this._name;
            }
            else {
                return "empty";
            }
        }
        set name(value) {
            if (value !== "") {
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
