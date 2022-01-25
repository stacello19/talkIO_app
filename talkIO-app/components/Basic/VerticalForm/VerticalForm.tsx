import React, { VFC } from 'react';

import { Label, Input } from './styles';

interface Props {
  label: string;
  onChange: (e: any) => void;
  value: string | number;
  name: string;
}

const VerticalForm: VFC<Props> = ({ label, onChange, value, name }) => {
  return(
    <div>
      <Label>{label}</Label>
      <Input onChange={onChange} value={value} name={name} />
    </div>
  )
}

export default VerticalForm;