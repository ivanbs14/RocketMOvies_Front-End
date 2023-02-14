import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${({ isBigSize }) => (isBigSize ? "left" : "start")};
  gap: 1rem;
  margin-bottom: 15px;

  svg {
    font-size: ${({ isBigSize }) => (isBigSize ? "2.2rem" : "1.4rem")};
    color: ${({ theme }) => theme.COLORS.BACKGROUNDP_500};
  }
`;
