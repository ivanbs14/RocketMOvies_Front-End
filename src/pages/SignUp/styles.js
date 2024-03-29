import styled from 'styled-components';

import BackgroundImg from '../../assets/SingnInTwo.png';

export const Conteiner = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

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

    > h1 {
        font-size: 4.8rem;
        color: ${({theme}) => theme.COLORS.BACKGROUNDP_500};
    }

    > h2 {
        font-size: 24px;
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

    > Button {
        margin-top: 8px;
    }

    > .link {
        display: flex;
        justify-content: center;
        align-items: center;
        
        color: ${({theme}) => theme.COLORS.BACKGROUNDP_500};
        margin-top: 4.2rem;
        
        a {
            color: ${({theme}) => theme.COLORS.BACKGROUNDP_500};
            font-size: 1.6rem;
        }

        svg {
            height: 1.6rem;
            margin-right: 8px;
        }
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