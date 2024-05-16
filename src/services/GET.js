import typesData from '../data/types.json'

export const fetchProductsList = async ({ type, brand, tag, filter }) => {
  try {
    let url = "";
    if (filter === "brands") {
      url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;
    } else if (filter === "catalog") {
      url = `http://makeup-api.herokuapp.com/api/v1/products.json?&product_type=${type}`;
    } else if (filter === "product_tags") {
      url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=${tag}`;
    }
    // else if (filter === "all") {
    //   url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${type}&product_tags=${tag}`
    // }
    // console.log('GET.js filter', filter, 'type: ', type, 'brand: ', brand, 'tag: ', tag);
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

//////////-----------searchPart-------------//////////////////////

// } else if (filter === 'search') {
//   const productTypeNames = typesData.map(type => type.name.toLowerCase());
//   const searchLower = search.toLowerCase();
//   if (productTypeNames.includes(searchLower)) {
//     url = `http://makeup-api.herokuapp.com/api/v1/products.json?&product_type=${searchLower}`;
//   } else {
//     url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${search}`;
//   }