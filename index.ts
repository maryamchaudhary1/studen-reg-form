import inquirer from "inquirer";
import chalk from "chalk";

async function inputs() {
    const reg = await inquirer.prompt([
        {
            name:"Student",
            type:"inputs",
            message:"Enter your name"
            
        },
        {
            name:"rollnumber",
            type:"inputs",
            message:"Enter your rollnumber"
        },
        {
            name:"cnic",
            type:"inputs",
            message:"Enter your cnic"

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
            name:" city",
            type:'input',
            message:"Enter your city"

        }
    ])
    
    const Rollnumber  = reg.rollnumber === ""? "not provided": reg.rollnumber;

    type citytype="Islambad"|"Karachi"|"Lahore"|"Fasilabad"|"string"
    const newCity :citytype = reg.city ==="islambad"||reg.city ==="karachi"||reg.city||reg.city==="Lahore"||reg.city==="Fasilabad"||"others"

    interface Address1 {
        house:string|number
        street:string|number
        sector:string 
        city:citytype
    }
    interface mainobj1{
    name:string
    rollnumber:string|number
    cnic:string|number
    address:Address1

    }
    let addresObj: Address1 = {house: reg.housenumber, street: reg.streetnumber, sector: reg.sector, city: newCity};
    let mainobj: mainobj1= {name: reg.Student, rollnumber: Rollnumber, cnic: reg.cnic, address: addresObj};
    console.log(addresObj);
    console.log(mainobj)
    console.log(typeof (mainobj.name));
}
inputs();

//