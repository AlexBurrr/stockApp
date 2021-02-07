let symbolEntered = document.querySelector(".search");


let symbolName = document.querySelector(".name");
let searchedSymbol = document.querySelector(".titleName");
let tickerSearched = sessionStorage.getItem("ticker");
let coDesc = document.querySelector(".profile");
let coRevenue = document.querySelector(".revenue");
let coProf = document.querySelector(".profit")
let coCash = document.querySelector('.cash')
let coDebt = document.querySelector('.debt')

//SEC files
let link10q = document.querySelector('.sec-10q')
let link10k = document.querySelector('.sec-10k')
//news
let newsItemHeadline1 = document.querySelector('.news-1-headline')
let newsSource1 = document.querySelector('.news-source-1')
let newsItemSum1 = document.querySelector('.news-1-summary')
let newsItemLink1 = document.querySelector('.news-1-link')
let newsImg1 = document.querySelector('.img-1')
let newsUrl1 = document.querySelector('.news1url')

let newsItemHeadline2 = document.querySelector('.news-2-headline')
let newsSource2 = document.querySelector('.news-source-2')
let newsItemSum2 = document.querySelector('.news-2-summary')
let newsItemLink2 = document.querySelector('.news-2-link')
let newsImg2 = document.querySelector('.img-2')
let newsUrl2 = document.querySelector('.news2url')

let newsItemHeadline3 = document.querySelector('.news-3-headline')
let newsSource3 = document.querySelector('.news-source-3')
let newsItemSum3 = document.querySelector('.news-3-summary')
let newsItemLink3 = document.querySelector('.news-3-link')
let newsImg3 = document.querySelector('.img-3')
let newsUrl3 = document.querySelector('.news3url')

let newsItemHeadline4 = document.querySelector('.news-4-headline')
let newsSource4 = document.querySelector('.news-source-4')
let newsItemSum4 = document.querySelector('.news-4-summary')
let newsItemLink4 = document.querySelector('.news-4-link')
let newsImg4 = document.querySelector('.img-4')
let newsUrl4 = document.querySelector('.news4url')

let newsItemHeadline5 = document.querySelector('.news-5-headline')
let newsSource5 = document.querySelector('.news-source-5')
let newsItemSum5 = document.querySelector('.news-5-summary')
let newsItemLink5 = document.querySelector('.news-5-link')
let newsImg5 = document.querySelector('.img-5')
let newsUrl5 = document.querySelector('.news5url')

let newsItemHeadline6 = document.querySelector('.news-6-headline')
let newsSource6 = document.querySelector('.news-source-6')
let newsItemSum6 = document.querySelector('.news-6-summary')
let newsItemLink6 = document.querySelector('.news-6-link')
let newsImg6 = document.querySelector('.img-6')
let newsUrl6 = document.querySelector('.news6url')

let newsItemHeadline7 = document.querySelector('.news-7-headline')
let newsSource7 = document.querySelector('.news-source-7')
let newsItemSum7 = document.querySelector('.news-7-summary')
let newsItemLink7 = document.querySelector('.news-7-link')
let newsImg7 = document.querySelector('.img-7')
let newsUrl7 = document.querySelector('.news7url')


let year1 = document.querySelector('.year1')
let year2 = document.querySelector('.year2')
let year3 = document.querySelector('.year3')
let year4 = document.querySelector('.year4')

let cash1 = document.querySelector('.cash1')
let cash2 = document.querySelector('.cash2')
let cash3 = document.querySelector('.cash3')
let cash4 = document.querySelector('.cash4')

let debt1 = document.querySelector('.debt1')
let debt2 = document.querySelector('.debt2')
let debt3 = document.querySelector('.debt3')
let debt4 = document.querySelector('.debt4')

let revenue1 = document.querySelector('.revenue1')
let revenue2 = document.querySelector('.revenue2')
let revenue3 = document.querySelector('.revenue3')
let revenue4 = document.querySelector('.revenue4')

let profit1 = document.querySelector('.profit1')
let profit2 = document.querySelector('.profit2')
let profit3 = document.querySelector('.profit3')
let profit4 = document.querySelector('.profit4')




//https://finnhub.io/docs/api/filings
// finnhub api c0bhp9n48v6to0rp37g0
symbolEntered.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sessionStorage.setItem("ticker", (symbolEntered.value));
    window.location.reload()
  }
})

window.onload = () => {

  async function fetchURLs() {
    try {
      let [i, x, y, z, a] = await Promise.all([
        fetch("https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + sessionStorage.getItem("ticker") + "&apikey=Q8TH8DU0A9F8DFTK").then((response) => response.json()),
        fetch("https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=" + sessionStorage.getItem("ticker") + "&apikey=Q8TH8DU0A9F8DFTK").then((response) => response.json()),
        fetch("https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=" + sessionStorage.getItem("ticker") + "&apikey=Q8TH8DU0A9F8DFTK").then((response) => response.json()),
        fetch('https://www.finnhub.io/api/v1/stock/filings?symbol=' + sessionStorage.getItem("ticker") + "&token=c0bhp9n48v6to0rp37g0").then((response) => response.json()),
        fetch('https://finnhub.io/api/v1/company-news?symbol=' + sessionStorage.getItem("ticker") + '&from=2020-12-01&to=2021-12-31&token=c0bhp9n48v6to0rp37g0').then((response) => response.json())

      ]);
      console.log(a);
      // sec files console.log(z);
      // console.log(y);
      function filing10q() {

        for (info of z) {
          if (info.form === '10-Q') {
            return (info.filingUrl)
          }
          else ('error')
        }
      }

      function filing10k() {

        for (info of z) {
          if (info.form === '10-K') {
            return (info.filingUrl)
          }

          else ('error')
        }
      }

      filing10k()
      filing10q()
      symbolName.innerHTML = i.Name,
        coDesc.innerHTML = i.Description,
        searchedSymbol.innerHTML = tickerSearched.toUpperCase() + ", " + i.Name,
        console.log(x);
      ////////////////REVENUE FUNCTION///////////////////////////////////////////////////////////////////
      let revenueFunc = (i) => {
        return (`$${Number(x.annualReports[i].totalRevenue).toLocaleString()}`);
      }
      /////////////////////////////////////////////////////////////////////////////////////////////////
      ///////////////PROFIT FUNCTION//////////////////////////////
      let profitFunc = (i) => {
        return (`$${Number(x.annualReports[i].grossProfit).toLocaleString()}`)
      }
      /////////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////CASH FUNCTION///////////////////////////////////////////////////////////////////////
      let cashFunc = (i) => {

        return (` $${(Number(y.annualReports[i].cash) + Number(y.annualReports[i].cashAndShortTermInvestments)).toLocaleString()}`);

      }
      //////////////////////////DEBT FUNCTION///////////////////////////////////////////////////////////////////////
      let debtFunc = (i) => {
        return (`$${(Number(y.annualReports[i].totalLongTermDebt).toLocaleString())}`);
      }



      // coCash.innerHTML = ('Cash ' + cashFunc())

      link10q.setAttribute('href', filing10q())
      link10k.setAttribute('href', filing10k())


      newsItemHeadline1.innerHTML = (a[0].headline)
      newsSource1.innerHTML = (a[0]['source'])
      newsImg1.setAttribute('src', a[0].image)
      newsUrl1.setAttribute('href', a[0].url)

      newsItemHeadline2.innerHTML = (a[1].headline)
      newsSource2.innerHTML = (a[1]['source'])
      newsImg2.setAttribute('src', a[1].image)
      newsUrl2.setAttribute('href', a[1].url)

      newsItemHeadline3.innerHTML = (a[2].headline)
      newsSource3.innerHTML = (a[2]['source'])
      newsImg3.setAttribute('src', a[2].image)
      newsUrl3.setAttribute('href', a[2].url)



      newsItemHeadline4.innerHTML = (a[3].headline)
      newsSource4.innerHTML = (a[3]['source'])
      newsImg4.setAttribute('src', a[3].image)
      newsUrl4.setAttribute('href', a[3].url)


      newsItemHeadline5.innerHTML = (a[4].headline)
      newsSource5.innerHTML = (a[4]['source'])
      newsImg5.setAttribute('src', a[4].image)
      newsUrl5.setAttribute('href', a[4].url)


      newsItemHeadline6.innerHTML = (a[5].headline)
      newsSource6.innerHTML = (a[5]['source'])
      newsImg6.setAttribute('src', a[5].image)
      newsUrl6.setAttribute('href', a[5].url)


      newsItemHeadline7.innerHTML = (a[6].headline)
      newsSource7.innerHTML = (a[6]['source'])
      newsImg7.setAttribute('src', a[6].image)
      newsUrl7.setAttribute('href', a[6].url)


      year1.innerHTML = x.annualReports[0].fiscalDateEnding
      year2.innerHTML = x.annualReports[1].fiscalDateEnding
      year3.innerHTML = x.annualReports[2].fiscalDateEnding
      year4.innerHTML = x.annualReports[3].fiscalDateEnding

      cash1.innerHTML = cashFunc(0)
      cash2.innerHTML = cashFunc(1)
      cash3.innerHTML = cashFunc(2)
      cash4.innerHTML = cashFunc(3)

      debt1.innerHTML = debtFunc(0)
      debt2.innerHTML = debtFunc(1)
      debt3.innerHTML = cashFunc(2)
      debt4.innerHTML = cashFunc(3)


      revenue1.innerHTML = revenueFunc(0)
      revenue2.innerHTML = revenueFunc(1)
      revenue3.innerHTML = revenueFunc(2)
      revenue4.innerHTML = revenueFunc(3)


      profit1.innerHTML = profitFunc(0)
      profit2.innerHTML = profitFunc(1)
      profit3.innerHTML = profitFunc(2)
      profit4.innerHTML = profitFunc(3)
























    }

    catch (error) {
      console.log(error);

    }
  }

  fetchURLs()

}
