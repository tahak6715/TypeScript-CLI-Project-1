import inquirer from "inquirer";
import chalk from "chalk";
let answers = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "Enter First Number:"
    }
]);
let answers1 = await inquirer.prompt([{
        name: "num2",
        type: "number",
        message: "Enter Secong Number:"
    }
]);
let operation = await inquirer.prompt([{
        name: "oop",
        type: "string",
        message: "Enter operation: + - x /"
    }
]);
if (operation.oop === "x") {
    const res = answers.num1 * answers1.num2;
    console.log(chalk.blue(`The Answer is ${res}`));
}
else if (operation.oop === "+") {
    const res = answers.num1 + answers1.num2;
    console.log(chalk.blue(`The Answer is ${res}`));
}
else if (operation.oop === "-") {
    const res = answers.num1 - answers1.num2;
    console.log(chalk.blue(`The Answer is ${res}`));
}
else if (operation.oop === "/") {
    const res = answers.num1 / answers1.num2;
    console.log(chalk.blue(`The Answer is ${res}`));
}
else {
    console.log(chalk.blue(`Invalid Operation...`));
}
// console.log(chalk.blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));
