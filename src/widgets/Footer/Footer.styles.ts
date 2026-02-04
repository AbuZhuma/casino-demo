import styled from "styled-components";
import { Box, Typography, Button } from "@mui/material";

export const FooterWrapper = styled(Box)`
  display: flex;
  justify-content: space-around;
  padding: 64px 0;
  gap: 40px;
  flex-wrap: wrap;
  position: relative;
`;


export const BetImage = styled("img")`
  width: 320px;
  object-fit: contain;

  @media (max-width: 1100px) {
    width: 240px;
  }

  @media (max-width: 600px) {
    display: none; // 🔥 VERY GOOD UX
  }
`;


export const DownloadCard = styled(Box)`
  width: 390px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 16px;

  border: 1px dashed transparent;

  background:
    linear-gradient(#0B1220, #0B1220) padding-box,
    ${({ theme }) => theme.custom.gradient} border-box;
`;


export const Logo = styled("img")`
  width: 175px;
  margin-bottom: 24px;
`;

export const Title = styled.p`
  font-weight: 800 !important;
  font-size: 32px;
  margin-bottom: 6px;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: #BABABA;
  margin-bottom: 18px;
  text-align: center;
`;


export const InstallButton = styled(Button)`
  width: 250px;
  height: 56px;
  border-radius: 12px;

  display: flex;
  gap: 8px;

  font-weight: 600;

  color: #fff !important; 
  background: ${({ theme }) => theme.custom.gradient};

  text-transform: none;

  &:hover {
    color: #fff !important;
    background: ${({ theme }) => theme.custom.gradient};
    filter: brightness(1.05);
    transform: translateY(-2px);
  }
`;



export const DownloadIcon = styled("img")`
  width: 36px;
`;


export const InfoColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InfoRow = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const InfoIcon = styled("img")`
  width: 58px;
`;

export const InfoText = styled(Typography)`
  font-size: 16px;
  color: rgba(251, 251, 251, 0.7);
  max-width: 287px;
`;


export const SocialRow = styled(Box)`
  display: flex;
  gap: 8px;
`;

export const SocialIcon = styled("img")`
  width: 52px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.08);
  }
`;
