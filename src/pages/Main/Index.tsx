import React, { useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
//title https://app.rocketseat.com.br/node/iniciando-aplicativo-mobile/group/estrutura-e-padroes-2/lesson/importando-fontes-externas

import Input from '../../components/Input'
import Button from '../../components/Button'

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { Container, Title } from './styles';

const Main: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleChoose = useCallback((data: object) => {
    console.log(data);
  }, [])

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

          <Form ref={formRef} onSubmit={handleChoose} style={{ width: '100%' }}>
            <Input name="email" placeholder="email" />
            <Input name="senha" placeholder="senha" />
            <Button onPress={() => {
              formRef.current?.submitForm();
            }}>Questionario</Button>
          </Form>
          <Button onPress={() => navigation.navigate('Manage')}>Respostas</Button>

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Main