import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header } from './style';

// define the prop children. (Typescript only)
type ChildrenContainer = Pick<JSX.IntrinsicElements["div"], "children">;

// create the layout of the page
const Layout = ({ children }: ChildrenContainer) => {
    return (
        <>
            <Container>
                <Header>
                    <Link className="link" to="/">
                        Soma
                    </Link>
                    <Link className="link" to="/multiplication">
                        Multiplicação
                    </Link>
                    <Link className="link" to="/division">
                        Divisão
                    </Link>
                </Header>
                {children}
            </Container>
        </>
    );
}

export default Layout;
