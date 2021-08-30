import styled from 'styled-components';

export const Image = styled.img`
    max-width: 720px;
    width: 100%;
    transition: all 0.3s;
    object-fit: radius;
    border-radius: 20px;

    :hover {
        opacity: 0.8;
    }

    animation: animateThumb 0.5s;
    @keyframes animateThumb {
        from { 
        opacity: 0
        }
        to { 
        opacity: 1
        }
    }
`;