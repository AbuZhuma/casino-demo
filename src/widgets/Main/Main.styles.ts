import styled from "styled-components";
import Button from "@mui/material/Button";

export const MainWrapper = styled.main<{ bg: string }>`
  position: relative;
  width: 100%;
  min-height: 100vh;

  background-image: ${({ bg }) => `url(${bg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: rgba(0,0,0,0.65);
`;


export const Content = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: clamp(16px, 3vw, 28px);
  padding: 24px;
`;

export const Logo = styled.img`
  width: 263px;
  object-fit: contain;
`;

export const GameImage = styled.img`
  width: 326px;
  object-fit: contain;

  pointer-events: none;
  user-select: none;
`;

export const PlayButton = styled(Button)`
  width: clamp(300px, 330px ,360px);
  height: 56px;

  font-size: 18px !important;
  font-weight: 700 !important;

  margin-top: 12px;

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;
