//Static menyebabkan properties atau method tersebut bukan lagi bagian dari object yang dibuat dari class

describe('Static', () => {

      class Configuration{
            static NAME: string = "Belajar TypeScript OOP";
            static VERSION: number = 1.0;
            static AUTHOR: string = "Anri Minami";

      }

      class MathUtil{
            static sum(...values: number[]): number{
                  let total = 0;
                  for(const value of values){
                        total += value;
                  }

                  return total;
            }
      }

      it('should support static method', () => {
            console.info(MathUtil.sum(11, 6, 1999));
      });

      it('should support', () => {
            console.info(Configuration.NAME);
            console.info(Configuration.VERSION);
            console.info(Configuration.AUTHOR);
      });

});

//Static member hanya bisa mengakses static member lainnya (Static member hanya bisa mengakses sesamanya)
//Non static member bisa mengakses langsung static member.