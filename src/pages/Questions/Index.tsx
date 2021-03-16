import React, { useCallback, useRef, useState } from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'

import { ScrollView, Alert, PermissionsAndroid } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { QuestionContainer, Title } from './styles';
import Geolocation from 'react-native-geolocation-service';
import { parseISO } from 'date-fns';
import { useRoute } from '@react-navigation/core';

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


  const handleSubmit = useCallback(
    (data: object) => {
      async function loadItems(): Promise<void> {
        request_location_runtime_permission();

        const dataValue = Object.values(data)
        const posicaoValue = Object.values(position)

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

        Alert.alert("Dados", JSON.stringify(resposta))
      }

      loadItems()

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

  return (
    <ScrollView
      horizontal={false}
      showsHorizontalScrollIndicator={false}>

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
      
    </ScrollView >
  );
};

export default Questions