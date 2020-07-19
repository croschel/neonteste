import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const HeaderTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  margin: 0 auto 0 auto;
`;

export const BackButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.5,
})``;

export const ContactsList = styled.ScrollView`
  flex: 1;
  padding: 10px;
  margin-top: 10px;
`;
export const Contact = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 20px;
  border-bottom-width: 1px;
  border-bottom-color: #085a6b;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;
export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
  margin: auto auto;
`;
export const InfoBox = styled.View`
  justify-content: flex-start;
  margin-left: 10px;
`;
export const Name = styled.Text`
  color: #19a9b5;
  font-size: 22px;
`;
export const Phone = styled.Text`
  color: #0b7a89;
  font-size: 18px;
`;