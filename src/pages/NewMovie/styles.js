import styled from 'styled-components';

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
        margin: 10px auto;
        overflow-y: auto;

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

    .tags {
        height: 88px;
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
        
        padding: 16px;
        border-radius: 8px;
        
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
    }
    `;

export const Form = styled.form`
    margin: 38px auto;
    margin-left: 0;

    padding: 0 123px;

    > header {
        align-items: center;

        margin-bottom: 40px;
        
        a {
            display: flex;
            align-items: center;

            gap: 8px;
            
            font-size: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUNDP_500};
        }
        
        h1 {
            margin-top: 24px;
        }
    }
    
    > .title {
        display: flex;
        justify-content: space-between;

        gap: 40px;
        margin-bottom: 40px;
    }

    > Section {
        
        h2 {
            padding: 0px;
        }
    }
    > .btn {
        display: flex;
        gap: 40px;

        color: ${({theme}) => theme.COLORS.BACKGROUND_1000};

        > button:first-child {
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
            color: ${({theme}) => theme.COLORS.BACKGROUNDP_500};
        }
    }
`;