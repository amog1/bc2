// SCI(profit and loss)
// revenue
// event listner of reveanue
document
  .getElementById("grossprofit")
  .addEventListener("click", calculateProfit);

//   Event Function
function calculateProfit() {
  // input
  let rev = +document.getElementById("revenue").value;
  let cost = +document.getElementById("cost").value;

  // process
  let grosspro = rev - cost;

  // output
  document.getElementById("profit").innerHTML = grosspro;
}

// Operating Profit
// event Listner of revenue
document
  .getElementById("operatingprofit")
  .addEventListener("click", calculateOprofit);

//   Event Function
function calculateOprofit() {
  // input
  let expense1 = +document.getElementById("expense1").value;
  let expense2 = +document.getElementById("expense2").value;
  //
  let rev = +document.getElementById("revenue").value;
  let cost = +document.getElementById("cost").value;

  // process
  let expenses = expense1 + expense2;
  let grosspro = rev - cost;
  let operatingprofit = grosspro - expenses;

  // output
  document.getElementById("OProfit").innerHTML = operatingprofit;
}

// Profit of the year before tax
// Event Listner
document
  .getElementById("profitbeforetax")
  .addEventListener("click", calculateprofitbeforetax);

//   Event Function
function calculateprofitbeforetax() {
  // input

  let expense1 = +document.getElementById("expense1").value;
  let expense2 = +document.getElementById("expense2").value;
  //
  let rev = +document.getElementById("revenue").value;
  let cost = +document.getElementById("cost").value;
  //

  let financecost = +document.getElementById("financecost").value;
  let financeincome = +document.getElementById("financeincome").value;

  //   process
  let expenses = expense1 + expense2;
  let grosspro = rev - cost;
  let operatingprofit = grosspro - expenses;
  let finance = operatingprofit + financeincome;
  let probeforetax = finance - financecost;

  // output
  document.getElementById("pretax").innerHTML = probeforetax;
}

// Profit of the year after tax
// Event Listner
document
  .getElementById("profitaftertax")
  .addEventListener("click", calculateprofitaftertax);

//   Event Function
function calculateprofitaftertax() {
  // input

  let expense1 = +document.getElementById("expense1").value;
  let expense2 = +document.getElementById("expense2").value;
  //
  let rev = +document.getElementById("revenue").value;
  let cost = +document.getElementById("cost").value;
  //

  let financecost = +document.getElementById("financecost").value;
  let financeincome = +document.getElementById("financeincome").value;
  //
  let numberoftax = +document.getElementById("tax").value;
  //   process
  let expenses = expense1 + expense2;
  let grosspro = rev - cost;
  let operatingprofit = grosspro - expenses;
  let finance = operatingprofit + financeincome;
  let probeforetax = finance - financecost;
  let proaftertax = probeforetax - numberoftax;
  // output
  document.getElementById("aftertax").innerHTML = proaftertax;
}
