import React, { useCallback, useRef } from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'

import { ScrollView } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { Container, QuestionContainer, Title } from './styles';
// import { Container } from '../../components/Input/styles';

const Questions: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: object) => {
    console.log(data);
  }, [])

  return (
    // <Container>
    <ScrollView
      horizontal={false}
      showsHorizontalScrollIndicator={false}>
      {/* <Container> */}
      <QuestionContainer>
        <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Title>Na verdade eu gostaria de saber a posição dessaosição da pergunta</Title>
          <Input name="resposta1" placeholder="Resposta" />
        </Form>
      </QuestionContainer>
      <QuestionContainer>
        <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Title>Na verdade eu gostaria de saber a posição dessaosição da pergunta</Title>
          <Input name="resposta2" placeholder="Resposta" />
        </Form>
      </QuestionContainer>
      <QuestionContainer>
        <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Title>Na verdade eu gostaria de saber a posição dessaosição da pergunta</Title>
          <Input name="resposta3" placeholder="Resposta" />
        </Form>
      </QuestionContainer>
      <QuestionContainer>
        <Button onPress={() => {
          formRef.current?.submitForm();
        }}>Questionario</Button>
      </QuestionContainer>
      {/* </Container> */}
    </ScrollView>
    // </Container>
  );
};

export default Questions