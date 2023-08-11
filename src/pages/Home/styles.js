import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";
  
  > main {
    grid-area: content;

    width: 100%;
    margin: 4.8rem auto;

    padding: 0 12.3rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 3.8rem;

      h1 {
        font-weight: 400;
      }

      @media (max-width: 430px) {
        flex-direction: column;
        gap: 2rem;
        margin-top: 2.4rem;
      };
    }

    @media (max-width: 430px) {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 14rem auto 0;
    };
  }
`;

export const Content = styled.div`
  max-height: calc(100vh - 297px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUNDP_400};
    border-radius: 8px;
  }

  @media (max-width: 430px) {
      padding: 0 4rem;
  };
`;

export const NewMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUNDP_500};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  padding: 1.3rem 3.2rem;
  border-radius: 8px;
`;
