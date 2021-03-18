import React, { useCallback, useEffect, useRef, useState } from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'

import { ScrollView, Alert, PermissionsAndroid } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { Container, QuestionContainer, Title } from './styles';
import Geolocation from 'react-native-geolocation-service';
import {
  parseISO,
  format,
  formatRelative,
  formatDistance,
} from 'date-fns';
import { useNavigation, useRoute } from '@react-navigation/core';
import api from '../../services/api';
// import { format } from 'prettier';
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
  const navigation = useNavigation();
  const route = useRoute();

  const [data, setData] = useState<Respostas>([]);
  const [value, setValue] = useState(String);
  const [position, setPosition] = useState<Posicao>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const fk_id = Object.values(route.params)

  useEffect(() => {

    api.get(`resposta/${fk_id[1]}`).then((response) => {
      console.log(fk_id[0])
      const answer = Object.values(response.data.respostas)

      let respostas = {
        nomeCompleto: answer[0],
        ocupacao: answer[1],
        sexo: answer[2],
        idade: answer[3],
      }

      if (fk_id[0] == "resposta") {
        setData(answer)
      }

      console.log(answer[0])
    })

  }, []);

  const handleSubmit = useCallback(
    (data: Respostas) => {
      async function loadItems(): Promise<void> {
        request_location_runtime_permission();

        const parsedDate = parseISO(new Date().toISOString());

        const formattedDate = format(
          parsedDate,
          "dd'/'MM'/'yyyy"
        );

        let localização = {
          latitude: position.latitude,
          longitude: position.longitude,
        }

        let respostas = {
          nomeCompleto: data.nomeCompleto,
          ocupacao: data.ocupacao,
          sexo: data.sexo,
          idade: data.idade,
        }

        let resposta = {
          fk_questionario: fk_id[0],
          data_dadastro: formattedDate,
          localização,
          respostas,
        }

        if (fk_id[0] == "resposta") {
          await api.put(`resposta/${fk_id[1]}`, resposta);
        } else {
          await api.post('resposta', resposta);
        }


        setData(respostas)
        // const formattedCategories = response.data.map(resposta => {
        //   return {
        //     ...category,
        //   };
        // });

        // var o
        // o = Object.create({ p: { value: 42 } });

        Alert.alert("Salvo!", "Respostas salvas com sucesso")
        // console.log(parsedDate);
        // console.log(JSON.stringify(dados));
        // console.log(JSON.stringify(posicao));
        navigation.navigate('Main')
      }

      //  if (position.longitudeDelta != 0) {
      loadItems()
      // } else {
      //   Alert.alert("Sinal", "Vc esta sem sunal de gps")
      // }

    }, [])


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
  console.log(fk_id[0])
  return (
    // <Container>
    <ScrollView
      horizontal={false}
      showsHorizontalScrollIndicator={false}>
      {/* <Container> */}
      <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
        <QuestionContainer>

          <Title>Nome completo:</Title>
          <Input
            name="nomeCompleto"
            defaultValue={data[0]}
            placeholder="Resposta"
            autoCapitalize="words"
            returnKeyType="next" />

        </QuestionContainer>
        <QuestionContainer>

          <Title>Ocupação:</Title>
          <Input
            name="ocupacao"
            defaultValue={data[1]}
            placeholder="Resposta"
            returnKeyType="next" />

        </QuestionContainer>
        <QuestionContainer>

          <Title>Sexo:</Title>
          <Input
            name="sexo"
            defaultValue={data[2]}
            placeholder="Resposta"
            returnKeyType="next" />

        </QuestionContainer>
        <QuestionContainer>

          <Title>Idade:</Title>
          <Input
            name="idade"
            defaultValue={data[3]}
            placeholder="Resposta"
            keyboardType="number-pad"
            returnKeyType="next" />

        </QuestionContainer>
        <QuestionContainer>
          {fk_id[0] == "questionario" ? (
            <Button onPress={() => {
              formRef.current?.submitForm();
            }}>Enviar</Button>
          ) : (
            <Button onPress={() => {
              formRef.current?.submitForm();
            }}>Atualizar</Button>
          )}

        </QuestionContainer>
      </Form>
      {/* </Container> */}
    </ScrollView >
    // </Container>
  );
};

export default Questions