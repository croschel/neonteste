/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Background from '../../components/Background';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import getRealm from '~/services/realm';
import {
  Container,
  HeaderBox,
  HeaderTitle,
  BackButton,
  ContactsList,
  Avatar,
  InfoBox,
  Name,
  Phone,
} from '../../components/LayoutList';
import {
  Contact,
  TransferBox,
  HeaderTransfer,
  ContactBox,
  ContactName,
  ContactPhone,
  FormBox,
  Title,
  InputValue,
  SubmitButton,
  SubmitText,
} from './styles';

function SendMoney() {
  // states
  const [contacts, setContacts] = useState([]);

  // navigate
  const navigation = useNavigation();

  // loadContacts
  useEffect(() => {
    async function loadContacts() {
      const realm = await getRealm();
      const response = realm.objects('Contact');
      setContacts(response);
    }
    loadContacts();
  }, []);

  // function to handle with selected contact on press
  function handleSelectedContact(contact) {

  }

  // stack functions
  function goBack() {
    navigation.goBack();
  }
  return (
    <Background >
      <HeaderBox >
        <BackButton onPress={goBack}>
          <Icon name="keyboard-arrow-left" size={50} color="#fff" />
        </BackButton>
        <HeaderTitle>ENVIAR DINHEIRO</HeaderTitle>
      </HeaderBox>
      <Container >
        <ContactsList>
          {contacts.map((contact) => (
            <Contact
              key={contact.id}
              onPress={() => handleSelectedContact(contact)}
              style={{
                borderTopColor: '#085a6b',
              }}>
              <LinearGradient
                colors={['#053e57', '#00fcc2']}
                style={{ borderRadius: 37, width: 76, height: 76 }}>
                <Avatar
                  source={{
                    uri: `https://api.adorable.io/avatars/80/neon${contact.id}.png`,
                  }}
                />
              </LinearGradient>
              <InfoBox>
                <Name>{contact.name}</Name>
                <Phone>{contact.phone}</Phone>
              </InfoBox>
            </Contact>
          ))}
        </ContactsList>
      </Container>
      <TransferBox>
        <HeaderTransfer>
          <Icon name="cancel" size={50} color="#fff" />
          <ContactBox>
            <LinearGradient
              colors={['#053e57', '#00fcc2']}
              style={{ borderRadius: 37, width: 76, height: 76 }}>
              <Avatar
                source={{
                  uri: 'https://api.adorable.io/avatars/80/neon.png',
                }}
              />
            </LinearGradient>
            <ContactName>Anderson Santos</ContactName>
            <ContactPhone>(11)98456-8745</ContactPhone>
          </ContactBox>

        </HeaderTransfer>
        <FormBox>
          <Title>Valor a enviar:</Title>
          <InputValue
            autoCorrect={false}
            keyboardType="number-pad"
            placeholder="R$ 0,00"
            placeholderTextColor="#09a4ab"
          />
          <SubmitButton>
            <SubmitText>ENVIAR</SubmitText>
          </SubmitButton>
        </FormBox>
      </TransferBox>

    </Background>
  );
}

export default SendMoney;
