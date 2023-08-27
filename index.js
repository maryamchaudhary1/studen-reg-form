#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function inputs() {
    const reg = await inquirer.prompt([
        {
            name: "Student",
            type: "inputs",
            message: "Enter your name"
        },
        {
            name: "rollnumber",
            type: "inputs",
            message: "Enter your rollnumber"
        },
        {
            name: "cnic",
            type: "inputs",
            message: "Enter your cnic"
        },
        {
            name: 'housenumber',
            type: 'input',
            message: chalk.green('Enter your House Number: '),
        },
        {
            name: 'streetnumber',
            type: 'input',
            message: 'Enter your Street number: ',
        },
        {
            name: 'sector',
            type: 'input',
            message: 'Enter your colony or sector: ',
        },
        {
            name: " city",
            type: 'input',
            message: "Enter your city"
        }
    ]);
    const Rollnumber = reg.rollnumber === "" ? "not provided" : reg.rollnumber;
    const newCity = reg.city === "islambad" || reg.city === "karachi" || reg.city || reg.city === "Lahore" || reg.city === "Fasilabad" || "others";
    let addresObj = { house: reg.housenumber, street: reg.streetnumber, sector: reg.sector, city: newCity };
    let mainobj = { name: reg.Student, rollnumber: Rollnumber, cnic: reg.cnic, address: addresObj };
    console.log(addresObj);
    console.log(mainobj);
    console.log(typeof (mainobj.name));
}
inputs();
