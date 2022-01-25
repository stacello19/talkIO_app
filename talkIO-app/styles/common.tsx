import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  width: 100px;
  background: ${props => props.color || '#FFE66D'};
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  margin: 1rem;
  border: none;
`