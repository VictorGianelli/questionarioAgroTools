import React, { useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { Container, Title } from './styles';
import { useNavigation, useRoute } from '@react-navigation/core';

const Manage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const route = useRoute();

  //const { param } = route.params;

  const handleNext = useCallback((data: object) => {
    console.log(data);
  }, [])


  console.log(route.params)
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

          <Form ref={formRef} onSubmit={handleNext} style={{ width: '100%' }}>
            <Input name="email" placeholder="email" />
            <Button onPress={() => { }}>Questionario</Button>
          </Form>

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default Manage