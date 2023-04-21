const API_BASE_ADDRESS = "http://localhost:3002";

export default class Api {
  static async getAllProducts() {
    const url = `${API_BASE_ADDRESS}/api/products`;
    const data = await fetch(url, {
      method: "GET",
    });
    return data.json();
  }

  static async addToCart(item) {
    const url = `${API_BASE_ADDRESS}/api/cart`;
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    return data.json();
  }

  static async getCart() {
    const url = `${API_BASE_ADDRESS}/api/cart`;
    const data = await fetch(url, {
      method: "GET",
    });
    return data.json();
  }

  static async deleteFromCart(item) {
    const url = `${API_BASE_ADDRESS}/api/cart`;
    const data = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    return data.json();
  }
}
