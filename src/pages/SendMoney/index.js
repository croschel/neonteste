import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Background from '../../components/Background';
// import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'react-native-linear-gradient';

import {
  Container,
  HeaderBox,
  HeaderTitle,
  BackButton,
  ContactsList,
  Contact,
  Avatar,
  InfoBox,
  Name,
  Phone,
} from '../../components/LayoutList';

function SendMoney() {
  const navigation = useNavigation();
  function goBack() {
    navigation.goBack();
  }
  return (
    <Background>
      <HeaderBox>
        <BackButton onPress={goBack}>
          {/* <MaterialIcons
            name="keyboard-arrow-left"
            size={50}
            color="#fff"
          /> */}
        </BackButton>
        <HeaderTitle>ENVIAR DINHEIRO</HeaderTitle>
      </HeaderBox>
      <Container>
        <ContactsList>
          <Contact
            style={{
              borderTopWidth: 1,
              paddingTop: 10,
              borderTopColor: '#085a6b',
            }}>
            <Avatar
              source={{ uri: 'https://api.adorable.io/avatars/80/neon.png' }}
            />

            <InfoBox>
              <Name>Anderson Santos</Name>
              <Phone>(11)98456-8745</Phone>
            </InfoBox>
          </Contact>
        </ContactsList>
      </Container>
    </Background>
  );
}

export default SendMoney;
