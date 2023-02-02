import styled from 'styled-components';

export const Conteiner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        background: transparent;
        color: ${({theme}) => theme.COLORS.WHITE};
        border: 0;

        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }

    }


    > svg {
            margin-left: 16px;
        }
`;

