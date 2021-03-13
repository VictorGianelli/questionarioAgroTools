import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Title } from './styles';

const Manage: React.FC = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Title>Faça a sua escolha</Title>

          <Input name="email" placeholder="email" />
          <Button onPress={() => { }}>Questionario</Button>

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default Manage