// import Chart from 'chart.js/auto'

// (async function() {
//   const data = [
//     { year: 2010, count: 10 },
//     { year: 2011, count: 20 },
//     { year: 2012, count: 15 },
//     { year: 2013, count: 25 },
//     { year: 2014, count: 22 },
//     { year: 2015, count: 30 },
//     { year: 2016, count: 28 },
//   ];

//   new Chart(
//     document.getElementById('acquisitions'),
//     {
//       type: 'bar',
//       data: {
//         labels: data.map(row => row.year),
//         datasets: [
//           {
//             label: 'Acquisitions by year',
//             data: data.map(row => row.count)
//           }
//         ]
//       }
//     }
//   );
// })();

// async function graphdData(url = "", data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: "post", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// graphdData('http://localhost:5550/answer',{answer:42}).then((data)=>{
//   console.log(data);
// })

console.log(window.location.href);

// let response;
// // let fetchData = {
// //   method: 'get',
// //   headers: new Headers({
// //     'Content-Type': 'application/json; charset=UTF-8'
// //   })
// // }

// fetch("http://localhost:5550/graph").then(res=>{
//   return res.json();
// }).then((data)=>{
//   response  = data;
// })
// console.log(response);
// let backendData = ;
// console.log(backendData);
// const xValues = [50,60,70,80,90,100,110,120,130,140,150];
// const yValues = [7,8,8,9,9,9,10,11,14,14,15];

// new Chart("myChart", {
//   type: "line",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor:"rgba(0,0,255,1.0)",
//       borderColor: "rgba(0,0,255,0.1)",
//       data: yValues
//     }]
//   },
//   options:{...}
// });

async function fetchData() {
  try {
    const response = await fetch("http://localhost:5550/graph");
    if (!response.ok) {
      // check if response went through
      throw new Error("HTTP error " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

fetchData().then((data) => {
  let debitamount = [];
  let creditamout = [];
  let day = [];
  for (i = 0; i < data[2].length; i++) {
    debitamount.push(data[1][i]);
  }
  for (i = 0; i < data[2].length; i++) {
    creditamout.push(data[0][i]);
  }
  for (i = 0; i < data[2].length; i++) {
    day.push(data[2][i]);
  }
  // console.log(amount);
  console.log(data[1]);
  xValues = day;
  yValues = creditamout;
  zValues = debitamount;
  new Chart("myChart1", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: "green",
          // borderColor: "green",
          data: yValues,
          label: "credited",
        },
        {
          backgroundColor: "red",
          // borderColor: "red",
          data: zValues,
          label: "debited",
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      
    }
  });

secondGraph=[];
secondGraph.push(data[3]);
secondGraph.push(data[4]);
secondGraph.push(data[5]);

new Chart("myChart2", {
  type: "pie",
  data: {
    labels: ['Total Credited','Total Debited','Total balance'],
    datasets: [{
      data: secondGraph,
      backgroundColor: ['green','red','blue'],
    },]
  }
});
  console.log(data);
});
// console.log(data);
