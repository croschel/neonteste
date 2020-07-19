/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Background from '../../components/Background';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
          <Icon name="keyboard-arrow-left" size={50} color="#fff" />
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
            <LinearGradient
              colors={['#053e57', '#00fcc2']}
              style={{ borderRadius: 37, width: 76, height: 76 }}>
              <Avatar
                source={{ uri: 'https://api.adorable.io/avatars/80/neon.png' }}
              />
            </LinearGradient>
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
