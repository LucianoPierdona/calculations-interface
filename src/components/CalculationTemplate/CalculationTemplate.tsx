import React, { useState } from 'react';
import { Input, Title, ValuesBlock } from './style';
import { generateRandomNumbers } from './generateRandomNumbers';

const CalculationTemplate = () => {
    const [answer, setAnswer] = useState(Number);

    let { firstValue, secondValue } = generateRandomNumbers;

    const onFormSubmit = () => {
        if (answer === firstValue + secondValue ) {
            return console.log('funciona');
        }
    }

    return (
        <>
            <Title>Soma</Title>
            <ValuesBlock>
                <h3>{firstValue}</h3>
                <p>+</p>
                <h3>{secondValue}</h3>
            </ValuesBlock>
            <form onSubmit={(e) => {
                e.preventDefault();
                onFormSubmit();
            }}>
                <Input 
                    type="number" 
                    placeholder="Type the answer" 
                    value={answer}
                    onChange={(e) => setAnswer(Number(e.target.value))}
                />
            </form>
        </>
    );
}

export default CalculationTemplate;