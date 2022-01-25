import styled from 'styled-components';

export const Chat = styled.div`
  background: #ced4da;
  border-radius: 10px;
  height: 95%;
  width: 800px;
  overflow-y: scroll;
`

export const ChatTypeBox = styled.input`
  height: 50px;
  width: 95%;
  margin: 1rem;
  border-radius: 10px;
  border: none;
  padding: 0.5rem;
  font-size: 16px;
`

export const SendIcon = styled.span`
  position: absolute;
  top: 28px;
  right: 35;
  font-size: 15px;
  width: 25px;
  height: 25px;
  background: url('/images/send.svg') no-repeat;
`