import React from 'react';
import { Container, Header } from './style';

type ChildrenContainer = Pick<JSX.IntrinsicElements["div"], "children">;

const Layout = ({ children }: ChildrenContainer) => {
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
                {children}
            </Container>
        </>
    );
}

export default Layout;