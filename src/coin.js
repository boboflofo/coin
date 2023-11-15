export class Coin {
  static async getCoin(coin) {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
      );
      const json = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}
        ${json.message}`;
        throw new Error(errorMessage);
      }
      return json;
    } catch (error) {
      return error;
    }
  }
  static async getCoinData(coin, date) {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coin}/history?date=${date}`
      );
      const json = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}
        ${json.message}`;
        throw new Error(errorMessage);
      }
      return json;
    } catch (error) {
      return error;
    }
  }
}
