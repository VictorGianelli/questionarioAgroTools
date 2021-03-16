import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  //icon: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputElementRef = useRef<any>(null)
  
  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValeuRef = useRef<InputValueReference>({ value: defaultValue })

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValeuRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);


  return (
    <Container>

      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValeuRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  )
};

export default Input