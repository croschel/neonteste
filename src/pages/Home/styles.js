import styled from 'styled-components/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  margin: auto auto;
`;
export const PersonBox = styled.View`
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;
export const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
export const Email = styled.Text`
  font-size: 18px;
  color: #fff;
`;
export const PayButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.5,
})`
  margin-top: 80px;
`;
export const ListButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.5,
})`
  flex-direction: row;
  background: #00a7aa;
  padding: 15px 30px;
  padding-bottom: 15px;
  border-radius: 30px;
  align-items: center;
  margin-top: 50px;
  elevation: 8;
`;
export const TextButton = styled.Text`
  font-size: 24px;
  margin-left: 10px;
  color: #004f84;
  font-weight: bold;
`;
