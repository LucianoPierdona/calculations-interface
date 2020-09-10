import styled from 'styled-components';

export const Title = styled.h3`
    color: #f6f7d4;
    font-size: 35px;
    margin: 10px;
    width: 100%;
    text-align: center;
`;

export const ValuesBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    font-size: 22px;
    & > p {
        margin: 0 12px;
    }
`;

export const Input = styled.input`
    border: 1px solid #fff;
    border-radius: 12px;
    color: #d2f6c5;
    font-weight: 700;
    padding: 1rem 1rem;
    margin-left: 10px;
    font-size: 1.5rem;
    outline: none;
    transition: 0.2s;
    margin-top: 1.5rem;
    &:hover, &:focus {
        background: #28df99;
    }
    &:hover::placeholder, &:focus::placeholder {
        color: #f6f7d4;
    }
    &::placeholder {
        color: #28df99;
        font-weight: 700;
        font-size: 1.5rem;
    }
`;