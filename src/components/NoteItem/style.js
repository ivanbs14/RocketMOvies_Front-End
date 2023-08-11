import styled from 'styled-components';

export const Conteiner = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
    
    width: ${({ isNew }) => isNew ? `180px` : "none"};

    margin-bottom: 8px;
    border-radius: 1rem;
    padding-right: 1.6rem;

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
        height: 5.6rem;
        width: 11.3rem;
        max-width: 18rem;

        width: ${({ isNew }) => isNew ? `150px` : "none"};

        padding: 1.2rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;