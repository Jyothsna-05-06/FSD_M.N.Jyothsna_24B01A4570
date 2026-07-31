//Create a BankAccount Class with deposit(), withdraw(), and displayBalance() Methods
class BankAccount {

    private balance: number;


    constructor(initialBalance: number) {

        this.balance = initialBalance;

    }


    deposit(amount: number) {

        this.balance += amount;

        console.log(amount, "deposited");

    }


    withdraw(amount: number) {

        if(amount <= this.balance) {

            this.balance -= amount;

            console.log(amount, "withdrawn");

        }
        else {

            console.log("Insufficient balance");

        }

    }


    displayBalance() {

        console.log("Balance:", this.balance);

    }

}


let account = new BankAccount(5000);

account.deposit(2000);

account.withdraw(1000);

account.displayBalance();