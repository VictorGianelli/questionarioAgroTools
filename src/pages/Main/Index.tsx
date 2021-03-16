import React, { useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import Button from '../../components/Button'

import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';

const Main: React.FC = () => {
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

          <Button onPress={() => {
            navigation.navigate('Manage', {
              param: 'questionario',
            });
          }}>Questionario</Button>

          <Button onPress={() => {
            navigation.navigate('Manage', {
              param: 'respostas',
            });
          }}>Respostas</Button>

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Main