let graph = function (req, res) {
  let arr = [];
  // for(i=0;i<req.user.transaction.length;i++){
  //     let data={};
  //     data.date=req.user.transaction[i].transferDate;
  //     let day1,day2,day3,day4,day5;
  //     if(new Date().getDate()-req.user.transaction[i].transferDate==1){
  //         day1+=req.user.transaction[i].amount;
  //     }
  //     else if(new Date().getDate()-req.user.transaction[i].transferDate==2){
  //         day2+=req.user.transaction[i].amount;
  //     }
  //     else if(new Date().getDate()-req.user.transaction[i].transferDate==3){
  //         day3+=req.user.transaction[i].amount;
  //     }
  //     else if(new Date().getDate()-req.user.transaction[i].transferDate==4){
  //         day4+=req.user.transaction[i].amount;
  //     }
  //     else if(new Date().getDate()-req.user.transaction[i].transferDate==5){
  //         day5+=req.user.transaction[i].amount;
  //     }

  //     arr.push(data);
  // }
  // let day1=0,day2=0,day3=0,day4=0,day5=0;
  let daydebitamt = [0, 0, 0, 0, 0];
  let daycreditamt = [0, 0, 0, 0, 0];
  let daydate = [];
  for (i = 0; i < req.user.transaction.length; i++) {
    if (req.user.transaction[i].status == "debited") {
      if (
        new Date().getDate() - req.user.transaction[i].transferDate.getDate() ==
        0
      ) {
        // console.log(dayamount[0]);
        daydebitamt[0] += +req.user.transaction[i].amount;
        daydate[0] =
          req.user.transaction[i].transferDate.getDate() +
          "/" +
          req.user.transaction[i].transferDate.getMonth() +
          "/" +
          req.user.transaction[i].transferDate.getFullYear();
      }
    } else {
      if (
        new Date().getDate() - req.user.transaction[i].transferDate.getDate() ==
        0
      ) {
        // console.log(dayamount[0]);
        daycreditamt[0] += +req.user.transaction[i].amount;
        daydate[0] =
          req.user.transaction[i].transferDate.getDate() +
          "/" +
          req.user.transaction[i].transferDate.getMonth() +
          "/" +
          req.user.transaction[i].transferDate.getFullYear();
      }
    }
  }
  for (i = 0; i < req.user.transaction.length; i++) {
    if (req.user.transaction[i].status == "debited") {
      if (
        new Date().getDate() - req.user.transaction[i].transferDate.getDate() ==
        1
      ) {
        // console.log(dayamount[1]);
        daydebitamt[1] += +req.user.transaction[i].amount;
        daydate[1] =
          req.user.transaction[i].transferDate.getDate() +
          "/" +
          req.user.transaction[i].transferDate.getMonth() +
          "/" +
          req.user.transaction[i].transferDate.getFullYear();
      }
    } else {
      if (
        new Date().getDate() - req.user.transaction[i].transferDate.getDate() ==
        1
      ) {
        // console.log(dayamount[1]);
        daycreditamt[1] += +req.user.transaction[i].amount;
        daydate[1] =
          req.user.transaction[i].transferDate.getDate() +
          "/" +
          req.user.transaction[i].transferDate.getMonth() +
          "/" +
          req.user.transaction[i].transferDate.getFullYear();
      }
    }
  }
  for (i = 0; i < req.user.transaction.length; i++) {
    if (req.user.transaction[i].status == "debited") {
      if (
        new Date().getDate() - req.user.transaction[i].transferDate.getDate() ==
        2
      ) {
        // console.log(dayamount[2]);
        daydebitamt[2] += +req.user.transaction[i].amount;
        daydate[2] =
          req.user.transaction[i].transferDate.getDate() +
          "/" +
          req.user.transaction[i].transferDate.getMonth() +
          "/" +
          req.user.transaction[i].transferDate.getFullYear();
      }
    } else {
      if (
        new Date().getDate() - req.user.transaction[i].transferDate.getDate() ==
        2
      ) {
        // console.log(dayamount[2]);
        daycreditamt[2] += +req.user.transaction[i].amount;
        daydate[2] =
          req.user.transaction[i].transferDate.getDate() +
          "/" +
          req.user.transaction[i].transferDate.getMonth() +
          "/" +
          req.user.transaction[i].transferDate.getFullYear();
      }
    }
  }
  for (i = 0; i < req.user.transaction.length; i++) {
    if (req.user.transaction[i].status == "debited") {
      if (
        new Date().getDate() - req.user.transaction[i].transferDate.getDate() ==
        3
      ) {
        // console.log(dayamount[3]);
        daydebitamt[3] += +req.user.transaction[i].amount;
        daydate[3] =
          req.user.transaction[i].transferDate.getDate() +
          "/" +
          req.user.transaction[i].transferDate.getMonth() +
          "/" +
          req.user.transaction[i].transferDate.getFullYear();
      }
    } else {
      if (
        new Date().getDate() - req.user.transaction[i].transferDate.getDate() ==
        3
      ) {
        // console.log(dayamount[3]);
        daycreditamt[3] += +req.user.transaction[i].amount;
        daydate[3] =
          req.user.transaction[i].transferDate.getDate() +
          "/" +
          req.user.transaction[i].transferDate.getMonth() +
          "/" +
          req.user.transaction[i].transferDate.getFullYear();
      }
    }
  }
  for (i = 0; i < req.user.transaction.length; i++) {
    if (req.user.transaction[i].status == "debited") {
      if (
        new Date().getDate() - req.user.transaction[i].transferDate.getDate() ==
        4
      ) {
        // console.log(dayamount[4]);
        daydebitamt[4] += +req.user.transaction[i].amount;
        daydate[4] =
          req.user.transaction[i].transferDate.getDate() +
          "/" +
          req.user.transaction[i].transferDate.getMonth() +
          "/" +
          req.user.transaction[i].transferDate.getFullYear();
      }
    } else {
      if (
        new Date().getDate() - req.user.transaction[i].transferDate.getDate() ==
        4
      ) {
        // console.log(dayamount[4]);
        daycreditamt[4] += +req.user.transaction[i].amount;
        daydate[4] =
          req.user.transaction[i].transferDate.getDate() +
          "/" +
          req.user.transaction[i].transferDate.getMonth() +
          "/" +
          req.user.transaction[i].transferDate.getFullYear();
      }
    }
  }
  // console.log(dayamount);
  // console.log(daydate);

  let credited = 0;
  let debited=0;
  for (var i = 0; i < req.user.transaction.length; i++) {
      if (req.user.transaction[i].status === "credited") {
        credited += (+req.user.transaction[i].amount);
      }
      else{
        debited += (+req.user.transaction[i].amount);
      }
  }
  let totalBalance=req.user.balance;
  arr = [daycreditamt, daydebitamt, daydate,credited,debited,totalBalance];

  // for(i=0;i<req.user.transaction.length;i++){
  //     let data={};
  //     data.date=req.user.transaction[i].transferDate;
  //     data.amount=dayamount[i];
  //     arr.push(data);
  // }

  // console.log(arr);
  let sendarr = JSON.stringify(arr);
  res.send(sendarr);
};

module.exports = graph;
