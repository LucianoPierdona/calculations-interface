import React from 'react';
import { Container, Header } from './style';
import CalculationTemplate from '../CalculationTemplate/CalculationTemplate';


const App = () => {
    return (
        <>
            <Container>
            <Header>
                <a>
                    Soma
                </a>
                <a>
                    Multiplicação
                </a>
                <a>
                    Divisão
                </a>
            </Header>
                <CalculationTemplate
                />
            </Container>
        </>
    );
};

export default App;