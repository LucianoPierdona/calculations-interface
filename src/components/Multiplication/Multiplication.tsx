import React from 'react';
import CalculationTemplate from '../CalculationTemplate/CalculationTemplate';
import Layout from '../Layout/Layout';

// Create the multiplication block
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
