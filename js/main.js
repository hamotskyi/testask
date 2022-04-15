let bankList = [];

let titlesWrap = document.getElementById('titlesWrapper');
let descriptionWrap = document.getElementById('descriptionWrapper');
let listBankSettings = document.getElementById('listBankSettings');
let divBankName = document.getElementById('divBankName');
let divNearBankName = document.getElementById('divNearBankName');
let divInterestRate = document.getElementById('divInterestRate');
let divNearInterestRate = document.getElementById('divNearInterestRate');
let divMaximumLoan = document.getElementById('divMaximumLoan');
let divNearMaximumLoan = document.getElementById('divNearMaximumLoan');
let divMinimumDownPayment = document.getElementById('divMinimumDownPayment');
let divNearMinimumDownPayment = document.getElementById('divNearMinimumDownPayment');
let divLoanTerm = document.getElementById('divLoanTerm');
let divNearLoanTerm = document.getElementById('divNearLoanTerm');
let divSubmit = document.getElementById('divSubmit');
let divCalculateMortgage = document.getElementById('divCalculateMortgage');



class Bank {
    constructor (title, interestRate, maxLoan, minDownPayment, loanTerm) {
        this.title = title;
        this.interestRate = interestRate;
        this.maxLoan = maxLoan;
        this.minDownPayment = minDownPayment;
        this.loanTerm = loanTerm;
    }
}

function createNewBank() {
    let addNewBank = document.getElementById('addNewBank');
    let inputBankName = document.createElement("input");
    let inputInterestRate = document.createElement("input");
    let inputMaximumLoan = document.createElement("input");
    let inputMinimumDownPayment = document.createElement("input");
    let inputLoanTerm = document.createElement("input");
    listBankSettings.style.display = "grid";
    divNearBankName.appendChild(inputBankName);
    divNearInterestRate.appendChild(inputInterestRate);
    divNearMaximumLoan.appendChild(inputMaximumLoan);
    divNearMinimumDownPayment.appendChild(inputMinimumDownPayment);
    divNearLoanTerm.appendChild(inputLoanTerm);
    addNewBank.remove();

}

function startLoad() {
    let div = document.createElement("div");
    let attId = document.createAttribute("id");
    let attOnclick = document.createAttribute('onclick')
    let textAddNewBank = document.createTextNode("add new bank")
    attId.value = "addNewBank";
    attOnclick.value = "createNewBank()"
    titlesWrap.appendChild(div);
    div.setAttributeNode(attId);
    div.setAttributeNode(attOnclick);
    div.appendChild(textAddNewBank);
}

document.addEventListener("DOMContentLoaded", startLoad)