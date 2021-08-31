import styled from 'styled-components';

export const Wrapper = styled.button`
    display: block;
    align-items: center;
    background: var(--darkGrey);
    color: var(--white);
    border-radius: 30px;
    border: 0;
    width: 25%;
    min-width: 200px;
    height: 60px;
    font-size: var(--fontBig);
    margin: 20px auto;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;

    :hover {
        opacity: 0.8;
    }
`;