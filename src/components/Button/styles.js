import styled from "styled-components";

export const Conteiner = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUNDP_500};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`;