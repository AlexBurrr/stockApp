

let ticker = sessionStorage.getItem("ticker").toUpperCase()




let today = Math.floor(Date.now())
console.log(today);


fetch('https://api.tdameritrade.com/v1/marketdata/' + ticker + '/pricehistory?apikey=XFQMEZGTK4PCZO3HKDM1AWE6YDF1GEEB&periodType=year&frequencyType=daily&endDate=' + today + '')
    .then(response => response.json())
    .then(tickData => {



        console.log(tickData);



        let seriesFunc = () => {
            let seriesArray = [];
            let i;
            for (i = 0; i < tickData.candles.length; i++) {
                seriesArray += { x: new Date(tickData.candles[i].datetime), y: [tickData.candles[i].open, tickData.candles[i].high, tickData.candles[i].low, tickData.candles[i].close] }
            }
            return seriesArray
        }

        seriesFunc()
        let options = {


            series: [{
                data: [{
                    x: new Date(tickData.candles[0].datetime),
                    y: [tickData.candles[0].open, tickData.candles[0].high, tickData.candles[0].low, tickData.candles[0].close]
                },
                {
                    x: new Date(tickData.candles[1].datetime),
                    y: [tickData.candles[1].open, tickData.candles[1].high, tickData.candles[1].low, tickData.candles[1].close]
                },
                {
                    x: new Date(tickData.candles[2].datetime),
                    y: [tickData.candles[2].open, tickData.candles[2].high, tickData.candles[2].low, tickData.candles[2].close]
                },
                {
                    x: new Date(tickData.candles[3].datetime),
                    y: [tickData.candles[3].open, tickData.candles[3].high, tickData.candles[3].low, tickData.candles[3].close]
                },
                {
                    x: new Date(tickData.candles[4].datetime),
                    y: [tickData.candles[4].open, tickData.candles[4].high, tickData.candles[4].low, tickData.candles[4].close]
                },
                {
                    x: new Date(tickData.candles[5].datetime),
                    y: [tickData.candles[5].open, tickData.candles[5].high, tickData.candles[5].low, tickData.candles[5].close]
                },
                {
                    x: new Date(tickData.candles[6].datetime),
                    y: [tickData.candles[6].open, tickData.candles[6].high, tickData.candles[6].low, tickData.candles[6].close]
                },
                {
                    x: new Date(tickData.candles[7].datetime),
                    y: [tickData.candles[7].open, tickData.candles[7].high, tickData.candles[7].low, tickData.candles[7].close]
                },
                {
                    x: new Date(tickData.candles[8].datetime),
                    y: [tickData.candles[8].open, tickData.candles[8].high, tickData.candles[8].low, tickData.candles[8].close]
                },
                {
                    x: new Date(tickData.candles[9].datetime),
                    y: [tickData.candles[9].open, tickData.candles[9].high, tickData.candles[9].low, tickData.candles[9].close]
                },
                {
                    x: new Date(tickData.candles[10].datetime),
                    y: [tickData.candles[10].open, tickData.candles[10].high, tickData.candles[10].low, tickData.candles[10].close]
                },
                {
                    x: new Date(tickData.candles[11].datetime),
                    y: [tickData.candles[11].open, tickData.candles[11].high, tickData.candles[11].low, tickData.candles[11].close]
                },
                {
                    x: new Date(tickData.candles[12].datetime),
                    y: [tickData.candles[12].open, tickData.candles[12].high, tickData.candles[12].low, tickData.candles[12].close]
                },
                {
                    x: new Date(tickData.candles[13].datetime),
                    y: [tickData.candles[13].open, tickData.candles[13].high, tickData.candles[13].low, tickData.candles[13].close]
                },
                {
                    x: new Date(tickData.candles[14].datetime),
                    y: [tickData.candles[14].open, tickData.candles[14].high, tickData.candles[14].low, tickData.candles[14].close]
                },
                {
                    x: new Date(tickData.candles[15].datetime),
                    y: [tickData.candles[15].open, tickData.candles[15].high, tickData.candles[15].low, tickData.candles[15].close]
                },
                {
                    x: new Date(tickData.candles[16].datetime),
                    y: [tickData.candles[16].open, tickData.candles[16].high, tickData.candles[16].low, tickData.candles[16].close]
                },
                {
                    x: new Date(tickData.candles[17].datetime),
                    y: [tickData.candles[17].open, tickData.candles[17].high, tickData.candles[17].low, tickData.candles[17].close]
                },
                {
                    x: new Date(tickData.candles[18].datetime),
                    y: [tickData.candles[18].open, tickData.candles[18].high, tickData.candles[18].low, tickData.candles[18].close]
                },
                {
                    x: new Date(tickData.candles[19].datetime),
                    y: [tickData.candles[19].open, tickData.candles[19].high, tickData.candles[19].low, tickData.candles[19].close]
                },
                {
                    x: new Date(tickData.candles[20].datetime),
                    y: [tickData.candles[20].open, tickData.candles[20].high, tickData.candles[20].low, tickData.candles[20].close]
                },
                {
                    x: new Date(tickData.candles[21].datetime),
                    y: [tickData.candles[21].open, tickData.candles[21].high, tickData.candles[21].low, tickData.candles[21].close]
                },
                {
                    x: new Date(tickData.candles[22].datetime),
                    y: [tickData.candles[22].open, tickData.candles[22].high, tickData.candles[22].low, tickData.candles[22].close]
                },
                {
                    x: new Date(tickData.candles[23].datetime),
                    y: [tickData.candles[23].open, tickData.candles[23].high, tickData.candles[23].low, tickData.candles[23].close]
                },
                {
                    x: new Date(tickData.candles[24].datetime),
                    y: [tickData.candles[24].open, tickData.candles[24].high, tickData.candles[24].low, tickData.candles[24].close]
                },
                {
                    x: new Date(tickData.candles[25].datetime),
                    y: [tickData.candles[25].open, tickData.candles[25].high, tickData.candles[25].low, tickData.candles[25].close]
                },
                {
                    x: new Date(tickData.candles[26].datetime),
                    y: [tickData.candles[26].open, tickData.candles[26].high, tickData.candles[26].low, tickData.candles[26].close]
                },
                {
                    x: new Date(tickData.candles[27].datetime),
                    y: [tickData.candles[27].open, tickData.candles[27].high, tickData.candles[27].low, tickData.candles[27].close]
                },
                {
                    x: new Date(tickData.candles[28].datetime),
                    y: [tickData.candles[28].open, tickData.candles[28].high, tickData.candles[28].low, tickData.candles[28].close]
                },
                {
                    x: new Date(tickData.candles[29].datetime),
                    y: [tickData.candles[29].open, tickData.candles[29].high, tickData.candles[29].low, tickData.candles[29].close]
                },
                {
                    x: new Date(tickData.candles[30].datetime),
                    y: [tickData.candles[30].open, tickData.candles[30].high, tickData.candles[30].low, tickData.candles[30].close]
                },
                {
                    x: new Date(tickData.candles[31].datetime),
                    y: [tickData.candles[31].open, tickData.candles[31].high, tickData.candles[31].low, tickData.candles[31].close]
                },
                {
                    x: new Date(tickData.candles[32].datetime),
                    y: [tickData.candles[32].open, tickData.candles[32].high, tickData.candles[32].low, tickData.candles[32].close]
                },
                {
                    x: new Date(tickData.candles[33].datetime),
                    y: [tickData.candles[33].open, tickData.candles[33].high, tickData.candles[33].low, tickData.candles[33].close]
                },
                {
                    x: new Date(tickData.candles[34].datetime),
                    y: [tickData.candles[34].open, tickData.candles[34].high, tickData.candles[34].low, tickData.candles[34].close]
                },
                {
                    x: new Date(tickData.candles[35].datetime),
                    y: [tickData.candles[35].open, tickData.candles[35].high, tickData.candles[35].low, tickData.candles[35].close]
                },
                {
                    x: new Date(tickData.candles[36].datetime),
                    y: [tickData.candles[36].open, tickData.candles[36].high, tickData.candles[36].low, tickData.candles[36].close]
                },
                {
                    x: new Date(tickData.candles[37].datetime),
                    y: [tickData.candles[37].open, tickData.candles[37].high, tickData.candles[37].low, tickData.candles[37].close]
                },
                {
                    x: new Date(tickData.candles[38].datetime),
                    y: [tickData.candles[38].open, tickData.candles[38].high, tickData.candles[38].low, tickData.candles[38].close]
                },
                {
                    x: new Date(tickData.candles[39].datetime),
                    y: [tickData.candles[39].open, tickData.candles[39].high, tickData.candles[39].low, tickData.candles[39].close]
                },
                {
                    x: new Date(tickData.candles[40].datetime),
                    y: [tickData.candles[40].open, tickData.candles[40].high, tickData.candles[40].low, tickData.candles[40].close]
                },
                {
                    x: new Date(tickData.candles[41].datetime),
                    y: [tickData.candles[41].open, tickData.candles[41].high, tickData.candles[41].low, tickData.candles[41].close]
                },
                {
                    x: new Date(tickData.candles[42].datetime),
                    y: [tickData.candles[42].open, tickData.candles[42].high, tickData.candles[42].low, tickData.candles[42].close]
                },
                {
                    x: new Date(tickData.candles[43].datetime),
                    y: [tickData.candles[43].open, tickData.candles[43].high, tickData.candles[43].low, tickData.candles[43].close]
                },
                {
                    x: new Date(tickData.candles[44].datetime),
                    y: [tickData.candles[44].open, tickData.candles[44].high, tickData.candles[44].low, tickData.candles[44].close]
                },
                {
                    x: new Date(tickData.candles[45].datetime),
                    y: [tickData.candles[45].open, tickData.candles[45].high, tickData.candles[45].low, tickData.candles[45].close]
                },
                {
                    x: new Date(tickData.candles[46].datetime),
                    y: [tickData.candles[46].open, tickData.candles[46].high, tickData.candles[46].low, tickData.candles[46].close]
                },
                {
                    x: new Date(tickData.candles[47].datetime),
                    y: [tickData.candles[47].open, tickData.candles[47].high, tickData.candles[47].low, tickData.candles[47].close]
                },
                {
                    x: new Date(tickData.candles[48].datetime),
                    y: [tickData.candles[48].open, tickData.candles[48].high, tickData.candles[48].low, tickData.candles[48].close]
                },
                {
                    x: new Date(tickData.candles[49].datetime),
                    y: [tickData.candles[49].open, tickData.candles[49].high, tickData.candles[49].low, tickData.candles[49].close]
                },
                {
                    x: new Date(tickData.candles[50].datetime),
                    y: [tickData.candles[50].open, tickData.candles[50].high, tickData.candles[50].low, tickData.candles[50].close]
                },
                {
                    x: new Date(tickData.candles[51].datetime),
                    y: [tickData.candles[51].open, tickData.candles[51].high, tickData.candles[51].low, tickData.candles[51].close]
                },
                {
                    x: new Date(tickData.candles[52].datetime),
                    y: [tickData.candles[52].open, tickData.candles[52].high, tickData.candles[52].low, tickData.candles[52].close]
                },
                {
                    x: new Date(tickData.candles[53].datetime),
                    y: [tickData.candles[53].open, tickData.candles[53].high, tickData.candles[53].low, tickData.candles[53].close]
                },
                {
                    x: new Date(tickData.candles[54].datetime),
                    y: [tickData.candles[54].open, tickData.candles[54].high, tickData.candles[54].low, tickData.candles[54].close]
                },
                {
                    x: new Date(tickData.candles[55].datetime),
                    y: [tickData.candles[55].open, tickData.candles[55].high, tickData.candles[55].low, tickData.candles[55].close]
                },
                {
                    x: new Date(tickData.candles[56].datetime),
                    y: [tickData.candles[56].open, tickData.candles[56].high, tickData.candles[56].low, tickData.candles[56].close]
                },
                {
                    x: new Date(tickData.candles[57].datetime),
                    y: [tickData.candles[57].open, tickData.candles[57].high, tickData.candles[57].low, tickData.candles[57].close]
                },
                {
                    x: new Date(tickData.candles[58].datetime),
                    y: [tickData.candles[58].open, tickData.candles[58].high, tickData.candles[58].low, tickData.candles[58].close]
                },
                {
                    x: new Date(tickData.candles[59].datetime),
                    y: [tickData.candles[59].open, tickData.candles[59].high, tickData.candles[59].low, tickData.candles[59].close]
                },
                {
                    x: new Date(tickData.candles[60].datetime),
                    y: [tickData.candles[60].open, tickData.candles[60].high, tickData.candles[60].low, tickData.candles[60].close]
                },
                {
                    x: new Date(tickData.candles[61].datetime),
                    y: [tickData.candles[61].open, tickData.candles[61].high, tickData.candles[61].low, tickData.candles[61].close]
                },
                {
                    x: new Date(tickData.candles[62].datetime),
                    y: [tickData.candles[62].open, tickData.candles[62].high, tickData.candles[62].low, tickData.candles[62].close]
                },
                {
                    x: new Date(tickData.candles[63].datetime),
                    y: [tickData.candles[63].open, tickData.candles[63].high, tickData.candles[63].low, tickData.candles[63].close]
                },
                {
                    x: new Date(tickData.candles[64].datetime),
                    y: [tickData.candles[64].open, tickData.candles[64].high, tickData.candles[64].low, tickData.candles[64].close]
                },
                {
                    x: new Date(tickData.candles[65].datetime),
                    y: [tickData.candles[65].open, tickData.candles[65].high, tickData.candles[65].low, tickData.candles[65].close]
                },
                {
                    x: new Date(tickData.candles[66].datetime),
                    y: [tickData.candles[66].open, tickData.candles[66].high, tickData.candles[66].low, tickData.candles[66].close]
                },
                {
                    x: new Date(tickData.candles[67].datetime),
                    y: [tickData.candles[67].open, tickData.candles[67].high, tickData.candles[16].low, tickData.candles[67].close]
                },
                {
                    x: new Date(tickData.candles[68].datetime),
                    y: [tickData.candles[68].open, tickData.candles[68].high, tickData.candles[68].low, tickData.candles[68].close]
                },
                {
                    x: new Date(tickData.candles[69].datetime),
                    y: [tickData.candles[69].open, tickData.candles[69].high, tickData.candles[69].low, tickData.candles[69].close]
                },
                {
                    x: new Date(tickData.candles[70].datetime),
                    y: [tickData.candles[70].open, tickData.candles[70].high, tickData.candles[70].low, tickData.candles[70].close]
                },
                {
                    x: new Date(tickData.candles[71].datetime),
                    y: [tickData.candles[71].open, tickData.candles[71].high, tickData.candles[71].low, tickData.candles[71].close]
                },
                {
                    x: new Date(tickData.candles[72].datetime),
                    y: [tickData.candles[72].open, tickData.candles[72].high, tickData.candles[72].low, tickData.candles[72].close]
                },
                {
                    x: new Date(tickData.candles[73].datetime),
                    y: [tickData.candles[73].open, tickData.candles[73].high, tickData.candles[73].low, tickData.candles[73].close]
                },
                {
                    x: new Date(tickData.candles[74].datetime),
                    y: [tickData.candles[74].open, tickData.candles[74].high, tickData.candles[74].low, tickData.candles[74].close]
                },
                {
                    x: new Date(tickData.candles[75].datetime),
                    y: [tickData.candles[75].open, tickData.candles[75].high, tickData.candles[75].low, tickData.candles[75].close]
                },
                {
                    x: new Date(tickData.candles[76].datetime),
                    y: [tickData.candles[76].open, tickData.candles[76].high, tickData.candles[76].low, tickData.candles[76].close]
                },
                {
                    x: new Date(tickData.candles[77].datetime),
                    y: [tickData.candles[77].open, tickData.candles[77].high, tickData.candles[77].low, tickData.candles[77].close]
                },
                {
                    x: new Date(tickData.candles[78].datetime),
                    y: [tickData.candles[78].open, tickData.candles[78].high, tickData.candles[78].low, tickData.candles[78].close]
                },
                {
                    x: new Date(tickData.candles[79].datetime),
                    y: [tickData.candles[79].open, tickData.candles[79].high, tickData.candles[79].low, tickData.candles[79].close]
                },
                {
                    x: new Date(tickData.candles[80].datetime),
                    y: [tickData.candles[80].open, tickData.candles[80].high, tickData.candles[80].low, tickData.candles[80].close]
                },
                {
                    x: new Date(tickData.candles[81].datetime),
                    y: [tickData.candles[81].open, tickData.candles[81].high, tickData.candles[81].low, tickData.candles[81].close]
                },
                {
                    x: new Date(tickData.candles[82].datetime),
                    y: [tickData.candles[82].open, tickData.candles[82].high, tickData.candles[82].low, tickData.candles[82].close]
                },
                {
                    x: new Date(tickData.candles[83].datetime),
                    y: [tickData.candles[83].open, tickData.candles[83].high, tickData.candles[83].low, tickData.candles[83].close]
                },
                {
                    x: new Date(tickData.candles[84].datetime),
                    y: [tickData.candles[84].open, tickData.candles[84].high, tickData.candles[84].low, tickData.candles[84].close]
                },
                {
                    x: new Date(tickData.candles[85].datetime),
                    y: [tickData.candles[85].open, tickData.candles[85].high, tickData.candles[85].low, tickData.candles[85].close]
                },
                {
                    x: new Date(tickData.candles[86].datetime),
                    y: [tickData.candles[86].open, tickData.candles[86].high, tickData.candles[86].low, tickData.candles[86].close]
                },
                {
                    x: new Date(tickData.candles[87].datetime),
                    y: [tickData.candles[87].open, tickData.candles[87].high, tickData.candles[87].low, tickData.candles[87].close]
                },
                {
                    x: new Date(tickData.candles[88].datetime),
                    y: [tickData.candles[88].open, tickData.candles[88].high, tickData.candles[88].low, tickData.candles[88].close]
                },
                {
                    x: new Date(tickData.candles[89].datetime),
                    y: [tickData.candles[89].open, tickData.candles[89].high, tickData.candles[89].low, tickData.candles[89].close]
                },
                {
                    x: new Date(tickData.candles[90].datetime),
                    y: [tickData.candles[90].open, tickData.candles[90].high, tickData.candles[90].low, tickData.candles[90].close]
                },
                {
                    x: new Date(tickData.candles[91].datetime),
                    y: [tickData.candles[91].open, tickData.candles[91].high, tickData.candles[91].low, tickData.candles[91].close]
                },
                {
                    x: new Date(tickData.candles[92].datetime),
                    y: [tickData.candles[92].open, tickData.candles[92].high, tickData.candles[92].low, tickData.candles[92].close]
                },
                {
                    x: new Date(tickData.candles[93].datetime),
                    y: [tickData.candles[93].open, tickData.candles[93].high, tickData.candles[93].low, tickData.candles[93].close]
                },
                {
                    x: new Date(tickData.candles[94].datetime),
                    y: [tickData.candles[94].open, tickData.candles[94].high, tickData.candles[94].low, tickData.candles[94].close]
                },
                {
                    x: new Date(tickData.candles[95].datetime),
                    y: [tickData.candles[95].open, tickData.candles[95].high, tickData.candles[95].low, tickData.candles[95].close]
                },
                {
                    x: new Date(tickData.candles[96].datetime),
                    y: [tickData.candles[96].open, tickData.candles[96].high, tickData.candles[96].low, tickData.candles[96].close]
                },
                {
                    x: new Date(tickData.candles[97].datetime),
                    y: [tickData.candles[97].open, tickData.candles[97].high, tickData.candles[97].low, tickData.candles[97].close]
                },
                {
                    x: new Date(tickData.candles[98].datetime),
                    y: [tickData.candles[98].open, tickData.candles[98].high, tickData.candles[98].low, tickData.candles[98].close]
                },
                {
                    x: new Date(tickData.candles[99].datetime),
                    y: [tickData.candles[99].open, tickData.candles[99].high, tickData.candles[99].low, tickData.candles[99].close]
                },
                {
                    x: new Date(tickData.candles[100].datetime),
                    y: [tickData.candles[100].open, tickData.candles[100].high, tickData.candles[100].low, tickData.candles[100].close]
                },
                {
                    x: new Date(tickData.candles[101].datetime),
                    y: [tickData.candles[101].open, tickData.candles[101].high, tickData.candles[101].low, tickData.candles[101].close]
                },
                {
                    x: new Date(tickData.candles[102].datetime),
                    y: [tickData.candles[102].open, tickData.candles[102].high, tickData.candles[102].low, tickData.candles[102].close]
                },
                {
                    x: new Date(tickData.candles[103].datetime),
                    y: [tickData.candles[103].open, tickData.candles[103].high, tickData.candles[103].low, tickData.candles[103].close]
                },
                {
                    x: new Date(tickData.candles[104].datetime),
                    y: [tickData.candles[104].open, tickData.candles[104].high, tickData.candles[104].low, tickData.candles[104].close]
                },
                {
                    x: new Date(tickData.candles[105].datetime),
                    y: [tickData.candles[105].open, tickData.candles[105].high, tickData.candles[105].low, tickData.candles[105].close]
                },
                {
                    x: new Date(tickData.candles[106].datetime),
                    y: [tickData.candles[106].open, tickData.candles[106].high, tickData.candles[106].low, tickData.candles[106].close]
                },
                {
                    x: new Date(tickData.candles[107].datetime),
                    y: [tickData.candles[107].open, tickData.candles[107].high, tickData.candles[107].low, tickData.candles[107].close]
                },
                {
                    x: new Date(tickData.candles[108].datetime),
                    y: [tickData.candles[108].open, tickData.candles[108].high, tickData.candles[108].low, tickData.candles[108].close]
                },
                {
                    x: new Date(tickData.candles[109].datetime),
                    y: [tickData.candles[109].open, tickData.candles[109].high, tickData.candles[109].low, tickData.candles[109].close]
                },
                {
                    x: new Date(tickData.candles[110].datetime),
                    y: [tickData.candles[110].open, tickData.candles[110].high, tickData.candles[110].low, tickData.candles[110].close]
                },
                {
                    x: new Date(tickData.candles[111].datetime),
                    y: [tickData.candles[111].open, tickData.candles[111].high, tickData.candles[111].low, tickData.candles[111].close]
                },
                {
                    x: new Date(tickData.candles[112].datetime),
                    y: [tickData.candles[112].open, tickData.candles[112].high, tickData.candles[112].low, tickData.candles[112].close]
                },
                {
                    x: new Date(tickData.candles[113].datetime),
                    y: [tickData.candles[113].open, tickData.candles[113].high, tickData.candles[113].low, tickData.candles[113].close]
                },
                {
                    x: new Date(tickData.candles[114].datetime),
                    y: [tickData.candles[114].open, tickData.candles[114].high, tickData.candles[114].low, tickData.candles[114].close]
                },
                {
                    x: new Date(tickData.candles[115].datetime),
                    y: [tickData.candles[115].open, tickData.candles[115].high, tickData.candles[115].low, tickData.candles[115].close]
                },
                {
                    x: new Date(tickData.candles[116].datetime),
                    y: [tickData.candles[116].open, tickData.candles[116].high, tickData.candles[116].low, tickData.candles[116].close]
                },
                {
                    x: new Date(tickData.candles[117].datetime),
                    y: [tickData.candles[117].open, tickData.candles[117].high, tickData.candles[117].low, tickData.candles[117].close]
                },
                {
                    x: new Date(tickData.candles[118].datetime),
                    y: [tickData.candles[118].open, tickData.candles[118].high, tickData.candles[118].low, tickData.candles[118].close]
                },
                {
                    x: new Date(tickData.candles[119].datetime),
                    y: [tickData.candles[119].open, tickData.candles[119].high, tickData.candles[119].low, tickData.candles[119].close]
                },
                {
                    x: new Date(tickData.candles[120].datetime),
                    y: [tickData.candles[120].open, tickData.candles[120].high, tickData.candles[120].low, tickData.candles[120].close]
                },
                {
                    x: new Date(tickData.candles[121].datetime),
                    y: [tickData.candles[121].open, tickData.candles[121].high, tickData.candles[121].low, tickData.candles[121].close]
                },
                {
                    x: new Date(tickData.candles[122].datetime),
                    y: [tickData.candles[122].open, tickData.candles[122].high, tickData.candles[122].low, tickData.candles[122].close]
                },
                {
                    x: new Date(tickData.candles[123].datetime),
                    y: [tickData.candles[123].open, tickData.candles[123].high, tickData.candles[123].low, tickData.candles[123].close]
                },
                {
                    x: new Date(tickData.candles[124].datetime),
                    y: [tickData.candles[124].open, tickData.candles[124].high, tickData.candles[124].low, tickData.candles[124].close]
                },
                {
                    x: new Date(tickData.candles[125].datetime),
                    y: [tickData.candles[125].open, tickData.candles[125].high, tickData.candles[125].low, tickData.candles[125].close]
                },
                {
                    x: new Date(tickData.candles[126].datetime),
                    y: [tickData.candles[126].open, tickData.candles[126].high, tickData.candles[126].low, tickData.candles[126].close]
                },
                {
                    x: new Date(tickData.candles[127].datetime),
                    y: [tickData.candles[127].open, tickData.candles[127].high, tickData.candles[127].low, tickData.candles[127].close]
                },
                {
                    x: new Date(tickData.candles[128].datetime),
                    y: [tickData.candles[128].open, tickData.candles[128].high, tickData.candles[128].low, tickData.candles[128].close]
                },
                {
                    x: new Date(tickData.candles[129].datetime),
                    y: [tickData.candles[129].open, tickData.candles[129].high, tickData.candles[129].low, tickData.candles[129].close]
                },
                {
                    x: new Date(tickData.candles[130].datetime),
                    y: [tickData.candles[130].open, tickData.candles[130].high, tickData.candles[130].low, tickData.candles[130].close]
                },
                {
                    x: new Date(tickData.candles[131].datetime),
                    y: [tickData.candles[131].open, tickData.candles[131].high, tickData.candles[131].low, tickData.candles[131].close]
                },
                {
                    x: new Date(tickData.candles[132].datetime),
                    y: [tickData.candles[132].open, tickData.candles[132].high, tickData.candles[132].low, tickData.candles[132].close]
                },
                {
                    x: new Date(tickData.candles[133].datetime),
                    y: [tickData.candles[133].open, tickData.candles[133].high, tickData.candles[133].low, tickData.candles[133].close]
                },
                {
                    x: new Date(tickData.candles[134].datetime),
                    y: [tickData.candles[134].open, tickData.candles[134].high, tickData.candles[134].low, tickData.candles[134].close]
                },
                {
                    x: new Date(tickData.candles[135].datetime),
                    y: [tickData.candles[135].open, tickData.candles[135].high, tickData.candles[135].low, tickData.candles[135].close]
                },
                {
                    x: new Date(tickData.candles[136].datetime),
                    y: [tickData.candles[136].open, tickData.candles[136].high, tickData.candles[136].low, tickData.candles[136].close]
                },
                {
                    x: new Date(tickData.candles[137].datetime),
                    y: [tickData.candles[137].open, tickData.candles[137].high, tickData.candles[137].low, tickData.candles[137].close]
                },
                {
                    x: new Date(tickData.candles[138].datetime),
                    y: [tickData.candles[138].open, tickData.candles[138].high, tickData.candles[138].low, tickData.candles[138].close]
                },
                {
                    x: new Date(tickData.candles[139].datetime),
                    y: [tickData.candles[139].open, tickData.candles[139].high, tickData.candles[139].low, tickData.candles[139].close]
                },
                {
                    x: new Date(tickData.candles[140].datetime),
                    y: [tickData.candles[140].open, tickData.candles[140].high, tickData.candles[140].low, tickData.candles[140].close]
                },
                {
                    x: new Date(tickData.candles[141].datetime),
                    y: [tickData.candles[141].open, tickData.candles[141].high, tickData.candles[141].low, tickData.candles[141].close]
                },
                {
                    x: new Date(tickData.candles[142].datetime),
                    y: [tickData.candles[142].open, tickData.candles[142].high, tickData.candles[142].low, tickData.candles[142].close]
                },
                {
                    x: new Date(tickData.candles[143].datetime),
                    y: [tickData.candles[143].open, tickData.candles[143].high, tickData.candles[143].low, tickData.candles[143].close]
                },
                {
                    x: new Date(tickData.candles[144].datetime),
                    y: [tickData.candles[144].open, tickData.candles[144].high, tickData.candles[144].low, tickData.candles[144].close]
                },
                {
                    x: new Date(tickData.candles[145].datetime),
                    y: [tickData.candles[145].open, tickData.candles[145].high, tickData.candles[145].low, tickData.candles[145].close]
                },
                {
                    x: new Date(tickData.candles[146].datetime),
                    y: [tickData.candles[146].open, tickData.candles[146].high, tickData.candles[146].low, tickData.candles[146].close]
                },
                {
                    x: new Date(tickData.candles[147].datetime),
                    y: [tickData.candles[147].open, tickData.candles[147].high, tickData.candles[147].low, tickData.candles[147].close]
                },
                {
                    x: new Date(tickData.candles[148].datetime),
                    y: [tickData.candles[148].open, tickData.candles[148].high, tickData.candles[148].low, tickData.candles[148].close]
                },
                {
                    x: new Date(tickData.candles[149].datetime),
                    y: [tickData.candles[149].open, tickData.candles[149].high, tickData.candles[149].low, tickData.candles[149].close]
                },
                {
                    x: new Date(tickData.candles[150].datetime),
                    y: [tickData.candles[150].open, tickData.candles[150].high, tickData.candles[150].low, tickData.candles[150].close]
                },
                {
                    x: new Date(tickData.candles[151].datetime),
                    y: [tickData.candles[151].open, tickData.candles[151].high, tickData.candles[151].low, tickData.candles[151].close]
                },
                {
                    x: new Date(tickData.candles[152].datetime),
                    y: [tickData.candles[152].open, tickData.candles[152].high, tickData.candles[152].low, tickData.candles[152].close]
                },
                {
                    x: new Date(tickData.candles[153].datetime),
                    y: [tickData.candles[153].open, tickData.candles[153].high, tickData.candles[153].low, tickData.candles[153].close]
                },
                {
                    x: new Date(tickData.candles[154].datetime),
                    y: [tickData.candles[154].open, tickData.candles[154].high, tickData.candles[154].low, tickData.candles[154].close]
                },
                {
                    x: new Date(tickData.candles[155].datetime),
                    y: [tickData.candles[155].open, tickData.candles[155].high, tickData.candles[155].low, tickData.candles[155].close]
                },
                {
                    x: new Date(tickData.candles[156].datetime),
                    y: [tickData.candles[156].open, tickData.candles[156].high, tickData.candles[156].low, tickData.candles[156].close]
                },
                {
                    x: new Date(tickData.candles[157].datetime),
                    y: [tickData.candles[157].open, tickData.candles[157].high, tickData.candles[157].low, tickData.candles[157].close]
                },
                {
                    x: new Date(tickData.candles[158].datetime),
                    y: [tickData.candles[158].open, tickData.candles[158].high, tickData.candles[158].low, tickData.candles[158].close]
                },
                {
                    x: new Date(tickData.candles[159].datetime),
                    y: [tickData.candles[159].open, tickData.candles[159].high, tickData.candles[159].low, tickData.candles[159].close]
                },
                {
                    x: new Date(tickData.candles[160].datetime),
                    y: [tickData.candles[160].open, tickData.candles[160].high, tickData.candles[160].low, tickData.candles[160].close]
                },
                {
                    x: new Date(tickData.candles[161].datetime),
                    y: [tickData.candles[161].open, tickData.candles[161].high, tickData.candles[161].low, tickData.candles[161].close]
                },
                {
                    x: new Date(tickData.candles[162].datetime),
                    y: [tickData.candles[162].open, tickData.candles[162].high, tickData.candles[162].low, tickData.candles[162].close]
                },
                {
                    x: new Date(tickData.candles[163].datetime),
                    y: [tickData.candles[163].open, tickData.candles[163].high, tickData.candles[163].low, tickData.candles[163].close]
                },
                {
                    x: new Date(tickData.candles[164].datetime),
                    y: [tickData.candles[164].open, tickData.candles[164].high, tickData.candles[164].low, tickData.candles[164].close]
                },
                {
                    x: new Date(tickData.candles[165].datetime),
                    y: [tickData.candles[165].open, tickData.candles[165].high, tickData.candles[165].low, tickData.candles[165].close]
                },
                {
                    x: new Date(tickData.candles[166].datetime),
                    y: [tickData.candles[166].open, tickData.candles[166].high, tickData.candles[166].low, tickData.candles[166].close]
                },
                {
                    x: new Date(tickData.candles[167].datetime),
                    y: [tickData.candles[167].open, tickData.candles[167].high, tickData.candles[167].low, tickData.candles[167].close]
                },
                {
                    x: new Date(tickData.candles[168].datetime),
                    y: [tickData.candles[168].open, tickData.candles[168].high, tickData.candles[168].low, tickData.candles[168].close]
                },
                {
                    x: new Date(tickData.candles[169].datetime),
                    y: [tickData.candles[169].open, tickData.candles[169].high, tickData.candles[169].low, tickData.candles[169].close]
                },
                {
                    x: new Date(tickData.candles[170].datetime),
                    y: [tickData.candles[170].open, tickData.candles[170].high, tickData.candles[170].low, tickData.candles[170].close]
                },
                {
                    x: new Date(tickData.candles[171].datetime),
                    y: [tickData.candles[171].open, tickData.candles[171].high, tickData.candles[171].low, tickData.candles[171].close]
                },
                {
                    x: new Date(tickData.candles[172].datetime),
                    y: [tickData.candles[172].open, tickData.candles[172].high, tickData.candles[172].low, tickData.candles[172].close]
                },
                {
                    x: new Date(tickData.candles[173].datetime),
                    y: [tickData.candles[173].open, tickData.candles[173].high, tickData.candles[173].low, tickData.candles[173].close]
                },
                {
                    x: new Date(tickData.candles[174].datetime),
                    y: [tickData.candles[174].open, tickData.candles[174].high, tickData.candles[174].low, tickData.candles[174].close]
                },
                {
                    x: new Date(tickData.candles[175].datetime),
                    y: [tickData.candles[175].open, tickData.candles[175].high, tickData.candles[175].low, tickData.candles[175].close]
                },
                {
                    x: new Date(tickData.candles[176].datetime),
                    y: [tickData.candles[176].open, tickData.candles[176].high, tickData.candles[176].low, tickData.candles[176].close]
                },
                {
                    x: new Date(tickData.candles[177].datetime),
                    y: [tickData.candles[177].open, tickData.candles[177].high, tickData.candles[177].low, tickData.candles[177].close]
                },
                {
                    x: new Date(tickData.candles[178].datetime),
                    y: [tickData.candles[178].open, tickData.candles[178].high, tickData.candles[178].low, tickData.candles[178].close]
                },
                {
                    x: new Date(tickData.candles[179].datetime),
                    y: [tickData.candles[179].open, tickData.candles[179].high, tickData.candles[179].low, tickData.candles[179].close]
                },
                {
                    x: new Date(tickData.candles[180].datetime),
                    y: [tickData.candles[180].open, tickData.candles[180].high, tickData.candles[180].low, tickData.candles[180].close]
                },
                {
                    x: new Date(tickData.candles[181].datetime),
                    y: [tickData.candles[181].open, tickData.candles[181].high, tickData.candles[181].low, tickData.candles[181].close]
                },
                {
                    x: new Date(tickData.candles[182].datetime),
                    y: [tickData.candles[182].open, tickData.candles[182].high, tickData.candles[182].low, tickData.candles[182].close]
                },
                {
                    x: new Date(tickData.candles[183].datetime),
                    y: [tickData.candles[183].open, tickData.candles[183].high, tickData.candles[183].low, tickData.candles[183].close]
                },
                {
                    x: new Date(tickData.candles[184].datetime),
                    y: [tickData.candles[184].open, tickData.candles[184].high, tickData.candles[184].low, tickData.candles[184].close]
                },
                {
                    x: new Date(tickData.candles[185].datetime),
                    y: [tickData.candles[185].open, tickData.candles[185].high, tickData.candles[185].low, tickData.candles[185].close]
                },
                {
                    x: new Date(tickData.candles[186].datetime),
                    y: [tickData.candles[186].open, tickData.candles[186].high, tickData.candles[186].low, tickData.candles[186].close]
                },
                {
                    x: new Date(tickData.candles[187].datetime),
                    y: [tickData.candles[187].open, tickData.candles[187].high, tickData.candles[187].low, tickData.candles[187].close]
                },
                {
                    x: new Date(tickData.candles[188].datetime),
                    y: [tickData.candles[188].open, tickData.candles[188].high, tickData.candles[188].low, tickData.candles[188].close]
                },
                {
                    x: new Date(tickData.candles[189].datetime),
                    y: [tickData.candles[189].open, tickData.candles[189].high, tickData.candles[189].low, tickData.candles[189].close]
                },
                {
                    x: new Date(tickData.candles[190].datetime),
                    y: [tickData.candles[190].open, tickData.candles[190].high, tickData.candles[190].low, tickData.candles[190].close]
                },
                {
                    x: new Date(tickData.candles[191].datetime),
                    y: [tickData.candles[191].open, tickData.candles[191].high, tickData.candles[191].low, tickData.candles[191].close]
                },
                {
                    x: new Date(tickData.candles[192].datetime),
                    y: [tickData.candles[192].open, tickData.candles[192].high, tickData.candles[192].low, tickData.candles[192].close]
                },
                {
                    x: new Date(tickData.candles[193].datetime),
                    y: [tickData.candles[193].open, tickData.candles[193].high, tickData.candles[193].low, tickData.candles[193].close]
                },
                {
                    x: new Date(tickData.candles[194].datetime),
                    y: [tickData.candles[194].open, tickData.candles[194].high, tickData.candles[194].low, tickData.candles[194].close]
                },
                {
                    x: new Date(tickData.candles[195].datetime),
                    y: [tickData.candles[195].open, tickData.candles[195].high, tickData.candles[195].low, tickData.candles[195].close]
                },
                {
                    x: new Date(tickData.candles[196].datetime),
                    y: [tickData.candles[196].open, tickData.candles[196].high, tickData.candles[196].low, tickData.candles[196].close]
                },
                {
                    x: new Date(tickData.candles[197].datetime),
                    y: [tickData.candles[197].open, tickData.candles[197].high, tickData.candles[197].low, tickData.candles[197].close]
                },
                {
                    x: new Date(tickData.candles[198].datetime),
                    y: [tickData.candles[198].open, tickData.candles[198].high, tickData.candles[198].low, tickData.candles[198].close]
                },
                {
                    x: new Date(tickData.candles[199].datetime),
                    y: [tickData.candles[199].open, tickData.candles[199].high, tickData.candles[199].low, tickData.candles[199].close]
                },
                {
                    x: new Date(tickData.candles[200].datetime),
                    y: [tickData.candles[200].open, tickData.candles[200].high, tickData.candles[200].low, tickData.candles[200].close]
                }, {
                    x: new Date(tickData.candles[201].datetime),
                    y: [tickData.candles[201].open, tickData.candles[201].high, tickData.candles[201].low, tickData.candles[201].close]
                },
                {
                    x: new Date(tickData.candles[202].datetime),
                    y: [tickData.candles[202].open, tickData.candles[202].high, tickData.candles[202].low, tickData.candles[202].close]
                },
                {
                    x: new Date(tickData.candles[203].datetime),
                    y: [tickData.candles[203].open, tickData.candles[203].high, tickData.candles[203].low, tickData.candles[203].close]
                },
                {
                    x: new Date(tickData.candles[204].datetime),
                    y: [tickData.candles[204].open, tickData.candles[204].high, tickData.candles[204].low, tickData.candles[204].close]
                },
                {
                    x: new Date(tickData.candles[205].datetime),
                    y: [tickData.candles[205].open, tickData.candles[205].high, tickData.candles[205].low, tickData.candles[205].close]
                },
                {
                    x: new Date(tickData.candles[206].datetime),
                    y: [tickData.candles[206].open, tickData.candles[206].high, tickData.candles[206].low, tickData.candles[206].close]
                },
                {
                    x: new Date(tickData.candles[207].datetime),
                    y: [tickData.candles[207].open, tickData.candles[207].high, tickData.candles[207].low, tickData.candles[207].close]
                },
                {
                    x: new Date(tickData.candles[208].datetime),
                    y: [tickData.candles[208].open, tickData.candles[208].high, tickData.candles[208].low, tickData.candles[208].close]
                },
                {
                    x: new Date(tickData.candles[209].datetime),
                    y: [tickData.candles[209].open, tickData.candles[209].high, tickData.candles[209].low, tickData.candles[209].close]
                },
                {
                    x: new Date(tickData.candles[210].datetime),
                    y: [tickData.candles[210].open, tickData.candles[210].high, tickData.candles[210].low, tickData.candles[210].close]
                },
                {
                    x: new Date(tickData.candles[211].datetime),
                    y: [tickData.candles[211].open, tickData.candles[211].high, tickData.candles[211].low, tickData.candles[211].close]
                },
                {
                    x: new Date(tickData.candles[212].datetime),
                    y: [tickData.candles[212].open, tickData.candles[212].high, tickData.candles[212].low, tickData.candles[212].close]
                },
                {
                    x: new Date(tickData.candles[213].datetime),
                    y: [tickData.candles[213].open, tickData.candles[213].high, tickData.candles[213].low, tickData.candles[213].close]
                },
                {
                    x: new Date(tickData.candles[214].datetime),
                    y: [tickData.candles[214].open, tickData.candles[214].high, tickData.candles[214].low, tickData.candles[214].close]
                },
                {
                    x: new Date(tickData.candles[215].datetime),
                    y: [tickData.candles[215].open, tickData.candles[215].high, tickData.candles[215].low, tickData.candles[215].close]
                },
                {
                    x: new Date(tickData.candles[216].datetime),
                    y: [tickData.candles[216].open, tickData.candles[216].high, tickData.candles[216].low, tickData.candles[216].close]
                },
                {
                    x: new Date(tickData.candles[217].datetime),
                    y: [tickData.candles[217].open, tickData.candles[217].high, tickData.candles[217].low, tickData.candles[217].close]
                },
                {
                    x: new Date(tickData.candles[218].datetime),
                    y: [tickData.candles[218].open, tickData.candles[218].high, tickData.candles[218].low, tickData.candles[218].close]
                },
                {
                    x: new Date(tickData.candles[219].datetime),
                    y: [tickData.candles[219].open, tickData.candles[219].high, tickData.candles[219].low, tickData.candles[219].close]
                },
                {
                    x: new Date(tickData.candles[220].datetime),
                    y: [tickData.candles[220].open, tickData.candles[220].high, tickData.candles[220].low, tickData.candles[220].close]
                },
                {
                    x: new Date(tickData.candles[221].datetime),
                    y: [tickData.candles[221].open, tickData.candles[221].high, tickData.candles[221].low, tickData.candles[221].close]
                },
                {
                    x: new Date(tickData.candles[222].datetime),
                    y: [tickData.candles[222].open, tickData.candles[222].high, tickData.candles[222].low, tickData.candles[222].close]
                },
                {
                    x: new Date(tickData.candles[223].datetime),
                    y: [tickData.candles[223].open, tickData.candles[223].high, tickData.candles[223].low, tickData.candles[223].close]
                },
                {
                    x: new Date(tickData.candles[224].datetime),
                    y: [tickData.candles[224].open, tickData.candles[224].high, tickData.candles[224].low, tickData.candles[224].close]
                },
                {
                    x: new Date(tickData.candles[225].datetime),
                    y: [tickData.candles[225].open, tickData.candles[225].high, tickData.candles[225].low, tickData.candles[225].close]
                },
                {
                    x: new Date(tickData.candles[226].datetime),
                    y: [tickData.candles[226].open, tickData.candles[226].high, tickData.candles[226].low, tickData.candles[226].close]
                },
                {
                    x: new Date(tickData.candles[227].datetime),
                    y: [tickData.candles[227].open, tickData.candles[227].high, tickData.candles[227].low, tickData.candles[227].close]
                },
                {
                    x: new Date(tickData.candles[228].datetime),
                    y: [tickData.candles[228].open, tickData.candles[228].high, tickData.candles[228].low, tickData.candles[228].close]
                },
                {
                    x: new Date(tickData.candles[229].datetime),
                    y: [tickData.candles[229].open, tickData.candles[229].high, tickData.candles[229].low, tickData.candles[229].close]
                },
                {
                    x: new Date(tickData.candles[230].datetime),
                    y: [tickData.candles[230].open, tickData.candles[230].high, tickData.candles[230].low, tickData.candles[230].close]
                },
                {
                    x: new Date(tickData.candles[231].datetime),
                    y: [tickData.candles[231].open, tickData.candles[231].high, tickData.candles[231].low, tickData.candles[231].close]
                },
                {
                    x: new Date(tickData.candles[232].datetime),
                    y: [tickData.candles[232].open, tickData.candles[232].high, tickData.candles[232].low, tickData.candles[232].close]
                },
                {
                    x: new Date(tickData.candles[233].datetime),
                    y: [tickData.candles[233].open, tickData.candles[233].high, tickData.candles[233].low, tickData.candles[233].close]
                },
                {
                    x: new Date(tickData.candles[234].datetime),
                    y: [tickData.candles[234].open, tickData.candles[234].high, tickData.candles[234].low, tickData.candles[234].close]
                },
                {
                    x: new Date(tickData.candles[235].datetime),
                    y: [tickData.candles[235].open, tickData.candles[235].high, tickData.candles[235].low, tickData.candles[235].close]
                },
                {
                    x: new Date(tickData.candles[236].datetime),
                    y: [tickData.candles[236].open, tickData.candles[236].high, tickData.candles[236].low, tickData.candles[236].close]
                },
                {
                    x: new Date(tickData.candles[237].datetime),
                    y: [tickData.candles[237].open, tickData.candles[237].high, tickData.candles[237].low, tickData.candles[237].close]
                },
                {
                    x: new Date(tickData.candles[238].datetime),
                    y: [tickData.candles[238].open, tickData.candles[238].high, tickData.candles[238].low, tickData.candles[238].close]
                },
                {
                    x: new Date(tickData.candles[239].datetime),
                    y: [tickData.candles[239].open, tickData.candles[239].high, tickData.candles[239].low, tickData.candles[239].close]
                },
                {
                    x: new Date(tickData.candles[240].datetime),
                    y: [tickData.candles[240].open, tickData.candles[240].high, tickData.candles[240].low, tickData.candles[240].close]
                },
                {
                    x: new Date(tickData.candles[241].datetime),
                    y: [tickData.candles[241].open, tickData.candles[241].high, tickData.candles[241].low, tickData.candles[241].close]
                },
                {
                    x: new Date(tickData.candles[242].datetime),
                    y: [tickData.candles[242].open, tickData.candles[242].high, tickData.candles[242].low, tickData.candles[242].close]
                },
                {
                    x: new Date(tickData.candles[243].datetime),
                    y: [tickData.candles[243].open, tickData.candles[243].high, tickData.candles[243].low, tickData.candles[243].close]
                },
                {
                    x: new Date(tickData.candles[244].datetime),
                    y: [tickData.candles[244].open, tickData.candles[244].high, tickData.candles[244].low, tickData.candles[244].close]
                },
                {
                    x: new Date(tickData.candles[245].datetime),
                    y: [tickData.candles[245].open, tickData.candles[245].high, tickData.candles[245].low, tickData.candles[245].close]
                },
                {
                    x: new Date(tickData.candles[246].datetime),
                    y: [tickData.candles[246].open, tickData.candles[246].high, tickData.candles[246].low, tickData.candles[246].close]
                },
                {
                    x: new Date(tickData.candles[247].datetime),
                    y: [tickData.candles[247].open, tickData.candles[247].high, tickData.candles[247].low, tickData.candles[247].close]
                },
                {
                    x: new Date(tickData.candles[248].datetime),
                    y: [tickData.candles[248].open, tickData.candles[248].high, tickData.candles[248].low, tickData.candles[248].close]
                },
                {
                    x: new Date(tickData.candles[249].datetime),
                    y: [tickData.candles[249].open, tickData.candles[249].high, tickData.candles[249].low, tickData.candles[249].close]
                },
                {
                    x: new Date(tickData.candles[250].datetime),
                    y: [tickData.candles[250].open, tickData.candles[250].high, tickData.candles[250].low, tickData.candles[250].close]
                },
                {
                    x: new Date(tickData.candles[251].datetime),
                    y: [tickData.candles[251].open, tickData.candles[251].high, tickData.candles[251].low, tickData.candles[251].close]
                },
                {
                    x: new Date(tickData.candles[252].datetime),
                    y: [tickData.candles[252].open, tickData.candles[252].high, tickData.candles[252].low, tickData.candles[252].close]
                }, {
                    x: new Date(tickData.candles[253].datetime),
                    y: [tickData.candles[253].open, tickData.candles[253].high, tickData.candles[253].low, tickData.candles[253].close]
                },


                ]


            }],
            chart: {
                type: 'candlestick',
                height: 350
            },
            title: {
                text: tickData.symbol,
                align: 'left'
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                tooltip: {
                    enabled: true
                }
            }
        };


        let chart = new ApexCharts(document.querySelector(".chart"), options);
        chart.render();
    }




    )


