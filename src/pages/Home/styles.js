import styled from "styled-components";
import { Link } from "react-router-dom";

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px;
    grid-template-areas: 
    "header"
    "content";

    > Header {
        padding: 0 125px;
    }
`;

export const Content = styled.div`
    grid-area: content;
    overflow-y: auto;

    padding-left: 123px;
    padding-right: 106px;

    > .btn {

        > Section {
            display: flex;
            justify-content: space-between;
            margin-top: 47px;
            margin-bottom: 13px;
        }
    }
`;

export const NewNote = styled(Link)`
    width: 207px;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUNDP_500};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border: 0;
    padding: 13px 32px;
    border-radius: 10px;
    font-weight: 500;

    display: flex;
    align-items: center;

    &:disabled {
        opacity: 0.5;
    }

    svg {
        margin-right: 8px;
    }
`;
