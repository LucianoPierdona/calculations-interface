import React, { useState, useEffect } from 'react';
import { Input, Title, ValuesBlock } from './style';

const CalculationTemplate = () => {
    const [answer, setAnswer] = useState(Number);
    const [firstValue, setFirstValue] = useState(Number);
    const [secondValue, setSecondValue] = useState(Number);

    const callFirstValue = () => setFirstValue(Math.floor(Math.random() * 100) + 1);
    const callSecondValue = () => setSecondValue(Math.floor(Math.random() * 100) + 1);

    useEffect(() => {
        callFirstValue();
        callSecondValue();
    }, [])


    const onFormSubmit = () => {
        if (answer === firstValue + secondValue ) {
            callFirstValue();
            callSecondValue();
        }
        console.log('erro')
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
                    onChange={(e) => {
                        setAnswer(Number(e.target.value)) 
                        e.stopPropagation() } }
                />
            </form>
        </>
    );
}

export default CalculationTemplate;