const quoteGen = document.querySelector("#genQuote");
const fvtBtn = document.querySelector("#fvtBtn");
const quote = document.querySelector("#quote");
const authName = document.querySelector("#authorName");

async function fecthAndShowQuote() {
  quote.innerHTML =
    '<div class="lds-ring"> <div></div><div></div><div></div><div></div></div>';
  authName.style.display = "none";
  const fetchedData = await fetch("https://type.fit/api/quotes");
  const data = await fetchedData.json();
  //   console.log(data);
  const randomNo = Math.floor(Math.random() * data.length);
  console.log(randomNo);
  authName.style.display = "block";
  quote.innerText = ` " ${data[randomNo].text} " `;
  authName.innerText = "-" + data[randomNo].author;
}

quoteGen.addEventListener("click", fecthAndShowQuote);

// console.log(quoteGen, fvtBtn, quote, authName);
// async function fetchData() {
//   const data = await fetch("https://type.fit/api/quotes");
//   const readAbleData = await data.json();
//   console.log(readAbleData);
// }

// fetchData();

// const obj = [
//   {
//     name: "jeet",
//     adress: {
//       streetNo: 43,
//     },
//   },
//   {
//     name: "kumar",
//     adress: {
//       streetNo: 44,
//     },
//   },
// ];

// console.log(obj[1].adress.streetNo);
