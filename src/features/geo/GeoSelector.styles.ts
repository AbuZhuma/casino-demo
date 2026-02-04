import styled from "styled-components";
import { FormControl } from "@mui/material";


export const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 12px;
  }
`;

export const StyledFormControl = styled(FormControl)`
  flex: 1;
  min-width: 140px;
`;

export const GeoControl = styled(StyledFormControl)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    && {
      display: none;
    }
  }
`;

