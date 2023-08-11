import styled from 'styled-components';

export const Conteiner = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 14.4rem;

        background: ${({ theme }) => theme.COLORS.BACKGROUNDP_rgba};
        
        display: flex;
        align-items: center;
        
        padding: 0 12.4rem;

        a {
            display: flex;
            align-items: center;
            gap: 8px;
            
            font-size: 2rem;
            color: ${({theme}) => theme.COLORS.BACKGROUNDP_500};
        }

        @media (max-width: 430px) {
            padding: 0 2rem;
        };
    }

`;

export const Form = styled.form`
    max-width: 34rem;
    margin: 30px auto 0;

    > div:nth-child(2){
        margin-top: 6rem;
    }

    > div:nth-child(4){
        margin-top: 1.6rem;
    }

    > div {
        margin-bottom: 8px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -12.4rem auto 3.2rem;

    width: 18.6rem;
    height: 18.6rem;

    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;

        background-color: ${({ theme }) => theme.COLORS.ORANGE};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;
    }

    input {
        display: none;
    }

    svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
`;