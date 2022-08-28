class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    oppositeValue(number) {
        this.currentOperand = -this.currentOperand;
        this.updateDisplay();
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+': 
                computation = prev + current;
                break;
            case '−': 
                computation = prev - current;
                break;
            case '×': 
                computation = prev * current;
                break;
            case '÷': 
                computation = prev / current;
                break;
            default: 
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    }


}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const oppositeButton = document.querySelector('[data-opposite]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

// // const squareButton = document.querySelector('[data-square]');
// // const squareRootButton = document.querySelector('[data-sqaure-root]');
// case 'x²': 
// computation = Math.pow(current, 2);
// break;
// case '²√': 
// computation = Math.sqrt(current);
// break;

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute(); 
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', button => {
    calculator.clear(); 
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete(); 
    calculator.updateDisplay();
})

oppositeButton.addEventListener('click', button => {
    calculator.oppositeValue(); 
    calculator.updateDisplay();
})

/*const calculator = {
    divide() => ,
    multiply() => ,
    subtract() => ,
    add() => ,
    negative() => ,
    percent() => ,
    calculate() => ,
    del() => ,
    clear() => ,
}*/

//accept user inputs (number, operator, other numbers)
    //including longer inputs
//display inputs as user enters
//store inputs
//recognize inputs
//perform calculations
//return result
//previous total is start of new operation unless user clears w/ 'AC' button
//backspace should del last input
//AC should clear all entries
//prevent invalid inputs (start w/operator, operators next to each other, multiple decimal points, etc.)

//bonus
//mimic windows calculator output window
    //two fields
        //main field for input numbers
            //char limit
        //smaller field for operation
            //overflow enabled
//pressing '=' repetitively repeats last operation
    