import { SetStateAction, useState } from 'react';
import './style.css';

export const Calculator = () => {
    const [displayValue, setDisplayValue] = useState<string>('0');
    const [formula, setFormula] = useState<string>('');
    const [isResultDisplayed, setIsResultDisplayed] = useState<boolean>(false);

    const handleNumberClick = (number: SetStateAction<string>) => {
        if (displayValue === '0' || isResultDisplayed) {
            setDisplayValue(number);
            setIsResultDisplayed(false);
        } else {
            setDisplayValue(displayValue + number);
        }
        setFormula(formula + number);
    };

    const handleOperatorClick = (operator: string) => {
        if (!isResultDisplayed) {
            setDisplayValue(displayValue + ' ' + operator + ' ');
            setFormula(formula + operator);
        } else {
            setDisplayValue(operator + ' ');
            setFormula(displayValue + operator);
            setIsResultDisplayed(false);
        }
    };

    const handleDecimalClick = () => {
        if (!displayValue.includes('.')) {
            setDisplayValue(displayValue + '.');
            setFormula(formula + '.');
        }
    };

    const handleClearClick = () => {
        setDisplayValue('0');
        setFormula('');
        setIsResultDisplayed(false);
    };

    const handleEqualClick = () => {
        try {
            const result = eval(formula);
            if (!Number.isFinite(result)) {
                throw new Error('Invalid operation');
            }
            setDisplayValue(result);
            setFormula(result.toString());
            setIsResultDisplayed(true);
        } catch (error) {
            setDisplayValue('Error');
            setFormula('');
            setIsResultDisplayed(false);
        }
    };

    return (
        <div id="calculator">
            <pre id="display">{displayValue}</pre>
            <button id="zero" onClick={() => handleNumberClick('0')}>0</button>
            <button id="one" onClick={() => handleNumberClick('1')}>1</button>
            <button id="two" onClick={() => handleNumberClick('2')}>2</button>
            <button id="three" onClick={() => handleNumberClick('3')}>3</button>
            <button id="four" onClick={() => handleNumberClick('4')}>4</button>
            <button id="five" onClick={() => handleNumberClick('5')}>5</button>
            <button id="six" onClick={() => handleNumberClick('6')}>6</button>
            <button id="seven" onClick={() => handleNumberClick('7')}>7</button>
            <button id="eight" onClick={() => handleNumberClick('8')}>8</button>
            <button id="nine" onClick={() => handleNumberClick('9')}>9</button>
            <button id="add" onClick={() => handleOperatorClick('+')}>+</button>
            <button id="subtract" onClick={() => handleOperatorClick('-')}>-</button>
            <button id="multiply" onClick={() => handleOperatorClick('*')}>*</button>
            <button id="divide" onClick={() => handleOperatorClick('/')}>/</button>
            <button id="decimal" onClick={handleDecimalClick}>.</button>
            <button id="clear" onClick={handleClearClick}>AC</button>
            <button id="equals" onClick={handleEqualClick}>=</button>
        </div>
    );
};


