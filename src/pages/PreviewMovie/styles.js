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
        
        ::-webkit-scrollbar {
        width: 8px;
        }
        
        ::-webkit-scrollbar-thumb {
        background: #FF859B; 
        border-radius: 1rem;
        }

        @media (max-width: 430px) {
            margin: 14rem auto 0;
        };
    }

    button {
        margin-top: 6rem;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
        color: ${({theme}) => theme.COLORS.BACKGROUNDP_500};
    }
`;

export const Content = styled.div`
    width: 100%;
    margin: 0 auto;

    padding: 0 12.3rem;

    display: flex;
    flex-direction: column;

    a:first-child {
        display: flex;
        gap: 8px;

        margin-top: 4rem;

        color: ${({ theme }) => theme.COLORS.BACKGROUNDP_500};
    }

    > h1 {
        font-size: 3.6rem;
        font-weight: 500;
        padding-top: 6.4rem;
    }

    > p {
        font-size: 1.6rem;
        margin-top: 1.6rem;
        text-align: justify;
    }

    > Section {
        margin: 2.4rem 0 4rem 0;
            
        h2 {
            padding: 0px;
        }
    }

    > div {
        margin-bottom: 4rem;
    }

    @media (max-width: 430px) {
        padding: 0 3rem;
    };
`;

export const Rating = styled.div`
   
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
    }

    > .subtitle {
        display: flex;
        
        line-height: 2.4rem;
        text-align: right;

        svg {
            margin-right: 8px;

            color: ${({ theme }) => theme.COLORS.BACKGROUNDP_500};
        }
        
        strong {
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.WHITE};

            margin-left: 8px;
        }
    }
`;