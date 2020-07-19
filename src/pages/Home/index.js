import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Background from '../../components/Background';
// import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
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

function Home() {
  // Access to navigate
  const navigation = useNavigation();

  // Stack functions
  function goSendMoney() {
    navigation.navigate('SendMoney');
  }
  function goHistoric() {
    navigation.navigate('Historic');
  }

  return (
    <Background>
      <Container>
        <Avatar source={avatar} />

        <PersonBox>
          <Name>Caique Roschel</Name>
          <Email>croschel000@gmail.com</Email>
        </PersonBox>
        <PayButton onPress={goSendMoney}>
          <Text>Go</Text>
          {/* <MaterialIcons name="monetization-on" size={180} color="#00a7aa" /> */}
        </PayButton>
        <ListButton onPress={goHistoric}>
          {/* <FontAwesome name="list" size={30} color="#004f84" /> */}
          <TextButton>Histórico de envios</TextButton>
        </ListButton>
      </Container>
    </Background>
  );
}

export default Home;
