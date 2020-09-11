import React, { useState, useEffect } from 'react';
import { Input, Title, ValuesBlock } from './style';

interface Props {
    title: String,
    signal: String,
    type: String,
}

const CalculationTemplate: React.FC<Props> = ({ title, signal, type }) => {
    const [answer, setAnswer] = useState(Number);
    const [firstValue, setFirstValue] = useState(Number);
    const [secondValue, setSecondValue] = useState(Number);
    const [divisionFirstValue, setDivisionFirstValue] = useState(Number);

    // Generate random numbers
    const callFirstValue = () => setFirstValue(Math.floor(Math.random() * 100) + 1);
    const callSecondValue = () => setSecondValue(Math.floor(Math.random() * 100) + 1);
    const callDivisionFirstValue = () => setDivisionFirstValue(Math.floor(Math.random() * 10000) + 1);

    // generate each number at the beginning of each render
    useEffect(() => {
        callFirstValue();
        callSecondValue();
        callDivisionFirstValue();
    }, [])

    // check the type and if the value is equal
    const onFormSubmit = () => {
        const callFunctions = () => {
            callFirstValue();
            callSecondValue();
            setAnswer(0);
        }
        switch(type) {
            case 'sum':
                if (answer === firstValue + secondValue ) {
                    alert("Parabéns! você acertou!")
                    callFunctions();
                } else {
                    alert("Ops... voce errou!");
                    callFunctions();
                }
                break;
            case 'multiplication':
                if (answer === firstValue * secondValue ) {
                    alert("Parabéns! você acertou!")
                    callFunctions();
                } else {
                    alert("Ops... voce errou!")
                    callFunctions();
                }
                break;
            case 'division':
                const floor = Math.round(divisionFirstValue / secondValue);
                if (answer === floor ) {
                    alert("Parabéns! você acertou!")
                    callDivisionFirstValue();
                    callSecondValue();
                    setAnswer(0);
                } else {
                    return alert("Ops... voce errou")
                }
                break;
            default:
                return null
        }
    }

    const checkIfTypeIsDivision = type === 'division' ? divisionFirstValue : firstValue;  

    return (
        <>
            <Title>{title}</Title>
            <ValuesBlock>
                <h3>{checkIfTypeIsDivision}</h3>
                <p>{signal}</p>
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
                    onChange={(e) => setAnswer(Number(e.target.value)) }
                />
            </form>
        </>
    );
}

export default CalculationTemplate;
