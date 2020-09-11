import React from 'react';
import CalculationTemplate from '../CalculationTemplate/CalculationTemplate';
import Layout from '../Layout/Layout';

const Multiplication = () => {
    return (
        <Layout>
            <CalculationTemplate
                title="Multiplicação"
                signal="x"
                type="multiplication"
            />
        </Layout>
    );
}

export default Multiplication;