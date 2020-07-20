/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Background from '../../components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Avatar,
  PersonBox,
  Name,
  Email,
  PayButton,
  ListButton,
  TextButton,
} from './styles';
import avatar from '../../assets/roschel.png';
import LinearGradient from 'react-native-linear-gradient';
import getRealm from '~/services/realm';

function Home() {
  // States
  const [user, setUser] = useState([]);

  // Access to navigate
  const navigation = useNavigation();

  // includind User on DB;
  useEffect(() => {
    async function loadUser() {
      const realm = await getRealm();
      const user = realm.objects('User');
      try {
        realm.write(() => {
          const data = {
            id: 1,
            name: 'Caique Roschel',
            email: 'croschel000@gmail.com',
          };
          const user = realm.create('User', data);
        });
        const createdUser = realm.objects('User');
        setUser(createdUser[0]);
      } catch (error) {
        setUser(user[0]);
        return;
      }
    }
    loadUser();
  }, []);

  // includind Contacts on DB;
  useEffect(() => {
    async function loadContacts() {
      const realm = await getRealm();
      const contacts = realm.objects('Contact');
      try {
        realm.write(() => {
          const contact1 = {
            id: 1,
            name: 'Lais Santos',
            phone: '(11) 97654-1157',
            tot_value: 0,
          };
          const contact2 = {
            id: 2,
            name: 'Lourdes Pereira',
            phone: '(11) 97474-1557',
            tot_value: 0,
          };
          const contact3 = {
            id: 3,
            name: 'Carlos Magno',
            phone: '(11) 97444-1557',
            tot_value: 0,
          };
          const contact4 = {
            id: 4,
            name: 'Marcos Campos',
            phone: '(11) 97854-4457',
            tot_value: 0,
          };
          const contact5 = {
            id: 5,
            name: 'Bruno de Oliveira',
            phone: '(11) 97554-4457',
            tot_value: 0,
          };
          const contact6 = {
            id: 6,
            name: 'Isis Souza',
            phone: '(11) 99954-1557',
            tot_value: 0,
          };
          const contact7 = {
            id: 7,
            name: 'Emanuel Conseição',
            phone: '(11) 99854-1457',
            tot_value: 0,
          };
          const contact8 = {
            id: 8,
            name: 'Felipe da Cruz',
            phone: '(11) 99324-5157',
            tot_value: 0,
          };
          const contact9 = {
            id: 9,
            name: 'Kathlen Aparecida',
            phone: '(11) 97998-5222',
            tot_value: 0,
          };
          const contact10 = {
            id: 10,
            name: 'Antonio Carlos',
            phone: '(11) 99885-4557',
            tot_value: 0,
          };
          const contact11 = {
            id: 11,
            name: 'Isabela Mendes',
            phone: '(11) 97544-8989',
            tot_value: 0,
          };
          const contact12 = {
            id: 12,
            name: 'Ursula Barbosa',
            phone: '(11) 99885-7557',
            tot_value: 0,
          };
          realm.create('Contact', contact1);
          realm.create('Contact', contact2);
          realm.create('Contact', contact3);
          realm.create('Contact', contact4);
          realm.create('Contact', contact5);
          realm.create('Contact', contact6);
          realm.create('Contact', contact7);
          realm.create('Contact', contact8);
          realm.create('Contact', contact9);
          realm.create('Contact', contact10);
          realm.create('Contact', contact11);
          realm.create('Contact', contact12);
        });
        const createdContacts = realm.objects('Contact');
      } catch (error) {
        return;
      }
    }
    loadContacts();
  }, []);

  // Stack functions
  function goSendMoney() {
    navigation.navigate('Sendmoney', { user });
  }
  function goHistoric() {
    navigation.navigate('Historic');
  }
  return (
    <Background>
      <Container>
        <LinearGradient
          colors={['#053e57', '#00fcc2']}
          style={{ borderRadius: 90, width: 190, height: 190 }}
        >
          <Avatar source={avatar} />
        </LinearGradient>

        <PersonBox>
          <Name>{user.name}</Name>
          <Email>{user.email}</Email>
        </PersonBox>
        <PayButton onPress={goSendMoney}>
          <Icon name="monetization-on" size={180} color="#00a7aa" />
        </PayButton>
        <ListButton onPress={goHistoric}>
          <Icon name="list" size={30} color="#004f84" />
          <TextButton>Histórico de envios</TextButton>
        </ListButton>
      </Container>
    </Background>
  );
}

export default Home;
