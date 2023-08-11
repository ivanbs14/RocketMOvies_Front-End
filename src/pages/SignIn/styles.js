import styled from 'styled-components';

import BackgroundImg from '../../assets/SingnInTwo.png';

export const Conteiner = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

    position: relative;

    div:nth-child(3){
        position: absolute;
    }

    @media (max-width: 430px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const Form = styled.form`
    padding: 0 13.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    > Input {
        margin-bottom: 8px;
    }

    > h1 {
        font-size: 4.8rem;
        color: ${({theme}) => theme.COLORS.BACKGROUNDP_500};
    }

    > h2 {
        font-size: 2.4rem;
        margin: 4.8rem 0;
    }

    > div {
        width: 100%;
        margin-bottom: 8px;
    }

    > p {
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > a {
        align-items: center;

        text-align: center;
        margin-top: 4.2rem;
        color: ${({theme}) => theme.COLORS.BACKGROUNDP_500};
    }

    @media (max-width: 430px) {
        padding: 0 5rem;
        align-items: center;

        > p {
            font-size: 1.6rem;
        }
    };
`;

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundImg}) no-repeat center center;
    background-size: cover;

    @media (max-width: 430px) {
        display: none;
    };
`;