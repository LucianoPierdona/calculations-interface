import styled from 'styled-components';

export const Container = styled.section`
    width: 40%;
    margin: 10rem auto 5rem auto;
    border: 3px solid #ffffff;
    border-radius: 22px;
    padding: 15px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #28df99;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1), 
    0 2px 2px rgba(0,0,0,0.1), 
    0 4px 4px rgba(0,0,0,0.1), 
    0 8px 8px rgba(0,0,0,0.1),
    0 16px 16px rgba(0,0,0,0.1);
`;

export const Header = styled.header`
    border-bottom: 2px solid #fff;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 25px;
    & > .link {
        margin-right: 15px;
        font-weight: 700;
        transition: color 0.2s;
        text-decoration: none;
    }
    & .link:hover {
        color: #f6f7d4;
    }
`;