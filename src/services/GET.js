export const fetchProductsList = async ({ type, brand, filter }) => {
  try {
    let url = "";
    if (filter === "brands") {
      url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;
    } else if (filter === "catalog") {
      url = `http://makeup-api.herokuapp.com/api/v1/products.json?&product_type=${type}`;
    } else if (filter === 'crossSelected') {
      url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${type}`
    }
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    return console.warn(err);
  }
}

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
