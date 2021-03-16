import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Content } from './index';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  align-items: center;
  justify-content: center;
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
})`  width: 100%;`;

export const ContentContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  width: 80%
  padding: 20px;
  margin-bottom: 16px;
  background: #017374;
  border-radius: 10px;
`;

export const ContentName = styled.Text`
  font-size: 18px;
  color: #f4ede8;
`;

export const ContentItem = styled(RectButton)`
width: 100%;
  border-radius: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 0px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;