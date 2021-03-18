import React, { useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import Input from '../../components/Input'
import Button from '../../components/Button'

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { View, Container, Title, Note } from './styles';

const Main: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>

        <Title>Questionario AgroTools</Title>
        <Button onPress={() => {
          navigation.navigate('Manage', {
            param: 'questionario',
          });
        }}>Questionario</Button>

        <Button onPress={() => {
          navigation.navigate('Manage', {
            param: 'resposta',
          });
        }}>Respostas</Button>

        <Button
          onPress={() => {
            //navigation.navigate('Questions');
          }}>Criar</Button>

      </Container>
      <View>
        <Note>App desenvolvido por Victor Gianelli para avaliação</Note>
      </View>
    </>
  );
};

export default Main