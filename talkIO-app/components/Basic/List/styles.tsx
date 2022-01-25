import styled from 'styled-components';

export const ChatList = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  min-width: 180px;
  height: 50px;
  padding: 1rem 1.5rem;
  background: ${(props: { active: boolean; }) => props.active ? '#004e89' : 'inherit'};
`