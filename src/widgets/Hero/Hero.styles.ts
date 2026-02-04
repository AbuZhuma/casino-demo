import styled from "styled-components";

export const HeroWrapper = styled.section<{ bg: string }>`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  min-height: 360px;

  background-image: url(${(p) => p.bg});
  background-size: cover;
  background-position: center;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.2)
  );
`;

export const HeroContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 32px;
  padding: 48px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GameImage = styled.img`
  width: 350px;
  object-fit: contain;

  @media (max-width: 768px) {
    display: none;
  }
`;
