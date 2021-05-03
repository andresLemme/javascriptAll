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
      $template.querySelector("img").src=productData[0].images[0]
      $template.querySelector("img").alt=productData[0].name
      $template.querySelector("figcaption").innerHTML = 
      `${productData[0].name}
      <br>
      $ ${el.unit_amount_decimal} ${el.currency}
      `

      let $clone = document.importNode($template, true)
      $fragment.appendChild($clone)
    });

    $tacos.appendChild($fragment)
  })
  .catch((err) => {
    console.log(err);
    let message =
      err.statusText || "Ocurrio un error al conectarse con la API Stripe";
    $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
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
