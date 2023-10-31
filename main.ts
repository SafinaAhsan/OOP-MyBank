#! usr/bin/env node
export{Customer,BankAccount}
class Customer {
    public firstName: string;
    public lastName: string;
    public gender: string;
    public age: number;
    public mobileNumber: number;
    public bankAccount: BankAccount;

    constructor(firstName: string, lastName: string, gender: string, age: number, mobileNumber: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.bankAccount = new BankAccount()
    }
    public customerInfo() {
        return `Name ${this.firstName} ${this.lastName}\t
        Age: ${this.age}\t
        Gender: ${this.gender}\t
        MobileNumber: ${this.mobileNumber}\t
        Account Balance: ${this.bankAccount.accountBalance}`;
    }
}

type debitFn = (amount: number) => string;
type creditFn = (amount: number) => string;

interface IBankAccount {
    Debit: debitFn,
    Credit: creditFn,
}

class BankAccount implements IBankAccount {
    accountBalance = 100;
    Debit = (amount: number) => {
        if (amount > 0) {
            if (this.accountBalance > amount) {
                this.accountBalance = this.accountBalance - amount
                console.log(`Now the remaining balance is ${this.accountBalance}`);
                return " Transaction successful. "
            }
            else {
                return "you don't have enough money to do this transaction."
            }
        }
        else {
            return "Sorry! The amount you entered is wrong"
        }
    }

    Credit = (amount: number) => {
        if (amount > 0  ) {
            this.accountBalance = this.accountBalance + amount
           if (amount > 100) {
            this.accountBalance = this.accountBalance - 1
            return "Account has been credited successfully"
        }
        else{
            return"credited successfully"
        }
    }
        else {
            return "Cannot credit a negative or zero amount.";
        }
     }
    CheckBalance(){
        return this.accountBalance
    }
}