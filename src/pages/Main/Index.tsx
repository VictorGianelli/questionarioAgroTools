import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
//title https://app.rocketseat.com.br/node/iniciando-aplicativo-mobile/group/estrutura-e-padroes-2/lesson/importando-fontes-externas

import Input from '../../components/Input'
import Button from '../../components/Button'

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import { Container, Title } from './styles';

const Main: React.FC = () => {
  const navigation = useNavigation();
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
          <Button onPress={() => navigation.navigate('Manage')}>Questionario</Button>
          <Button onPress={() => navigation.navigate('Manage')}>Respostas</Button>

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Main