import styled from "styled-components";
import { FormControl, Select } from "@mui/material";

export const LangControl = styled(FormControl)`
  width: 289px;

  .MuiOutlinedInput-root {
    height: 56px;
    border-radius: 8px;

    background: linear-gradient(
      180deg,
      rgba(255,255,255,0.06),
      rgba(255,255,255,0.02)
    );

    backdrop-filter: blur(10px);

    transition: all 0.25s ease;

    fieldset {
      border: 1px solid rgba(255,255,255,0.1);
    }

    &:hover fieldset {
      border-color: rgba(255,255,255,0.25);
    }

    &.Mui-focused fieldset {
      border-color: rgba(255,255,255,0.4);
    }
  }
`;

export const LangSelect = styled(Select)`
  color: white;

  .MuiSelect-select {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px !important;
  }

  svg {
    color: rgba(255,255,255,0.6);
  }
`;


export const Flag = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;
