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
  font-size: 24px;
  color: #f4ede8;
  margin: 6px 0 24px;
`;

export const QuestionContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin-bottom: 16px;
  background: #3e3b47;
  border-radius: 10px;
`;
