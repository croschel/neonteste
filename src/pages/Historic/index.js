/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Background from '../../components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions, ScrollView } from 'react-native';
import getRealm from '~/services/realm';

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

import { Value } from './styles';

function Historic() {
  // states
  const [transactions, setTransactions] = useState([]);
  const [contacts, setContacts] = useState([]);

  // Variable for chart props
  const data = {
    labels: contacts.map(ct => {
      const nameSplitted = ct.name.split(' ');
      return nameSplitted[0];
    }),
    datasets: [
      {
        data: contacts.map(ct => parseFloat(ct.tot_value).toFixed(2)),
      },
    ],
  };

  // load last Transactions about user
  useEffect(() => {
    async function loadTransactions() {
      const realm = await getRealm();
      const transactionsList = realm.objects('Transaction').sorted('entryAt', true);
      setTransactions(transactionsList);
    }
    loadTransactions();
  }, []);

  // loadGraphic
  useEffect(() => {
    async function loadGraphic() {
      const realm = await getRealm();
      const transactionsList = realm.objects('Transaction').sorted('contact.tot_value', true);
      const contactsId = transactionsList.map(tr => tr.contact.id);
      const filteredContacts = contactsId.filter(function (contact, index) {
        return contactsId.indexOf(contact) === index;
      });
      const getContacts = filteredContacts.map(contact => {
        return realm.objectForPrimaryKey('Contact', contact);
      });
      setContacts(getContacts);
    }
    loadGraphic();
  }, []);

  // stack functions
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
        <HeaderTitle>HISTÓRICO DE EVENTOS</HeaderTitle>
      </HeaderBox>
      <Container>
        <ScrollView horizontal style={{ maxHeight: 300 }}>
          <BarChart
            style={{ marginTop: 20, paddingRight: 20 }}
            data={data}
            width={Dimensions.get('window').width + 10}
            height={250}
            showValuesOnTopOfBars
            withHorizontalLabels={false}
            withVerticalLines={true}
            yAxisLabel="$"
            chartConfig={{
              backgroundColor: 'transparent',
              backgroundGradientFromOpacity: 0,
              backgroundGradientToOpacity: 0,
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              propsForLabels: {
                fontSize: 14,

              },
              barPercentage: 0.7,
            }}
            verticalLabelRotation={30}
            fromZero={true}
          />
        </ScrollView>
        <ContactsList>
          {transactions.map((transaction) => (
            <Contact
              key={transaction.id}
            >
              <LinearGradient
                colors={['#053e57', '#00fcc2']}
                style={{ borderRadius: 37, width: 76, height: 76 }}>
                <Avatar
                  source={{
                    uri: `https://api.adorable.io/avatars/80/neon${transaction.contact.id}.png`,
                  }}
                />
              </LinearGradient>
              <InfoBox>
                <Name>{transaction.contact.name}</Name>
                <Phone>{transaction.contact.phone}</Phone>
                <Value>{`R$ ${parseFloat(transaction.value).toFixed(2)}`}</Value>
              </InfoBox>
            </Contact>
          ))}
        </ContactsList>
      </Container>
    </Background>
  );
}

export default Historic;
