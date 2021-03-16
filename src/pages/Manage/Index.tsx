import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import {
  Container, Title,
  ContentItem,
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

  const [contents, setContents] = useState<Content[]>([]);

  const { navigate } = useNavigation();

  const route = useRoute();

  const way = Object.values(route.params)

  useEffect(() => {
    if (way == "questionario") {
      api.get('questionarios').then((response) => {
        console.log(response.data)
        setContents(response.data)
      })
    } else {
      api.get('respostas').then((response) => {
        console.log(response.data)
        setContents(response.data)
      })
    }
  }, []);

  const handleNext = useCallback((data: object) => {
    console.log(data);
  }, [])

  const navigateToQuestionario = useCallback(
    (provider_id: string) => {
      console.log(provider_id);
      navigate('Questions', { provider_id });
    },
    [navigate],
  );

  console.log(way)
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}>
        <Container>
          <Title>Faça a sua escolha</Title>

          {contents.map(content => (
            <ContentItem
              key={content.id}
            >
              <ContentContainer
                onPress={() => navigateToQuestionario(String(content.id))}
              >
                <ContentName>{content.titulo}</ContentName>
              </ContentContainer>
            </ContentItem>
          ))}

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default Manage