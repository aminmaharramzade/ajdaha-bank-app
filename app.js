const userName = prompt("Enter your name and surname...");
if(isNaN(userName)){
    const h2El = document.querySelector("#userFullName")
    h2El.innerHTML = userName;
}else {
    alert("Please use letters...")
}




const obj = {
    number : 0 ,
    historyDep : [],
    historyDec : [],
    start: function (){
        // DEPOSIT
        let depositAmount = Number(document.querySelector(`#userDepositAmount`).value);

        if(depositAmount > 0){
        this.historyDep.push(`+${depositAmount}`)
        const sum = this.number += depositAmount;
        const resultDeposit = document.querySelector("#userBalance")
        resultDeposit.innerHTML = sum + `₼`;
        }

        document.querySelector(`#userDepositAmount`).value = "";

        //WITHDRAW
        let withdrawAmount = Number(document.querySelector(`#userWithdrawAmount`).value);
        
        if(withdrawAmount > 0){
        this.historyDec.push(`-${withdrawAmount}`)
        const dec = this.number -= withdrawAmount;
    
        const resultWithdraw = document.querySelector("#userBalance")
        resultWithdraw.innerHTML = dec + `₼`;
        }
        document.querySelector(`#userWithdrawAmount`).value = "";
    } ,
    //HISTORY
    viewTransaction: function(){
        document.querySelector(`#decHistory`).innerHTML = this.historyDec
        document.querySelector(`#depHistory`).innerHTML = this.historyDep    
    }
}