import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    background-color: var(--darkGrey);
    padding: 0 20px;
    align-items: center;
    height: 100px;
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    margin: 0 auto;
    background: var(--medGrey);
    color: var(--white);
    height: 55px;
    border-radius: 40px;

    img {
        position: absolute;
        left: 15px;
        top: 14px;
        width: 30px;
    }

    input {
        position: absolute;
        font-size: var(--fontBig);
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        background: transparent;
        width: 95%;
        height: 40px;
        color: var(--white);

        :focus {
            outline: none;
        }
    }
`;