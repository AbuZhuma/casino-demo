import styled from "styled-components";
import { Box } from "@mui/material";

export const ModalWrapper = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Iframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
`;

export const LoaderOverlay = styled.div<{ visible: boolean }>`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0,0,0,0.85);
  z-index: 5;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? "all" : "none")};

  transition: opacity 0.35s ease;
`;
