import React, { useCallback, useRef, useState } from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'

import { ScrollView, Alert, PermissionsAndroid } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { Container, QuestionContainer, Title } from './styles';
import Geolocation from 'react-native-geolocation-service';
import { parseISO } from 'date-fns';
import { useRoute } from '@react-navigation/core';
// import { Container } from '../../components/Input/styles';

interface Respostas {
  nomeCompleto: string;
  ocupacao: string;
  sexo: string;
  idade: string;
}

interface Posicao {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const Questions: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const route = useRoute();

  const handleSubmit = useCallback(
    (data: object) => {
      async function loadItems(): Promise<void> {
        request_location_runtime_permission();

        const dados = JSON.stringify({ data });
        const posicao = JSON.stringify({ position });

        const dataValue = Object.values(data)
        const posicaoValue = Object.values(position)

        // console.log(Object.values(data).length);
        // console.log(dataValue);

        for (var i = 0; i < Object.values(data).length; i++) {
          console.log("dataValue[" + i + "]: " + dataValue[i]);
        }

        for (var i = 0; i < Object.values(position).length; i++) {
          console.log("posicaoValue[" + i + "]: " + posicaoValue[i]);
        }

        const parsedDate = parseISO(new Date().toISOString());

        let resposta = {
          data_dadastro: parsedDate,
          nomeCompleto: dataValue[0],
          ocupacao: dataValue[1],
          sexo: dataValue[2],
          idade: dataValue[3],
          latitude: position.latitude,
          longitude: position.longitude,
        }

        Object.values(resposta)

        // const resp = JSON.parse(resposta)

        // const formattedCategories = response.data.map(resposta => {
        //   return {
        //     ...category,
        //   };
        // });

        // var o
        // o = Object.create({ p: { value: 42 } });

        Alert.alert("Dados", JSON.stringify(resposta))
        // console.log(parsedDate);
        // console.log(JSON.stringify(dados));
        // console.log(JSON.stringify(posicao));
      }

      //  if (position.longitudeDelta != 0) {
      loadItems()
      // } else {
      //   Alert.alert("Sinal", "Vc esta sem sunal de gps")
      // }

    }, [])

  const [resposta, setResposta] = useState<Respostas>([]);
  const [position, setPosition] = useState<Posicao>({
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

  // const way = Object.values(route.params)
  // console.log(way)
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