let bankList = [];
let titlesWrap = document.getElementById('titlesWrapper');
let descriptionWrap = document.getElementById('descriptionWrapper')


class Bank {
    constructor (title, interestRate, maxLoan, minDownPayment, loanTerm) {
        this.title = title;
        this.interestRate = interestRate;
        this.maxLoan = maxLoan;
        this.minDownPayment = minDownPayment;
        this.loanTerm = loanTerm;
    }
}

function startLoad() {
    
}

document.addEventListener("DOMContentLoaded", startLoad)