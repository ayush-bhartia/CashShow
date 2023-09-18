const select = document.querySelectorAll("select");
const input = document.querySelectorAll("input");
const API_URL =
  "https://v6.exchangerate-api.com/v6/e0eae965c3dbda121a7b2a4b/latest/USD";
let html = "";
var currency_data = {};
fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    currency_data = data.conversion_rates; //Storing the object in another 'currency_data' object
    const currency_selector = document.getElementById("currency-selector");
    const currency_selector1 = document.getElementById("currency-selector1");
    const currency_names = Object.keys(currency_data);

    currency_names.map((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.innerHTML = item;
      currency_selector.appendChild(option);
    });
    currency_names.map((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.innerHTML = item;
      currency_selector1.appendChild(option);
    });
  })
  .catch((err) => console.log(err));
document.getElementById("mybtn").addEventListener("click", () => convertFunc());
function convertFunc() {
  console.log(currency_data[select[1].value]);
  console.log(currency_data[input[0].value]);
  input[1].value =
    (input[0].value * currency_data[select[1].value]) /
    currency_data[select[0].value];
  input[0].value = input[0].value;
}
