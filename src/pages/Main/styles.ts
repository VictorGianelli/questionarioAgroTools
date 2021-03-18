import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  flexDirection: column;
  alignItems: center;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const View = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 0px 0px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  margin: 64px 0 24px;
`;

export const Note = styled.Text`
  position: absolute;
  left: 10px;
  bottom: 10px;
  right: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 20px;
  fontStyle: italic;
  color: #f4ede8;
  margin: 0px 0 0px;
`;