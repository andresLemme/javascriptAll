import stripeKeys from "./stripe-keys.js";
import STRIPE_KEYS from "./stripe-keys.js";
// console.log(STRIPE_KEYS);

const $tacos = document.getElementById("tacos"),
  $template = document.getElementById("taco-template").content,
  $fragment = document.createDocumentFragment(),
  fetchOption = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
  };
let prices, products;

const moneyFormat = (num) => `$${num.slice(0, -2)}.${num.slice(-2)}`;

Promise.all([
    fetch("https://api.stripe.com/v1/products", fetchOption),
    fetch("https://api.stripe.com/v1/prices", fetchOption),
  ])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    products = json[0].data;
    prices = json[1].data;
    // console.log(prices)
    // console.log(products, prices);
    prices.forEach((el) => {
      let productData = products.filter((product) => product.id === el.product);
      console.log(productData);

      $template.querySelector(".taco").setAttribute("data-price", el.id);
      $template.querySelector("img").src = productData[0].images[0];
      $template.querySelector("img").alt = productData[0].name;
      $template.querySelector("figcaption").innerHTML = `${productData[0].name}
      <br>
       ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
      `;

      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $tacos.appendChild($fragment);
  })
  .catch((err) => {
    console.log(err);
    let message =
      err.statusText || "Ocurrio un error al conectarse con la API Stripe";
    $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
  });

document.addEventListener("click", (e) => {
  if (e.target.matches(".taco *")) {
    let price = e.target.parentElement.getAttribute("data-price");
    //   console.log(priceID)
    Stripe(STRIPE_KEYS.public)
      .redirectToCheckout({
        line_items: [{
          price,
          quantity: 1
        }],
        mode: "subscription",
        successUrl: "http://127.0.0.1:5500/Practica%20-%20Ajax/assets/stripe-success.html",
        cancelUrl: "http://127.0.0.1:5500/Practica%20-%20Ajax/assets/stripe-cancel.html"
      })
      .then((res) => {
        if (res.error) {
          $tacos.insertAdjacentHTML("afterend", res.error.message);
        }
      });
  }
});

// fetch("https://api.stripe.com/v1/products", {

// }).then((res) =>{
//     console.log(res)
//     return res.json()
// }).then((json)=>{
//     console.log(json)
// })

// fetch("https://api.stripe.com/v1/prices", {
//     headers:{
//         Authorization: `Bearer ${STRIPE_KEYS.secret}`
//     }
// }).then((res) =>{
//     console.log(res)
//     return res.json()
// }).then((json)=>{
//     console.log(json)
// })