import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    opacity: 0.8;
    gap: 10rem;
    
    p{
        font-size: 3.8rem;
        font-weight: 700;
        text-align: center;
    }
    
    .c-loader {
        animation: is-rotating 1s infinite;
        border: 2.5rem solid #e5e5e5;
        border-radius: 50%;
        border-top-color: ${({theme}) => theme.COLORS.ORANGE};
        height: 20rem;
        width: 20rem;
    }

    @keyframes is-rotating {
    to {
        transform: rotate(1turn);
    }
    }
    
`;