import styled from "styled-components";

export const Conteiner = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: flex;
    justify-content: space-between;

    padding: 0 285px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.BACKGROUNDP_400};
    }

`;

export const Search = styled.div`
    grid-area: search;
    width: 630px;
    margin: auto;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 9px;
        line-height: 24px;
        text-align: right;

        a {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
        
        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;