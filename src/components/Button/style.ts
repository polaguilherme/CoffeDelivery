import { styled } from "styled-components";

export const ButttonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  gap: 0.25rem;
  align-self: stretch;
  background: ${({ theme }) => theme.colors["brand-yellow"]};
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.colors["base-white"]};
  font-weight: 700;
  font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 1.3rem;
  margin-top: 0.7rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`;
