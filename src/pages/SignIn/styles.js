import styled from 'styled-components';

import BackgroundImg from '../../assets/SingnInTwo.png';

export const Conteiner = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    > Input {
        margin-bottom: 8px;
    }

    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.BACKGROUNDP_500};
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;
    }

    > div {
        width: 100%;
        margin-bottom: 8px;
    }

    > p {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > a {
        align-items: center;

        text-align: center;
        margin-top: 42px;
        color: ${({theme}) => theme.COLORS.BACKGROUNDP_500};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundImg}) no-repeat center center;
    background-size: cover;
`;