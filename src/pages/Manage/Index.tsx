import React, { useCallback, useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import {
  Container, Title,
  ContentsList,
  ContentName,
  ContentContainer
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/core';

import api from '../../services/api';

export interface Content {
  id: number;
  titulo: string;
  usuario: string;
  data: string;
}

const Manage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const [contents, setContents] = useState<Content[]>([]);

  const { navigate } = useNavigation();

  const route = useRoute();

  useEffect(() => {
    api.get('questionarios').then((response) => {
      console.log(response.data)
      setContents(response.data)
    })

  }, []);

  const handleNext = useCallback((data: object) => {
    console.log(data);
  }, [])

  const navigateToCreateAppointment = useCallback(
    (provider_id: string) => {
      navigate('CreateAppointment', { provider_id });
    },
    [navigate],
  );
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      {/* <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      > */}
      <Container>
        <Title>Faça a sua escolha</Title>

        <ContentsList
          data={contents}
          keyExtractor={content => String(content.id)}
          renderItem={({ item }) => (
            <ContentContainer
              //onPress={() => navigateToCreateAppointment(item)}
            >
              <ContentName>{item.titulo}</ContentName>
            </ContentContainer>
          )}
        />
        {/* <Form ref={formRef} onSubmit={handleNext} style={{ width: '100%' }}>
            <Input name="email" placeholder="email" />
            <Button onPress={() => { }}>Questionario</Button>
          </Form> */}

      </Container>
      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  );
}
export default Manage