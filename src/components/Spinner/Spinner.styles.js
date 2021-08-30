import styled from 'styled-components';

export const Spinner = styled.div`
    width: 50px;
    height: 50px;
    border: 5px solid var(--lightGrey);
    border-top: 5px solid var(--medGrey);
    border-radius: 50%;
    margin: 20px auto;
    
    animation: animateSpin 0.8s linear infinite;
    @keyframes animateSpin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;