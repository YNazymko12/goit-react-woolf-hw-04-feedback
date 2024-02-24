import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  width: 100px;
  padding: 15px;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  background-color: #c0e9eb;

  &:hover,
  &:focus {
    color: white;
    background-color: #115c78;
    cursor: pointer;
  }
`;
