export const fetchProductsList = async () => {
  try {
    const response = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=lipstick"
    );
    return await response.json();
  } catch (err) {
    return console.warn(err);
  }
};

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
      `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
    );
    return await response.json();
  } catch (err) {
    return console.warn(err);
  }
};