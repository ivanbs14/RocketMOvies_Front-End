import styled from 'styled-components';

export const Conteiner = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUNDP_rgba};

    border: none;
    border-radius: 1rem;

    padding: 2.2rem;
    margin-bottom: 1.6rem;

    > h3 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.WHITE};

        margin-bottom: 1.5rem;
    }

    > .text {
        max-height: 5.2rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-family: 'Roboto', sans-serif;

        overflow-y: auto;
        text-align: justify;

    }

    > strong {
        font-size: 1.6rem;
        max-height: 5.2rem;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 2.4rem;
    }
`;