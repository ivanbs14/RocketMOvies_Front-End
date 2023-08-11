import styled from 'styled-components';

export const Conteiner = styled.textarea`
    width: 100%;
    height: 15rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    margin-bottom: 8px;
    border-radius: 1rem;
    padding: 1.6rem;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;