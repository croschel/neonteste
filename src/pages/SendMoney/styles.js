import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';

export const Contact = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  margin: 0 20px;
  border-bottom-width: 1px;
  border-bottom-color: #085a6b;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

export const TransferBox = styled.SafeAreaView`
  padding: 15px;
  margin: 8%;
  background: #1f576b;
  border-radius: 18px;
  position: ${(props) => (props.visible ? 'absolute' : 'relative')};
  top: 25%;
  left: 2%;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
`;
export const HeaderTransfer = styled.View`
  flex-direction: row;
`;

export const CloseButton = styled(TouchableOpacity)``;

export const ContactBox = styled.View`
  align-items: center;
  margin: 0 30px;
`;
export const ContactName = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;
export const ContactPhone = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const FormBox = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
`;
export const InputValue = styled(TextInputMask)`
  background: #f1f1f1;
  width: 300px;
  border-radius: 10px;
  padding: 5px;
  margin: 15px 0;
  text-align: center;
  font-size: 38px;
  font-weight: bold;
  color: #09a4ab;
`;
export const SubmitButton = styled(TouchableOpacity)`
  background: #09a4ab;
  width: 300px;
  border-radius: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const SubmitText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  padding: 15px;
  text-align: center;
`;
