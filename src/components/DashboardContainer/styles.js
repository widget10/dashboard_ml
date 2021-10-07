import styled from "styled-components";
import { Box, Button } from "@mui/material";

export const CustomButton = styled(Button)`
  padding: 8px 32px;
  border-radius: 4px;
  color: #535151;
  border: 1px solid #a5a4a4;
  font-size: 12px;
  font-weight: bold;
  text-transform: none;

  &.active {
    background-color: #004386;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

export const StyledHeading = styled.div`
  color: #535151;
  font-size: 32px;
  text-transform: none;
  font-weight: normal;
`;

export const Banner = styled(Box)`
  background-color: #075be0;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 4px;
  display: flex;
  align-items: center;

  .score-card {
    background: #17357d;
    padding: 36px;
    color: #efef00;
    margin: 8px 16px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
  }

  .score {
    font-size: 48px;
  }

  .banner-text {
    display: flex;
    flex-direction: column;
    margin: 5%;
    .header {
      color: white;
      font-size: 24px;
    }
    .content {
      color: white;
    }
  }
`;
