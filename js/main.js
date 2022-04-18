let bankList = [];
let quantityOfBankDivs = 0;
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

//// TO DO LIST:
// - delete button
// - bank info buttons
// - mortgage calculator


class Bank {
    constructor (index, title, interestRate, maxLoan, minDownPayment, loanTerm) {
        this.index = index;
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

    let idForInputBankName = document.createAttribute("id");
    let idForInputInterestRate = document.createAttribute("id");
    let idForInputMaximumLoan = document.createAttribute("id");
    let idForInputMinimumDownPayment = document.createAttribute("id");
    let idForInputLoanTerm = document.createAttribute("id");

    idForInputBankName.value = "inputBankName";
    idForInputInterestRate.value = "inputInterestRate";
    idForInputMaximumLoan.value = "inputMaximumLoan";
    idForInputMinimumDownPayment.value = "inputMinimumDownPayment";
    idForInputLoanTerm.value = "inputLoanTerm";

    divNearBankName.appendChild(inputBankName);
    divNearInterestRate.appendChild(inputInterestRate);
    divNearMaximumLoan.appendChild(inputMaximumLoan);
    divNearMinimumDownPayment.appendChild(inputMinimumDownPayment);
    divNearLoanTerm.appendChild(inputLoanTerm);

    inputBankName.setAttributeNode(idForInputBankName);
    inputInterestRate.setAttributeNode(idForInputInterestRate);
    inputMaximumLoan.setAttributeNode(idForInputMaximumLoan);
    inputMinimumDownPayment.setAttributeNode(idForInputMinimumDownPayment);
    inputLoanTerm.setAttributeNode(idForInputLoanTerm);

    listBankSettings.style.display = "grid";
    addNewBank.remove();

}

function cancelButton() {

    // create "add new bank" button
    let addNewBankDiv = document.createElement("div");
    let attIdForAddNewBank = document.createAttribute("id");
    let attOnclickForAddNewBank = document.createAttribute('onclick')
    let textAddNewBank = document.createTextNode("add new bank")
    attIdForAddNewBank.value = "addNewBank";
    attOnclickForAddNewBank.value = "createNewBank()"
    titlesWrap.appendChild(addNewBankDiv);
    addNewBankDiv.setAttributeNode(attIdForAddNewBank);
    addNewBankDiv.setAttributeNode(attOnclickForAddNewBank);
    addNewBankDiv.appendChild(textAddNewBank);

    // remove all inputs
    let inputBankName = document.getElementById("inputBankName");
    let inputInterestRate = document.getElementById("inputInterestRate");
    let inputMaximumLoan = document.getElementById("inputMaximumLoan");
    let inputMinimumDownPayment = document.getElementById("inputMinimumDownPayment");
    let inputLoanTerm = document.getElementById("inputLoanTerm");
    inputBankName.remove();
    inputInterestRate.remove();
    inputMaximumLoan.remove();
    inputMinimumDownPayment.remove();
    inputLoanTerm.remove();

    //hide field
    listBankSettings.style.display = "none";

}

function submit() {

    let index = bankList.length;
    let newBank = new Bank;
    newBank.index = index;
    newBank.title = document.getElementById("inputBankName").value;
    newBank.interestRate = document.getElementById("inputInterestRate").value;
    newBank.maxLoan = document.getElementById("inputMaximumLoan").value;
    newBank.minDownPayment = document.getElementById("inputMinimumDownPayment").value;
    newBank.loanTerm = document.getElementById("inputLoanTerm").value;
    bankList.push(newBank);

    //console.log(bankList)

    if (quantityOfBankDivs <= 5) {
        
        // create new "bank button"
        let bankDiv = document.createElement("div");
        let attIdForBankDiv = document.createAttribute("id");
        let attClassForBankDiv = document.createAttribute("class");
        //let  = document.createAttribute('onclick');
        let bankTitle = document.getElementById("inputBankName").value;
        let bankNameNode = document.createTextNode(bankTitle);
        attIdForBankDiv.value = index;
        attClassForBankDiv.value = "bankDiv";
        //attOnclickForBankDiv = "";
        titlesWrap.appendChild(bankDiv);
        bankDiv.setAttributeNode(attIdForBankDiv);
        bankDiv.setAttributeNode(attClassForBankDiv);
        //bankDiv.setAttributeNode(attOnclickForBankDiv);
        bankDiv.appendChild(bankNameNode);

        // create "add new bank" button
        let addNewBankDiv = document.createElement("div");
        let attIdForAddNewBank = document.createAttribute("id");
        let attOnclickForAddNewBank = document.createAttribute('onclick');
        let textAddNewBank = document.createTextNode("add new bank");
        attIdForAddNewBank.value = "addNewBank";
        attOnclickForAddNewBank.value = "createNewBank()"
        titlesWrap.appendChild(addNewBankDiv);
        addNewBankDiv.setAttributeNode(attIdForAddNewBank);
        addNewBankDiv.setAttributeNode(attOnclickForAddNewBank);
        addNewBankDiv.appendChild(textAddNewBank);

        // remove all inputs
        let inputBankName = document.getElementById("inputBankName");
        let inputInterestRate = document.getElementById("inputInterestRate");
        let inputMaximumLoan = document.getElementById("inputMaximumLoan");
        let inputMinimumDownPayment = document.getElementById("inputMinimumDownPayment");
        let inputLoanTerm = document.getElementById("inputLoanTerm");
        inputBankName.remove();
        inputInterestRate.remove();
        inputMaximumLoan.remove();
        inputMinimumDownPayment.remove();
        inputLoanTerm.remove();

        //hide field
        listBankSettings.style.display = "none";

        quantityOfBankDivs++;
        
    } else if (quantityOfBankDivs == 6) {

        // create new "bank button"
        let bankDiv = document.createElement("div");
        let attIdForBankDiv = document.createAttribute("id");
        let attClassForBankDiv = document.createAttribute("class");
        //let  = document.createAttribute('onclick');
        let bankTitle = document.getElementById("inputBankName").value;
        let bankNameNode = document.createTextNode(bankTitle);
        attIdForBankDiv.value = index;
        attClassForBankDiv.value = "bankDiv";
        //attOnclickForBankDiv = "";
        titlesWrap.appendChild(bankDiv);
        bankDiv.setAttributeNode(attIdForBankDiv);
        bankDiv.setAttributeNode(attClassForBankDiv);
        //bankDiv.setAttributeNode(attOnclickForBankDiv);
        bankDiv.appendChild(bankNameNode);
        
        // remove all inputs
        let inputBankName = document.getElementById("inputBankName");
        let inputInterestRate = document.getElementById("inputInterestRate");
        let inputMaximumLoan = document.getElementById("inputMaximumLoan");
        let inputMinimumDownPayment = document.getElementById("inputMinimumDownPayment");
        let inputLoanTerm = document.getElementById("inputLoanTerm");
        inputBankName.remove();
        inputInterestRate.remove();
        inputMaximumLoan.remove();
        inputMinimumDownPayment.remove();
        inputLoanTerm.remove();

        //hide field
        listBankSettings.style.display = "none";

        quantityOfBankDivs++;
    }
     
}

function startLoad() { 

    let addNewBankDiv = document.createElement("div");
    let attIdForAddNewBank = document.createAttribute("id");
    let attOnclickForAddNewBank = document.createAttribute('onclick')
    let textAddNewBank = document.createTextNode("add new bank")
    attIdForAddNewBank.value = "addNewBank";
    attOnclickForAddNewBank.value = "createNewBank()"
    titlesWrap.appendChild(addNewBankDiv);
    addNewBankDiv.setAttributeNode(attIdForAddNewBank);
    addNewBankDiv.setAttributeNode(attOnclickForAddNewBank);
    addNewBankDiv.appendChild(textAddNewBank);

}

document.addEventListener("DOMContentLoaded", startLoad)