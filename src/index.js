import "./css/styles.css";
import { Coin } from "./coin.js";
alert("hello");

async function getCoin(coin) {
  const response = await Coin.getCoin(coin);
  const response2 = await Coin.getCoinData(coin);

  if (response.error) {
    printError(response, coin);
  } else {
    printElement(response, coin);
  }

  if (response2.error) {
    printError2(response2, coin);
  } else {
    printElement2(response2, coin);
  }
}

function printElement(response, coin) {
  document.querySelector("#result").innerText = `Price of ${coin} is ${response.bitcoin.usd}.`;
}
function printError(error, coin) {
  document.querySelector("#result").innerText = `Error ${coin}:${error}.`;
}
function printElement2(response2, coin) {
  document.querySelector("#resultData").innerText = `Price of ${coin} is ${response2.market_data.current_price.usd}.`;
  
}
function printError2(error, coin) {
  document.querySelector("#resultData").innerText = `Error ${coin}:${error}.`;
}


function handleSubmit(e) {
  e.preventDefault();
  const coin = document.querySelector("#coins").value;
  getCoin(coin);
}

window.addEventListener("load", () => {
  document.querySelector("#form").addEventListener("submit", handleSubmit);
});
