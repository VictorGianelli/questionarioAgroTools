import React, { useCallback, useRef } from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'

import { ScrollView, Alert } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { Container, QuestionContainer, Title } from './styles';
import { JsxFlags } from 'typescript';
import { parseISO } from 'date-fns';
// import { Container } from '../../components/Input/styles';

const Questions: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: object) => {
    const dados = JSON.stringify({ data });

    const parsedDate = parseISO(new Date().toISOString());
    // const response = JSON.stringify(data.toString())

    // const formatData = response.data.map(category => {
    //   return {
    //     ...category,
    //   };
    // });

    var info = JSON.stringify(data)
    Alert.alert("Dados", dados + "\n" + parsedDate)
    // console.log(JSON.parse(data));
  }, [])

  return (
    // <Container>
    <ScrollView
      horizontal={false}
      showsHorizontalScrollIndicator={false}>
      {/* <Container> */}
      <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
        <QuestionContainer>

          <Title>Nome completo:</Title>
          <Input name="nomeCompleto" placeholder="Resposta" />

        </QuestionContainer>
        <QuestionContainer>

          <Title>Ocupação:</Title>
          <Input name="ocupacao" placeholder="Resposta" />

        </QuestionContainer>
        <QuestionContainer>

          <Title>Sexo:</Title>
          <Input name="sexo" placeholder="Resposta" />

        </QuestionContainer>
        <QuestionContainer>

          <Title>Idade:</Title>
          <Input name="idade" placeholder="Resposta" />

        </QuestionContainer>
        <QuestionContainer>
          <Button onPress={() => {
            formRef.current?.submitForm();
          }}>Questionario</Button>
        </QuestionContainer>
      </Form>
      {/* </Container> */}
    </ScrollView >
    // </Container>
  );
};

export default Questions