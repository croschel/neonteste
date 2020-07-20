/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, Keyboard, LogBox } from 'react-native';
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
  CloseButton,
  ContactBox,
  ContactName,
  ContactPhone,
  FormBox,
  Title,
  InputValue,
  SubmitButton,
  SubmitText,
} from './styles';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

function SendMoney() {
  // get params
  const route = useRoute();
  const { user } = route.params;

  // states
  const [contacts, setContacts] = useState([]);
  const [money, setMoney] = useState();
  const [visible, setVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});

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
    setSelectedContact(contact);
    setVisible(true);
  }

  // close TransferBox
  function handleCloseBox() {
    setMoney(null);
    Keyboard.dismiss();
    setVisible(false);
  }

  // destroy db
  async function handleDestroy() {
    const realm = await getRealm();
    realm.write(() => {
      const transactions = realm.objects('Transaction');
      console.tron.log(transactions);
      realm.delete(transactions);
    });

  }

  // Transfer Money
  async function handleTransaction() {
    const realm = await getRealm();
    const prevValueContact = realm.objectForPrimaryKey('Contact', selectedContact.id);
    console.tron.log(prevValueContact);
    const { tot_value } = prevValueContact;
    try {
      const formattedValue = money.split('R$');
      var formattedMoney = parseFloat(formattedValue[1]);
      console.tron.log(formattedMoney);
      realm.write(() => {
        const data = {
          id: Math.floor(Math.random() * 100),
          value: formattedMoney,
          entryAt: new Date(),
        };

        const transaction = realm.create('Transaction', data);
        transaction.user = { id: user.id, name: user.name, email: user.email };
        transaction.contact = {
          id: selectedContact.id,
          name: selectedContact.name,
          phone: selectedContact.phone,
          tot_value: tot_value + formattedMoney,
        };

        console.tron.log(transaction);

      });
      Keyboard.dismiss();
      Alert.alert('Transação bem Sucedida', `R$${formattedMoney} transferido para ${selectedContact.name}!`);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Transação mal sucedida', 'Ocorreu algum problema durante a transferência');
      return;
    }
  }

  // stack functions
  function goBack() {
    navigation.goBack();
  }
  return (
    <Background >
      <HeaderBox style={{ opacity: visible ? 0.09 : 1 }}>
        <BackButton onPress={goBack}>
          <Icon name="keyboard-arrow-left" size={50} color="#fff" />
        </BackButton>
        <HeaderTitle>ENVIAR DINHEIRO</HeaderTitle>
      </HeaderBox>
      <Container style={{ opacity: visible ? 0.09 : 1 }}>
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
      <TransferBox visible={visible}>
        <HeaderTransfer>
          <CloseButton onPress={handleCloseBox}>
            <Icon name="cancel" size={50} color="#fff" />
          </CloseButton>
          <ContactBox>
            <LinearGradient
              colors={['#053e57', '#00fcc2']}
              style={{ borderRadius: 37, width: 76, height: 76 }}>
              <Avatar
                source={{
                  uri: `https://api.adorable.io/avatars/80/neon${selectedContact.id}.png`,
                }}
              />
            </LinearGradient>
            <ContactName>{selectedContact.name}</ContactName>
            <ContactPhone>{selectedContact.phone}</ContactPhone>
          </ContactBox>

        </HeaderTransfer>
        <FormBox>
          <Title>Valor a enviar:</Title>
          <InputValue
            autoCorrect={false}
            placeholder="R$ 0,00"
            placeholderTextColor="#09a4ab"
            value={money}
            onChangeText={setMoney}
            type="money"
            options={{
              precision: 2,
              separator: '.',
              delimiter: '',
              unit: 'R$',
              suffixUnit: '',
            }}
          />
          <SubmitButton onPress={() => handleTransaction()}>
            <SubmitText>ENVIAR</SubmitText>
          </SubmitButton>
        </FormBox>
      </TransferBox>

    </Background>
  );
}

export default SendMoney;
