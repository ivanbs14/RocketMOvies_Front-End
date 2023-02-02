import styled from 'styled-components';

export const Conteiner = styled.section`
    margin: 28px 0;

    > h2 {

        padding-bottom: 16px;
        margin-bottom: 24px;

        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 32px;
        font-weight: 400;
    }
`;