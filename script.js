// Database
const data = [
  {
    products: [
      {
        name: "apple",
        models: [
          {
            name: "13 pro",
            price: 80000,
            modelNumber: 20220321,
            color: "black, white, red",
          },
          {
            name: "13",
            price: 70000,
            modelNumber: 20201210,
            color: "black, white, red",
          },
          {
            name: "13 pro max",
            price: 90000,
            modelNumber: 2021,
            color: "black, white, red",
          },
        ],
      },
      {
        name: "samsung",
        models: [
          {
            name: "s10",
            price: 90000,
            modelNumber: 2022765,
            color: "black, white, red",
          },
          {
            name: "s9",
            price: 70000,
            modelNumber: 2020876,
            color: "black, white, red",
          },
          {
            name: "s8",
            price: 60000,
            modelNumber: 2021765,
            color: "black, white, red",
          },
        ],
      },
      {
        name: "oneplus",
        models: [
          {
            name: "7 pro",
            price: 40000,
            modelNumber: 2022765,
            color: "black, white, red",
          },
          {
            name: "8 pro",
            price: 50000,
            modelNumber: 2020876,
            color: "black, white, red",
          },
          {
            name: "9 pro",
            price: 60000,
            modelNumber: 2021765,
            color: "black, white, red",
          },
        ],
      },
    ],
  },
];

// Class and object: to fetch the data from the database
class Product {
  constructor(data) {
    this.data = data;
  }

  getModel(brand, model) {
    // brandData checks the input brand(parameter)
    const brandData = this.data[0].products.find(
      (product) => product.name === brand
    );

    if (!brandData) {
      throw new Error(`No data found for brand: ${brand}`);
    }
    // productDetails checks the input model(parameter)
    const productDetails = brandData.models
      .filter((p) => p.name === model || !model)
      .map((p) => ({
        model: p.name,
        price: p.price,
        modelNumber: p.modelNumber,
        color: p.color,
      }));

    if (productDetails.length === 0) {
      throw new Error(`No data found for model: ${model}`);
    }

    return productDetails;
  }
}

const product = new Product(data);
const brand = prompt("Enter your Brand");
const model = prompt("Enter your Model (optional)");

// Exception Handling
try {
  console.log(product.getModel(brand, model));
} catch (error) {
  console.error(error.message);
}
