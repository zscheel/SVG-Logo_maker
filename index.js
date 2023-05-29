const inquirer = require('inquirer');


const inputs = [
    {
        type: "input",
        message: "enter up to 3 characters",
        name: 'text',
        validate: text => {
            if (text.length <= 3 && text.length != 0) {
                return true;
            } else {
                console.log('   Please the text up to 3 characters');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "enter a the color of the text or optionaly a hexadecimal number.",
        name: 'textColor',
        validate: textColor => {
            if (textColor) {
                return true;
            } else {
                console.log('   Please enter a color or hexadecimal number for the text.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'shapes',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        message: "enter a the color of the text or optionaly a hexadecimal number.",
        name: 'shapeColor',
        validate: shapeColor => {
            if (shapeColor) {
                return true;
            } else {
                console.log('   Please enter a color or hexadecimal number for the shape.');
                return false;
            }
        }
    },
];

function init() {
    inquirer.prompt(inputs)
    .then(response => {
        console.log(response)
        return response;
        }
    )
}

init();