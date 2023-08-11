import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  display: flex;
  justify-content: space-between;
  
  padding: 0 12.3rem;
  position: relative;

  @media (max-width: 430px) {
    margin-top: 2rem;
    padding: 0;
    height: 22rem;
    flex-direction: column;
  };
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUNDP_500};
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6.4rem;
  flex-grow: 1;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }

  > div {
    margin-right: 9px;
    font-size: 1.4rem;
    line-height: 1.8rem;

    height: 4rem;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  @media (max-width: 430px) {
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    strong{
      font-size: 1.6rem;
    }

    img {
      margin-left: 2rem;
    }
  };
`;

export const Logout = styled.button`
  border: none;
  background: none;
  
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  font-size: 1.4rem;
  line-height: 1.8rem;

  position: absolute;
  bottom: 3.8rem;
  right: 19.6rem;

  @media (max-width: 430px) {
    bottom: 2.7rem;
    right: 24rem;

    font-size: 1.6rem;
  };
`;
