import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Content } from './index';

export const Container = styled.View`
width: 100%;
height: 60px;
padding: 0 19px;
background: #fff;
border-radius: 10px;
margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  margin: 64px 0 24px;
`;

export const ContentsList = styled(
  FlatList as new () => FlatList<Content>,
).attrs({
  contentContainerStyle: {
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 24,
  },
})``;

export const ContentContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin-bottom: 16px;
  background: #3e3b;
  border-radius: 10px;
`;

export const ContentName = styled.Text`
  font-size: 18px;
  color: #f4ede8;
`;