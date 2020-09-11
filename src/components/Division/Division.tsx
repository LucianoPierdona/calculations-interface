import React from 'react';
import CalculationTemplate from '../CalculationTemplate/CalculationTemplate';
import Layout from '../Layout/Layout';

// Create the division block
const Division = () => {
    return (
        <Layout>
            <CalculationTemplate
                title="Divisão"
                signal="/"
                type="division"
            />
        </Layout>
    );
}

export default Division;
