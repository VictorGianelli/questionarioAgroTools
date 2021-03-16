import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Platform } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 19px;
  border-radius: 10px;
  margin-top: 16px;
`;

export const Title = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #f4ede8;
  margin: 0px 0 16px;
`;

export const QuestionContainer = styled(RectButton)`
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 8px 4px 8px;
  background: #01737470;
  border-radius: 10px;
`;
