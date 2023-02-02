import styled from 'styled-components';

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        width: 1137px;
        margin: 0 auto;
        overflow-y: auto;

        /* width */
        ::-webkit-scrollbar {
        width: 8px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #0D0C0F; 
        border-radius: 10px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: #FF859B; 
        border-radius: 10px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #FF859B; 
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
    max-width: 1121px;
    margin: 38px auto;
    margin-left: 0;

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