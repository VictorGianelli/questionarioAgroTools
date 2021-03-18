import React, { useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
//title https://app.rocketseat.com.br/node/iniciando-aplicativo-mobile/group/estrutura-e-padroes-2/lesson/importando-fontes-externas

import Input from '../../components/Input'
import Button from '../../components/Button'

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { View, Container, Title, Note } from './styles';

const Main: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleChoose = useCallback((data: object) => {
    console.log(data);
  }, [])

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