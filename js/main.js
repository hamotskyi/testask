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
let wrapperForCalculator = document.getElementById('wrapperForCalculator');
let calculateButton = document.getElementById('calculateButton');
let inputAmountOfBorrow = document.getElementById('inputAmountOfBorrow');
let inputTermOfLoan = document.getElementById('inputTermOfLoan');
let bankNameInsert = document.getElementById('bankNameInsert');
let downPaymentInsert = document.getElementById('downPaymentInsert');
let monthlyPaymentInsert = document.getElementById('monthlyPaymentInsert');
let loanTermInsert = document.getElementById('loanTermInsert');
let hiden = document.getElementById('hiden');


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

    let placeholderForInputBankName = document.createAttribute("placeholder");
    let placeholderForInputInterestRate = document.createAttribute("placeholder");
    let placeholderForInputMaximumLoan = document.createAttribute("placeholder");
    let placeholderForInputMinimumDownPayment = document.createAttribute("placeholder");
    let placeholderForInputLoanTerm = document.createAttribute("placeholder");

    let signForInputInterestRate = document.createTextNode("  %");
    let signForInputMaximumLoan = document.createTextNode("  $");
    let singForInputMinimumDownPayment = document.createTextNode("  %");
    let singForInputLoanTerm = document.createTextNode("  months");

    idForInputBankName.value = "inputBankName";
    idForInputInterestRate.value = "inputInterestRate";
    idForInputMaximumLoan.value = "inputMaximumLoan";
    idForInputMinimumDownPayment.value = "inputMinimumDownPayment";
    idForInputLoanTerm.value = "inputLoanTerm";

    placeholderForInputBankName.value = "max 25 symbols";
    placeholderForInputInterestRate.value = "from 1 to 100";
    placeholderForInputMaximumLoan.value = "from 1000 to 1000000";
    placeholderForInputMinimumDownPayment.value = "from 1 to 99";
    placeholderForInputLoanTerm.value = "from 12 to 60";

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

    inputBankName.setAttributeNode(placeholderForInputBankName);
    inputInterestRate.setAttributeNode(placeholderForInputInterestRate);
    inputMaximumLoan.setAttributeNode(placeholderForInputMaximumLoan);
    inputMinimumDownPayment.setAttributeNode(placeholderForInputMinimumDownPayment);
    inputLoanTerm.setAttributeNode(placeholderForInputLoanTerm);

    listBankSettings.style.display = "grid";
    liDeleteCalculate.style.display = "none";
    liCancelSubmit.style.display = "grid";

    addNewBank.remove();
    flagForAddNewBank = 0;

}

function cancelButton() {

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

    listBankSettings.style.display = "none";

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


    if (title > 25 || title == 0 || interestRate > 100 || interestRate < 1 || isNaN(interestRate) || maxLoan > 1000000 || maxLoan < 1000 || isNaN(maxLoan) || minDownPayment > 99 || minDownPayment < 1 || isNaN(minDownPayment) || loanTerm > 60 || loanTerm < 12 || isNaN(loanTerm)) {
        
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

            listBankSettings.style.display = "none";

            quantityOfBankDivs++;
            
        } else if (quantityOfBankDivs == 6) {

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

    let index = x.className;
    let bankObj = bankList[index];
    let bankMaxLoan = bankObj.maxLoan;
    let bankLoanTerm = bankObj.loanTerm;

    inputAmountOfBorrow.placeholder = `maximum ${bankMaxLoan}`;
    inputTermOfLoan.placeholder = `maximum ${bankLoanTerm}`;
    calculateButton.className = `${index}`;
    window.scrollTo(0, 3000);

}

function backToBankList() {
    window.scrollTo(0, 0);
    hiden.style.display = "none"
}

function calculateMortgage(x) {
    let index = x.className;
    let bankObj = bankList[index];
    let bankName = bankObj.title;
    let bankInterestRate = bankObj.interestRate/100;
    let bankMaxLoan = bankObj.maxLoan;
    let bankMinDownPayment = bankObj.minDownPayment;
    let bankLoanTerm = bankObj.loanTerm;
    let amountBorrowedValue = inputAmountOfBorrow.value;
    let amountBorrowed = Number.parseInt(amountBorrowedValue);
    let userLoanTermValue = inputTermOfLoan.value;
    let userLoanTerm = Number.parseInt(userLoanTermValue);


    if (amountBorrowed > bankMaxLoan || isNaN(amountBorrowed) || isNaN(userLoanTerm) || userLoanTerm > bankLoanTerm) {
        
        let timerColor = setInterval(() => x.style.backgroundColor = "darkred", 0);
        setTimeout(() => { clearInterval(timerColor); x.style.backgroundColor = "transparent"; }, 200);
    
    } else {
       
        let textBankName = document.createTextNode(`${bankName}`);
        bankNameInsert.innerHTML = "";
        bankNameInsert.appendChild(textBankName);

        let downPayment = amountBorrowed*bankMinDownPayment/100;
        let textDownPaymentInsert = document.createTextNode(`$${downPayment}`);
        downPaymentInsert.innerHTML = "";
        downPaymentInsert.appendChild(textDownPaymentInsert);

        let Num = 1+(bankInterestRate/12);
        let neededNum = Math.pow(Num, userLoanTerm);
        let monthlyPayment = (amountBorrowed*(bankInterestRate/12)*neededNum)/(neededNum-1);
        let textMonthlyPayment = document.createTextNode(`$${Math.round(monthlyPayment)}`);
        monthlyPaymentInsert.innerHTML = "";
        monthlyPaymentInsert.appendChild(textMonthlyPayment);

        let textLoanTerm = document.createTextNode(`${userLoanTerm} months`);
        loanTermInsert.innerHTML = "";
        loanTermInsert.appendChild(textLoanTerm);

        hiden.style.display = "grid"
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

    flagForAddNewBank = 1;

}

document.addEventListener("DOMContentLoaded", startLoad)