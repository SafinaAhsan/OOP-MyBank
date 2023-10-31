import inquirer from "inquirer"
import { Customer, BankAccount } from "./main.js"

const answer = await inquirer.prompt([{
    type: "input",
    name: "firstname",
    message: "Enter your First Name"
},
{
    type: "input",
    name: "lastname",
    message: "Enter your Last Name"
},
{
    type: "list",
    name: "gender",
    message: "Select Gender",
    choices: ["Male", "Female"]
}, {
    type: "number",
    name: "age",
    message: "Enter your age",
}, {
    type: "number",
    name: "mobilenumber",
    message: "Enter your MobileNumber",
}])

const { firstname, lastname, gender, age, mobilenumber } = answer

const person = new Customer(firstname, lastname, gender, age, mobilenumber)

console.log("Account Created Successfully")
async function main (){
const type = await inquirer.prompt({
    type: "list",
    name: "actionType",
    message: "Select the action you want to perform",
    choices: ["Check Balance", "Debit", "Credit"]
})
if (type.actionType == "Debit" || type.actionType == "Credit") {
    const amount = await inquirer.prompt({
        type: "number",
        name: "amountInner",
        message: "Enter the  amount"
    })
    if (type.actionType === "Debit") {
        const result = person.bankAccount.Debit(amount.amountInner)
        console.log(result)
    } else {
        const result = person.bankAccount.Credit(amount.amountInner)
        console.log(result)
    }
}
else if(type.actionType == "Check Balance") {
    const result = person.bankAccount.CheckBalance()
    console.log(result);
    
}

const options=await inquirer.prompt({
    type:"list",
    name:"continue",
    message:"Would you like to continue",
    choices:["Yes","No"]
})
if (options.continue=="Yes"){
    main()
}
else{
    return false
}
}

main()