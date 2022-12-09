const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "Manager name",
            name: "manager",
        },
        {
            type: "input",
            message: "skills",
            name: "skills",
        },
        {
            type: "input",
            message: "What is your preferred method of communication",
            name: "comunication",
        },
    ])
    .then((response) => {
        console.log(response);

        fs.writeFile(`${response.manager}.html`, JSON.stringify(response), (err) =>
            err ? console.error(err) : console.log("success")
        );
    });