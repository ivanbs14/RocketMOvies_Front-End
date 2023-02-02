import styled from 'styled-components';

export const Conteiner = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUNDP_rgba};

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    > h3 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};

        margin-bottom: 15px
    }

    > .text {
        max-height: 52px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-family: 'Roboto', sans-serif;

        overflow-y: auto;
        text-align: justify;

    }

    > strong {
        font-size: 16px;
        max-height: 52px;

        
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;