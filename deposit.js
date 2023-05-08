// add event listene add amount
const depositArea = document.getElementById("add-deposit");
depositArea.addEventListener("click", function () {
  // get the value of input field
  const dipositField = document.getElementById("deposit");
  const dipositAmountValue = dipositField.value;
  if ((dipositAmountValue <= 0) || isNaN(dipositAmountValue)) {
    alert("Enter a right value");
    dipositField.value = "";
  } else {
    // get diposit field amount field
    const dipositAmount = document.getElementById("deposit-amount");
    const diposit = dipositAmount.innerText;
    //  dipositAmountValue == diposit;
    const newAmount = parseFloat(diposit) + parseFloat(dipositAmountValue);
    dipositAmount.innerText = newAmount;
    dipositField.value = "";
    // set total amount
    const totalAmount = document.getElementById("total-amount");
    const total = totalAmount.innerText;
    totalAmount.innerText = parseFloat(total) + parseFloat(dipositAmountValue);
  }
});

const withdraw = document.getElementById("add-withdraw");
withdraw.addEventListener("click", function () {
  // get value from input

  const withdrawField = document.getElementById("withdraw");
  const withdrawAmount = withdrawField.value;
  const newWithdrawAmount = parseFloat(withdrawAmount);

  withdrawField.value = "";

  if ((withdrawAmount <= 0) || isNaN(withdrawAmount)) {
    alert("Enter a right value");
    return;
  }

  // add value in withdraw
  const newWithdraw = document.getElementById("withdraw-amount");
  const withdrawValue = newWithdraw.innerText;

  const totalAmount = document.getElementById("total-amount");
  const total = totalAmount.innerText;
  const newTotal = parseFloat(total);

  if (newWithdrawAmount > newTotal) {
    alert('tor baap ar ato taka nai');
    return;
  }

  newWithdraw.innerText = parseFloat(withdrawValue) + newWithdrawAmount;
  totalAmount.innerText = newTotal - newWithdrawAmount;
});

// add withdraw

// const withdraw = document.getElementById("add-withdraw");
// withdraw.addEventListener("click", function () {
//   // get value from input

//   const withdrawField = document.getElementById("withdraw");
//   const withdrawAmount = withdrawField.value;
//   const totalAmount = document.getElementById("total-amount");
//   const total = totalAmount.innerText;

//   if (withdrawAmount <= 0) {
//     alert("Enter a right value");
//     withdrawField.value = "";
//   }else {

//     if (withdrawAmount >= total) {
//       alert("your amount is not right");
//       withdrawField.value = "";
//     } else {
//       // add value in withdraw
//       const newWithdraw = document.getElementById("withdraw-amount");
//       let withdrawValue = newWithdraw.innerText;
//       newWithdraw.innerText =
//       parseFloat(withdrawValue) + parseFloat(withdrawAmount);
//       withdrawField.value = "";
//       // console.log(withdrawValue);
//       // withdrawValue = parseFloat(withdrawValue) + parseFloat(withdraw);
//       // console.log(withdrawValue);
//       // same js file
//       // what is // , && total > withdrawAmount
//       totalAmount.innerText = parseFloat(total) - parseFloat(withdrawAmount);
//     }
//   }
// });
