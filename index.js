#! /usr/bin/env node
import inquirer from "inquirer";
// This project is a simple console based Student Management System. In this project you will be learning how to add new students, how to generate a 5 digit unique studentID for each student, how to enroll students in the given courses. Also, you will be implementing the following operations enroll, view balance, pay tuition fees, show status, etc. The status will show all the details of the student including name, id, courses enrolled and balance.This is one of the best projects to implement the Object Oriented Programming concepts.
const randomNumber = Math.floor(10000 + Math.random() * 90000); //lets remove points value
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter student name",
        //apply function for valid date
        validate: function (value) {
            //if user does not write anything its show an error
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled",
        choices: ["MS.office", "HTML", "Typescript", "Python", "Javascript"],
    },
]);
//if we want to write two types of values so we use this method string:number
const tuitionFee = {
    "MS.office": 2000,
    "HTML": 1500,
    "Typescript": 5000,
    "Python": 10000,
    "Javascript": 5500
};
console.log(`\n Tuition Fees : ${tuitionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([{
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfer", "Jazzcash", "Easypaisa"]
    }, {
        name: "amount",
        type: "input",
        message: "Transfer Amount",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a valid value";
        },
    }
]);
console.log(`\nyou select payment method ${paymentType.payment}`); // \n means new line
const tuitionFees = tuitionFee[answer.courses];
//abhi tak humre pass jo jawab arha tha wo string me tha us ko number me convert krne k liy hum yr function use krte hai.
const paymentAmount = parseFloat(paymentType.amount);
//if use
if (tuitionFees === paymentAmount) {
    console.log(`Congratulations , you have successfully  enrolled in ${answer.courses},\n `);
    let ans = await inquirer.prompt([{
            name: "select",
            type: "list",
            message: "do you want to continue please select",
            choices: ["view status", "Exit"]
        }]);
    if (ans.select === "view status") {
        console.log(`/n STATUS\n`);
        console.log(`Student Name: ${answer.student}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log(`\nExiting Student Management System `);
    }
}
//ager fee kam hoi total amount se to
else {
    console.log(`Invalid amount due to the course\n`);
}
