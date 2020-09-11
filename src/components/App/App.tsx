import React from 'react';
import { Container, Header } from './style';
import CalculationTemplate from '../CalculationTemplate/CalculationTemplate';
import Routes from '../../routes';


const App = () => {
    return (
        <>
            <Container>
            <Routes />
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
                    title="Soma"
                    signal="+"
                />
            </Container>
        </>
    );
};

export default App;