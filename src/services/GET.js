// export const fetchProductsList = async (
//   type = "lipstick",
//   brand = "maybelline"
// ) => {
//   try {
//     const response = await fetch(
//       `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand !== "maybelline" ? `$brand=${brand}` : ""
//       }&product_type=${type !== "lipstick" ? `&type=${type}` : ""}`
//     );
//     return await response.json();
//   } catch (err) {
//     return console.warn(err);
//   }
// };

export const fetchProductsList = async ({ type, brand, filter }) => {
  try {
    let url = "";
    if (filter === "brands") {
      url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;
    } else if (filter === "categories") {
      url = `http://makeup-api.herokuapp.com/api/v1/products.json?&product_type=${type}`;
    }
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    return console.warn(err);
  }
}

export const fetchProductsListbyType = async (type) => {
  try {
    const response = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?&product_type=${type}`
    );
    return await response.json();
  } catch (err) {
    return console.warn(err);
  }
};

export const fetchProductsListbyBrand = async (brand) => {
  try {
    const response = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
    );
    return await response.json();
  } catch (err) {
    return console.warn(err);
  }
};

export const fetchProductsItem = async (id) => {
  try {
    const response = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
    );
    return await response.json();
  } catch (err) {
    return console.warn(err);
  }
};
