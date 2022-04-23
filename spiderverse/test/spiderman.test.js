const Spiderman = require('./../app/spiderman')

describe("Test Suite Dummy Description", () => {
    test('1) Create an spiderman object', () => {

      // Aqui escribimos el código que queremos usar tal cuál
      // Quiero poder instanciar un objeto Spiderman con esta información
      const tomHolland = new Spiderman("Spiderman Sony", 25, "Tom Holland", 3, "Sony")

      // Validamos que esté código funcione de la forma esperada
      expect(tomHolland.name).toBe("Spiderman Sony")
      expect(tomHolland.age).toBe(25)
      expect(tomHolland.actor).toBe("Tom Holland")
      expect(tomHolland.movies).toBe(3)
      expect(tomHolland.studio).toBe("Sony");
    });
  })