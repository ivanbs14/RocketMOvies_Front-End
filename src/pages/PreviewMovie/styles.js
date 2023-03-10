import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        width: 100%;
        margin: 0 auto;
        overflow-y: auto;
        
        /* scrollbar */
        /* width */
        ::-webkit-scrollbar {
        width: 8px;
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: #FF859B; 
        border-radius: 10px;
        }
    }

    button {
        margin-top: 60px;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
        color: ${({theme}) => theme.COLORS.BACKGROUNDP_500};
    }
`;

export const Content = styled.div`
    width: 100%;
    margin: 0 auto;

    padding: 0 123px;

    display: flex;
    flex-direction: column;

    a:first-child {
        display: flex;
        gap: 8px;

        margin-top: 40px;

        color: ${({ theme }) => theme.COLORS.BACKGROUNDP_500};
    }

    > h1 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 64px;
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
    }

    > Section {
        margin: 24px 0 40px 0;
            
        h2 {
            padding: 0px;
        }
    }

    > div {
        margin-bottom: 40px;
    }
`;

export const Rating = styled.div`
    border: 1px solid red;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }

    > .subtitle {
        display: flex;
        
        line-height: 24px;
        text-align: right;

        svg {
            margin-right: 8px;

            color: ${({ theme }) => theme.COLORS.BACKGROUNDP_500};
        }
        
        strong {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.WHITE};

            margin-left: 8px;
        }
    }
`;