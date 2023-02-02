import styled from 'styled-components';

export const Conteiner = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
    
    width: ${({ isNew }) => isNew ? `180px` : "none"};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};

    }
    
    .button-add {
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > input {
        height: 56px;
        width: 113px;
        max-width: 180px;

        width: ${({ isNew }) => isNew ? `150px` : "none"};

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;