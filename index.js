"use strict";

let symbolEntered = document.querySelector(".search");

let symbolName = document.querySelector(".name");

symbolEntered.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sessionStorage.setItem("ticker", (symbolEntered.value));
    window.location.href = "searchResult/searchResult.html";

    // fetch(
    //   "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" +
    //     sessionStorage.getItem("ticker") +
    //     "&apikey=Q8TH8DU0A9F8DFTK"
    // )
    //   .then(response => response.json())
    //   .then(data => {
    //     let companyName = data.Name;
    //     console.log(data);
    //     symbolName.innerHTML = companyName;
    //   });
  }
});
