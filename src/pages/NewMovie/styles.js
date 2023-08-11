import styled from 'styled-components';

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        width: 100%;
        margin: 1rem auto;
        overflow-y: auto;

        ::-webkit-scrollbar {
        width: 8px;
        };

        ::-webkit-scrollbar-thumb {
        background: #FF859B; 
        border-radius: 10px;
        };

        @media (max-width: 430px) {
            margin: 14rem 0 0;
        };
    };

    .tags {
        height: 8.8rem;
        display: flex;
        gap: 2.4rem;
        flex-wrap: wrap;
        
        padding: 1.6rem;
        border-radius: 8px;
        
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
    }
    `;

export const Form = styled.form`
    margin: 3.8rem auto;
    margin-left: 0;

    padding: 0 12.3rem;

    > header {
        align-items: center;

        margin-bottom: 4rem;
        
        a {
            display: flex;
            align-items: center;

            gap: 8px;
            
            font-size: 2rem;
            color: ${({theme}) => theme.COLORS.BACKGROUNDP_500};
        }
        
        h1 {
            margin-top: 2.4rem;
        }
    }
    
    > .title {
        display: flex;
        justify-content: space-between;

        gap: 4rem;
        margin-bottom: 4rem;
    }

    > Section {
        h2 {
            padding: 0px;
        }
    }
    > .btn {
        display: flex;
        gap: 4rem;

        color: ${({theme}) => theme.COLORS.BACKGROUND_1000};

        > button:first-child {
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
            color: ${({theme}) => theme.COLORS.BACKGROUNDP_500};
        }
    }

    @media (max-width: 430px) {
        margin: 2rem 0rem 8rem 0;
        padding: 0 3rem;

        > .title {
            flex-direction: column;
        }

        > .btn {
            flex-direction: column;
        }
    };
`;