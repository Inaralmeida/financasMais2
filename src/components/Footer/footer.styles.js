import { styled } from "styled-components";

export const StyleFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.blue700};

  .content {
    align-items: flex-start;
    padding: 48px 0;
  }

  > section {
    height: 100%;
    padding: 12px;
  }
`;

export const StyleListFooter = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 0px 15px;
  &.socials {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const StyleItemlist = styled.li`
  color: ${(p) => p.theme.white50};
  cursor: pointer;
  transition: all 0.2s;

  &.icon {
    display: flex;
    gap: 8px;
  }
  &.social {
    padding: 6px;
    border: 1px solid ${(p) => p.theme.white50};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: ${(p) => p.theme.blue500};
    }
  }

  &:hover {
    font-weight: bold;
  }
`;
