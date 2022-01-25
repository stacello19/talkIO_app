import styled from 'styled-components';

export const ChatHeader = styled.div`
  display: flex;
  gap: 1rem;
  height: 80px;
  width: 100%;
  background: #495057;
  color: white;
  padding: 1rem;
  align-items: center;
`

export const Wrapper = styled.div`
  display: grid;
  padding: 1rem;
  background: #6c757d;
  width: 100%;
  height: calc(100% - 80px);
  justify-content: center;
`

export const RoundButton = styled.button`
  height: 45px;
  width: 100px;
  border-radius: 20px;
  background: ${props => props.color || '#A9DEF9'};
  font-weight: 700;
  border: none;
  cursor: pointer;
`

export const SideNav = styled.div`
  height: 100%;
  width: 250px;
  background: #023047;
  color: white;
`