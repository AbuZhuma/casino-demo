import styled from "styled-components";
import { Box, Typography, Button } from "@mui/material";

export const FooterWrapper = styled(Box)`
  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 80px 40px;
  gap: 40px;

  background: linear-gradient(
    270deg,
    #06225D 0%,
    #02011F 37%,
    #02011F 100%
  );

  overflow: hidden;


  ${({ theme }) => theme.breakpoints.down("lg")} {
    flex-direction: column;
  }
`;

export const BetImage = styled("img")`
  width: 320px;
  object-fit: contain;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: none;
  }
`;

export const DownloadCard = styled(Box)`
  width: 100%;
  max-width: 390px;
  min-width: 330px;
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

export const Title = styled(Typography)`
  font-weight: 800 !important;
  font-size: 32px !important;
  margin-bottom: 6px;
  text-align: center;
  color: white;
`;

export const Subtitle = styled(Typography)`
  font-weight: 500 !important;
  font-size: 15px !important;
  color: #BABABA;
  margin-bottom: 18px;
  text-align: center;
`;

export const InstallButton = styled(Button)`
  max-width: 250px;
  width: 100%;
  height: 56px;
  border-radius: 12px;
  margin-top: 30px !important; 

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-weight: 600;
  color: #fff !important;

  background: ${({ theme }) => theme.custom.gradient};

  border: none;
  cursor: pointer;
  text-transform: none;

  transition: 0.2s;

  &:hover {
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

  ${({ theme }) => theme.breakpoints.down("lg")} {
    order: 2;
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
  }
`;

export const InfoRow = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    flex-direction: column;
    width: 287px;
  }
`;

export const InfoIcon = styled("img")`
  width: 58px;
`;

export const InfoText = styled(Typography)`
  font-size: 16px;
  color: rgba(251, 251, 251, 0.7);
  max-width: 287px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    text-align: center;
  }
`;

export const RightColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 108px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    align-items: center;
    gap: 80px;
    order: 1;
  }
`;

export const SocialBlock = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    align-items: center;
  }
`;

export const SocialTitle = styled(Typography)`
  font-size: 16px;
  color: #BABABA;
  text-align: right;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    text-align: center;
  }
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
