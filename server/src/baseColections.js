import Product from "./models/product.js";

export const createProductsTable = async () => {
  const productCount = await Product.estimatedDocumentCount();
  if (!productCount) {
    await Product.create(
      {
        title: "Pizza",
        products: [
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/458d6f79cac9387227ac51300775d91d.jpg",
            alt: "pizza",
            title: "Pizza Margherita",
            price: 12.22,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/fae8714cda041044bbeeee22fb1e9fe6.jpg",
            description:
              "Pizza with ripe tomatoes sauce, fresh basil and mozzarella cheese.",
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/be45637985ce751c07c4bd2eeef1574e.jpg",
            alt: "pizza",
            title: "Pizza BBQ",
            price: 15.59,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/847099313f957f839799decbedf961fa.jpg",
            description:
              "Pizza with chicken, salami, bacon and with barbecue sauce.",
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/c4ef1b6501bc9e4f3fb71a23fd83c41c.jpg",
            alt: "pizza",
            title: "Pizza Capricciosa",
            price: 15.04,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/733d47fc4ae9d42ad9c25d73494183a0.jpg",
            description:
              "Pizza with ham, pickled mushrooms, pickled eggplants, sheep outbuilding.",
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/f494ff3debcec408b7f54a839dc56eef.jpg",
            alt: "pizza",
            title: "Pizza Neapolitan",
            price: 15.04,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/733d47fc4ae9d42ad9c25d73494183a0.jpg",
            description:
              "Weathered dough for pizza, red sauce for pizza, ham, mushrooms, cheese, black and green olives.",
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/d9d19417a969ec3b40068eeb7fa192c0.jpg",
            alt: "pizza",
            title: "Pizza Fattoria",
            price: 15.59,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/63f8a0db76a7d55012f1d77e755543b7.jpg",
            description:
              "Pizza with chicken meat, champignons, butter, truffle oil and parmesan cheese.",
          },
        ],
      },
      {
        title: "Breakfast",
        products: [
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/9095009f478f6326d4fa0a06db12e6fd.jpg",
            alt: "eggs",
            title: "Sandwich Krok-Madam",
            price: 8.39,
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/3d03584def7cfc5e50b685a256090c6a.jpg",
            alt: "breakfast",
            title: "English Breakfast",
            price: 9.49,
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/8aa550d27ce60f294c6aaea3d58c37f1.jpg",
            alt: "shakshuka",
            title: "Shakshuka",
            price: 10.69,
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/53415d7b1abdc9f16b6f9b62ec1a95d5.jpg",
            alt: "omelette",
            title: "Omelette",
            price: 8.84,
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/e163869668ebafecee1bbd0d5543afec.jpg",
            alt: "crullers",
            title: "Crullers",
            price: 9.39,
          },
        ],
      },
      {
        title: "Starters",
        products: [
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/8b82bc37943b3a33aca46a59374cb788.jpg",
            alt: "starters",
            title: "Chicken pate with croutons",
            price: 5.49,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/8b82bc37943b3a33aca46a59374cb788.jpg",
            description:
              "Chicken liver pate, butter, crispy bread, caramelized onions, garlic butter.",
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/9a9d105937fcfd0744da3a49976d508f.jpg",
            alt: "starters",
            title: "Salmon bruschetta",
            price: 4.95,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/9a9d105937fcfd0744da3a49976d508f.jpg",
            description:
              "Ciabatta, cheese cream, weak salty salmon, greenery, spices.",
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/022e17cce84bb9273af9f34faaade736.jpg",
            alt: "starters",
            title: "Baked peppers bruschetta",
            price: 3.02,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/022e17cce84bb9273af9f34faaade736.jpg",
            description:
              "Ciabatta, cheese cream, baked peppers, olives, basil, sheep cheese.",
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/b1509027de39c4cf544d1374631d51e8.jpg",
            alt: "starters",
            title: "Cheese triangles",
            price: 4.12,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/8b82bc37943b3a33aca46a59374cb788.jpg",
            description:
              "Chicken liver pate, butter, crispy bread, caramelized onions, garlic butter.",
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/c6c45589a7be0858704d2267d76459a8.jpg",
            alt: "starters",
            title: "Chicken sandwich",
            price: 4.94,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/b1509027de39c4cf544d1374631d51e8.jpg",
            description:
              "Focaccia, chicken, caramelized onion, sweet peppers, sauces.",
          },
        ],
      },
      {
        title: "Dessert",
        products: [
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/e096f3a0e4a4f1d0a34b398cdda342da.jpg",
            alt: "mousse",
            title: "Vegan Pistachio Mousse",
            price: 5.57,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/4b9df523b4b7acc96aeb9b2b1fcdb61e.jpg",
            description: "Vegan... cake with liquid chocolate filling inside",
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/8c4f48473dfd742e9aeab53399683320.jpg",
            alt: "fondant",
            title: "Fondant",
            price: 5.79,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/ce6bdff87794610561e20792faa8536f.jpg",
            description:
              "Chocolate cake with liquid chocolate filling inside, served hot with ice cream ball.",
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/dd289b0114fe374210d33dddf69d57e7.jpg",
            alt: "cheesecake",
            title: "Caramel cheesecake",
            price: 4.29,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/efdfc741e295776917332a4b7f69f600.jpg",
            description:
              "Cheesecake with Poppy, Schistas Carable, Kramble, Chocolate chips",
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/d934fd0c7f987cedea5b72bf9c03f50a.jpg",
            alt: "tiramisu",
            title: "Tiramisu",
            price: 4.57,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/4a527ded9f3644ecdd17150efd533d97.jpg",
            description:
              "Delicate Italian dessert with sweet cream and taste of strong coffee.",
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/49d19276396dc896143ce8e6292d7235.jpg",
            alt: "tart",
            title: "Apple tart",
            price: 3.39,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/f69bf82b0b1c2a589611d73678618200.jpg",
            description:
              "Apple tart, cream of whipped cream, crumbble, peppermint",
          },
        ],
      },
      {
        title: "Beverages",
        products: [
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/dda783ad6ca58bb4daab0c0f5ca1fdee.jpg",
            alt: "beverages",
            title: "Pomegranate tea",
            price: 3.49,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/dda783ad6ca58bb4daab0c0f5ca1fdee.jpg",
            description:
              "Fruit tea, pomegranate juice, anise, pomegranate, oranges",
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/e5a1dcca3bdceb501376241497370ac5.jpg",
            alt: "beverages",
            title: "Orange fresh",
            price: 4.05,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/e5a1dcca3bdceb501376241497370ac5.jpg",
            description: "Pomegranate juice, anise, pomegranate, oranges",
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/3d074ae3ffd8b591e3118a26b6bec517.jpg",
            alt: "beverages",
            title: "Apple punch",
            price: 3.02,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/3d074ae3ffd8b591e3118a26b6bec517.jpg",
            description:
              "Herbal tea, apple juice, honey, apple, peppermint, anise, cloves",
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/85323931c6a4ce157579e40b96b90203.jpg",
            alt: "beverages",
            title: "Lemonade",
            price: 4.72,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/85323931c6a4ce157579e40b96b90203.jpg",
            description: "Pomegranate juice, anise, pomegranate, oranges",
          },
          {
            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/2c737fbb956ee4dc9eef3c62b8884dee.jpg",
            alt: "beverages",
            title: "Cola cherry",
            price: 3.99,
            img: "https://andys.md/public/menu/thumbs/version_150x100x1/2c737fbb956ee4dc9eef3c62b8884dee.jpg",
            description:
              "Taste of cherry, pomegranate juice, anise, pomegranate, oranges",
          },
        ],
      }
    );
  }
};
