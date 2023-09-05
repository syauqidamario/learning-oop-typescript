describe('Instance Of', () => {

      class IshinomoriHero{}

      class KamenRider{}

      const gotchard = new IshinomoriHero();
      const hotaro = new KamenRider();

      it('should have problem using typeof', () => {

            console.info(typeof gotchard);
            console.info(typeof hotaro);
      });

       it('should support instanceof', () => {

            expect(gotchard instanceof IshinomoriHero).toBe(true);
            expect(gotchard instanceof KamenRider).toBe(false);

            expect(hotaro instanceof IshinomoriHero).toBe(false);
            expect(hotaro instanceof KamenRider).toBe(true);

       });

});