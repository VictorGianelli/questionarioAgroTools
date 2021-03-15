import React, { useCallback, useRef, useState } from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'

import { ScrollView, Alert, PermissionsAndroid } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { Container, QuestionContainer, Title } from './styles';
import Geolocation from 'react-native-geolocation-service';
import { parseISO } from 'date-fns';
// import { Container } from '../../components/Input/styles';

const Questions: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: object) => {
    request_location_runtime_permission();
    const dados = JSON.stringify({ data });

    const parsedDate = parseISO(new Date().toISOString());

    const posicao = JSON.stringify({ position });
    // const location = getCurrentPosition();
    // const response = JSON.stringify(data.toString())

    // const formatData = response.data.map(category => {
    //   return {
    //     ...category,
    //   };
    // });

    var info = JSON.stringify(data)
    Alert.alert("Dados", dados + "\n" + parsedDate + "\n" + posicao)
    // console.log(JSON.parse(data));
  }, [])

  const [position, setPosition] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const request_location_runtime_permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão de Localização',
          message: 'A aplicação precisa da permissão de localização.',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          pos => {
            setPosition({
              ...position,
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
          },
          error => {
            console.log(error);
            Alert.alert('Houve um erro ao pegar a latitude e longitude.');
          },
        );
      } else {
        Alert.alert('Permissão de localização não concedida');
      }
    } catch (err) {
      console.log(err);
    }
  };

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