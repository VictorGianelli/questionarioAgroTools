import React, { useCallback, useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import {
  Container, Title,
  ContentsList,
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
  data_dadastro: string;
  fk_questionario: string;
}

const Manage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const [contents, setContents] = useState<Content[]>([]);
  const [value, setValue] = useState(String);

  const { navigate } = useNavigation();

  const route = useRoute();

  const way = Object.values(route.params)

  useEffect(() => {
    if (way == "questionario") {
      api.get('questionario').then((response) => {
        // console.log(response.data)
        setContents(response.data)
        setValue("questionario")
      })
    } else {
      api.get('resposta').then((response) => {
        // console.log(response.data)
        setContents(response.data)
        setValue("resposta")
      })
    }

  }, []);

  const handleNext = useCallback((data: object) => {
    console.log(data);
  }, [])

  const navigateToQuestionario = useCallback(
    (provider_id: string) => {
      // console.log(provider_id);
      navigate('Questions', { param: way[0], provider_id });
    },
    [navigate],
  );

  // console.log(contents[0])
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

          {value != "questionario" ? (
            <Title>Escolha quais respostas deseja ver</Title>
          ) : (
            <Title>Escolha um questionário</Title>
          )}

          {contents.map(content => (
            <ContentItem
              key={content.id}
            //isSelected={category.id === selectedCategory}
            // onPress={() => handleSelectCategory(category.id)}
            //activeOpacity={0.6}
            //testID={`category-${category.id}`}
            >

              <ContentContainer
                onPress={() => navigateToQuestionario(String(content.id))}
              >
                {value == "questionario" ? (
                  <ContentName>{content.titulo}</ContentName>
                ) : (
                  <ContentName>Enviado em {content.data_dadastro}</ContentName>
                )}

              </ContentContainer>
            </ContentItem>
          ))}

          {/* <ContentsList
          data={contents}
          keyExtractor={content => String(content.id)}
          renderItem={({ item }) => (
            <ContentContainer
              onPress={() => navigateToQuestionario(String(item.id))}
            >
              <ContentName>{item.titulo}</ContentName>
            </ContentContainer>
          )}
        /> */}

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default Manage