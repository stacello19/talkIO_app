import styled from 'styled-components';

interface TabProps {
  active: boolean
}

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #2F5156;
  width: 450px;
  border-radius: 10px;
  padding: 1rem;
`

export const Tab = styled.div`
  border: ${(props: TabProps) => props.active ? '1px solid black' : 'none'};
  border-bottom: ${(props: TabProps) => props.active ? 'none' : '1px solid black'};
  color: ${(props: TabProps) => props.active ? 'white' : 'black'};
  font-size: 16px;
  padding: 0.5rem;
  cursor: pointer;
`

export const H1 = styled.div`
  font-size: 48px;
  color: #4ECDC4;
  font-weight: 700;
  margin-bottom: 1rem;
`