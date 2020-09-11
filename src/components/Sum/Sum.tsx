import React from 'react';
import CalculationTemplate from '../CalculationTemplate/CalculationTemplate';
import Layout from '../Layout/Layout';

// create the sum block
const Sum = () => {
    return (
        <Layout>
            <CalculationTemplate
                title="Soma"
                signal="+"
                type="sum"
            />
        </Layout>
    );
}

export default Sum;
