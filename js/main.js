let bankList = [];
let quantityOfBankDivs = 0;
let flagForAddNewBank = 0;
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
let liCancelSubmit = document.getElementById('liCancelSubmit');
let liDeleteCalculate = document.getElementById('liDeleteCalculate');
let divSubmit = document.getElementById('divSubmit');
let divCalculateMortgage = document.getElementById('divCalculateMortgage');
let divDelete = document.getElementById('divDelete');
let divCancel = document.getElementById('divCancel');

//// TO DO LIST:
// - inputs placeholder
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

    let signForInputInterestRate = document.createTextNode("  %");
    let signForInputMaximumLoan = document.createTextNode("  $");
    let singForInputMinimumDownPayment = document.createTextNode("  %");
    let singForInputLoanTerm = document.createTextNode("  months");

    idForInputBankName.value = "inputBankName";
    idForInputInterestRate.value = "inputInterestRate";
    idForInputMaximumLoan.value = "inputMaximumLoan";
    idForInputMinimumDownPayment.value = "inputMinimumDownPayment";
    idForInputLoanTerm.value = "inputLoanTerm";

    divNearBankName.innerHTML = "";
    divNearInterestRate.innerHTML = "";
    divNearMaximumLoan.innerHTML = "";
    divNearMinimumDownPayment.innerHTML = "";
    divNearLoanTerm.innerHTML = "";
    
    divNearBankName.appendChild(inputBankName);
    divNearInterestRate.appendChild(inputInterestRate);
    divNearMaximumLoan.appendChild(inputMaximumLoan);
    divNearMinimumDownPayment.appendChild(inputMinimumDownPayment);
    divNearLoanTerm.appendChild(inputLoanTerm);

    divNearInterestRate.appendChild(signForInputInterestRate);
    divNearMaximumLoan.appendChild(signForInputMaximumLoan);
    divNearMinimumDownPayment.appendChild(singForInputMinimumDownPayment);
    divNearLoanTerm.appendChild(singForInputLoanTerm);

    inputBankName.setAttributeNode(idForInputBankName);
    inputInterestRate.setAttributeNode(idForInputInterestRate);
    inputMaximumLoan.setAttributeNode(idForInputMaximumLoan);
    inputMinimumDownPayment.setAttributeNode(idForInputMinimumDownPayment);
    inputLoanTerm.setAttributeNode(idForInputLoanTerm);

    listBankSettings.style.display = "grid";
    liDeleteCalculate.style.display = "none";
    liCancelSubmit.style.display = "grid";

    addNewBank.remove();
    flagForAddNewBank = 0;

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

    flagForAddNewBank = 1;

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

function submitTest() {

    let index = bankList.length;
    let newBank = new Bank;
    newBank.index = index;
    newBank.title = document.getElementById("inputBankName").value;
    newBank.interestRate = document.getElementById("inputInterestRate").value;
    newBank.maxLoan = document.getElementById("inputMaximumLoan").value;
    newBank.minDownPayment = document.getElementById("inputMinimumDownPayment").value;
    newBank.loanTerm = document.getElementById("inputLoanTerm").value;
    bankList.push(newBank);

    if (quantityOfBankDivs <= 5) {
        
        // create new "bank button"
        let bankDiv = document.createElement("div");
        let attIdForBankDiv = document.createAttribute("id");
        let attClassForBankDiv = document.createAttribute("class");
        let attOnclickForBankDiv  = document.createAttribute('onclick');
        let bankTitle = document.getElementById("inputBankName").value;
        let bankNameNode = document.createTextNode(bankTitle);
        attIdForBankDiv.value = index;
        attClassForBankDiv.value = "bankDiv";
        attOnclickForBankDiv.value = "showBankInfo(this)";
        titlesWrap.appendChild(bankDiv);
        bankDiv.setAttributeNode(attIdForBankDiv);
        bankDiv.setAttributeNode(attClassForBankDiv);
        bankDiv.setAttributeNode(attOnclickForBankDiv);
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

        flagForAddNewBank = 1;

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
        let attOnclickForBankDiv = document.createAttribute('onclick');
        let bankTitle = document.getElementById("inputBankName").value;
        let bankNameNode = document.createTextNode(bankTitle);
        attIdForBankDiv.value = index;
        attClassForBankDiv.value = "bankDiv";
        attOnclickForBankDiv.value = "showBankInfo(this)";
        titlesWrap.appendChild(bankDiv);
        bankDiv.setAttributeNode(attIdForBankDiv);
        bankDiv.setAttributeNode(attClassForBankDiv);
        bankDiv.setAttributeNode(attOnclickForBankDiv);
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
        flagForAddNewBank = 0;
    }
     
}

function submit() {
    let titleVar = document.getElementById("inputBankName").value;
    let title = titleVar.length;
    let interestRateVar = document.getElementById("inputInterestRate").value;
    let interestRate = Number.parseInt(interestRateVar);
    let maxLoanVar = document.getElementById("inputMaximumLoan").value;
    let maxLoan = Number.parseInt(maxLoanVar);
    let minDownPaymentVar = document.getElementById("inputMinimumDownPayment").value;
    let minDownPayment = Number.parseInt(minDownPaymentVar);
    let loanTermVar = document.getElementById("inputLoanTerm").value;
    let loanTerm = Number.parseInt(loanTermVar);


    if (title > 25 || title == 0 || interestRate > 101 || interestRate < 1 || isNaN(interestRate) || maxLoan > 1000000 || maxLoan < 1000 || isNaN(maxLoan) || minDownPayment > 99 || minDownPayment < 1 || isNaN(minDownPayment) || loanTerm > 60 || loanTerm < 12 || isNaN(loanTerm)) {
        
        let timerColor = setInterval(() => divSubmit.style.backgroundColor = "darkred", 0);
        setTimeout(() => { clearInterval(timerColor); divSubmit.style.backgroundColor = "transparent"; }, 200);

    } else {
        let index = bankList.length;
        let newBank = new Bank;
        newBank.index = index;
        newBank.title = document.getElementById("inputBankName").value;
        newBank.interestRate = document.getElementById("inputInterestRate").value;
        newBank.maxLoan = document.getElementById("inputMaximumLoan").value;
        newBank.minDownPayment = document.getElementById("inputMinimumDownPayment").value;
        newBank.loanTerm = document.getElementById("inputLoanTerm").value;
        bankList.push(newBank);

        if (quantityOfBankDivs <= 5) {
            
            // create new "bank button"
            let bankDiv = document.createElement("div");
            let attIdForBankDiv = document.createAttribute("id");
            let attClassForBankDiv = document.createAttribute("class");
            let attOnclickForBankDiv  = document.createAttribute('onclick');
            let bankTitle = document.getElementById("inputBankName").value;
            let bankNameNode = document.createTextNode(bankTitle);
            attIdForBankDiv.value = index;
            attClassForBankDiv.value = "bankDiv";
            attOnclickForBankDiv.value = "showBankInfo(this)";
            titlesWrap.appendChild(bankDiv);
            bankDiv.setAttributeNode(attIdForBankDiv);
            bankDiv.setAttributeNode(attClassForBankDiv);
            bankDiv.setAttributeNode(attOnclickForBankDiv);
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

            flagForAddNewBank = 1;

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
            let attOnclickForBankDiv = document.createAttribute('onclick');
            let bankTitle = document.getElementById("inputBankName").value;
            let bankNameNode = document.createTextNode(bankTitle);
            attIdForBankDiv.value = index;
            attClassForBankDiv.value = "bankDiv";
            attOnclickForBankDiv.value = "showBankInfo(this)";
            titlesWrap.appendChild(bankDiv);
            bankDiv.setAttributeNode(attIdForBankDiv);
            bankDiv.setAttributeNode(attClassForBankDiv);
            bankDiv.setAttributeNode(attOnclickForBankDiv);
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
            flagForAddNewBank = 0;
        }
    }


}

function showBankInfo(x) {

    let index = x.id;
    let bankObj = bankList[index];
    let bankName = document.createTextNode(bankObj.title);
    let bankInterestRate = document.createTextNode(`${bankObj.interestRate}%`);
    let bankMaxLoan = document.createTextNode(`$${bankObj.maxLoan}`);
    let bankMinDownPayment = document.createTextNode(`${bankObj.minDownPayment}%`);
    let bankLoanTerm = document.createTextNode(`${bankObj.loanTerm} months`);

    divNearBankName.innerHTML = "";
    divNearInterestRate.innerHTML = "";
    divNearMaximumLoan.innerHTML = "";
    divNearMinimumDownPayment.innerHTML = "";
    divNearLoanTerm.innerHTML = "";

    divNearBankName.appendChild(bankName);
    divNearInterestRate.appendChild(bankInterestRate);
    divNearMaximumLoan.appendChild(bankMaxLoan);
    divNearMinimumDownPayment.appendChild(bankMinDownPayment);
    divNearLoanTerm.appendChild(bankLoanTerm);

    listBankSettings.style.display = "grid";
    liDeleteCalculate.style.display = "grid";
    liCancelSubmit.style.display = "none";

    divDelete.className = `${index}`;
    divCalculateMortgage.className = `${index}`;

    if (flagForAddNewBank == 0 && quantityOfBankDivs <= 6) {

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
    
        flagForAddNewBank = 1;

    } else if (flagForAddNewBank == 1 || quantityOfBankDivs == 7) {
        console.log("what are you looking for here?");
    }

}

function deleteBank(x) {

    let id = x.className;
    let deletedDiv = document.getElementById(`${id}`);
    deletedDiv.remove();
    listBankSettings.style.display = "none";
    quantityOfBankDivs = quantityOfBankDivs - 1;

    if (flagForAddNewBank == 0) {

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
    
        flagForAddNewBank = 1;

    } else if (flagForAddNewBank == 1) {
        console.log("what are you looking for here?");
    }

}

function goToCalculator(x) {

    window.scrollTo(0, 3000);
    console.log("hi");

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

    flagForAddNewBank = 1;

}

document.addEventListener("DOMContentLoaded", startLoad)