const Spiderman = require('./../app/spiderman')

describe("Test Suite Dummy Description", () => {
    test('1) Create an spiderman object', () => {

      // Aqui escribimos el código que queremos usar tal cuál
      // Quiero poder instanciar un objeto Spiderman con esta información
      const tomHolland = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

      // Validamos que esté código funcione de la forma esperada
      expect(tomHolland.name).toBe("Spiderman Sony")
      expect(tomHolland.age).toBe(31)
      expect(tomHolland.actor).toBe("Andrew Garfield")
      expect(tomHolland.movies).toBe(2)
      expect(tomHolland.studio).toBe("Sony");
    });
    test('2) Use the method getInfo()', () => {
      const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
      expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    });
  })