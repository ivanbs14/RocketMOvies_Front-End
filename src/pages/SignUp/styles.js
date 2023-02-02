import styled from 'styled-components';

import BackgroundImg from '../../assets/SingnInTwo.png';

export const Conteiner = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;

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

    > Button {
        margin-top: 8px;
    }

    > .link {
        display: flex;
        justify-content: center;
        align-items: center;
        
        color: ${({theme}) => theme.COLORS.BACKGROUNDP_500};
        margin-top: 42px;
        
        a {
            color: ${({theme}) => theme.COLORS.BACKGROUNDP_500};
            font-size: 16px;
        }

        svg {
            height: 16px;
            margin-right: 8px;
    }
    }

    

`;

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundImg}) no-repeat center center;
    background-size: cover;
`;