import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  user-select: none;
  padding: 8px 16px;
  border-radius: 4px;
  background: transparent none;
  outline: 0;
  border: none;
  box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.15) inset;

  &:focus {
    background: #fff !important;
    color: rgba(0, 0, 0, 0.8) !important;
    -webkit-box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.35) inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset;
    box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.35) inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset;
  }

  &:hover {
    background: #fff !important;
    color: rgba(0, 0, 0, 0.8) !important;
    box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.35) inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset;
  }

  &:active {
    background: #f8f8f8 !important;
    color: rgba(0, 0, 0, 0.9) !important;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15) inset, 0 1px 4px 0 rgba(34, 36, 38, 0.15) inset;
  }

  &:not(:last-child) {
    margin-right: 8px;
  }
`;
