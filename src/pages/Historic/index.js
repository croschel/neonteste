import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Background from '../../components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions, ScrollView } from 'react-native';

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

function Historic() {
  // Variable for chart props
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 40, 28, 80, 99, 43],
      },
    ],
  };

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
            style={{ marginTop: 20 }}
            data={data}
            width={500}
            height={250}
            showValuesOnTopOfBars
            yAxisLabel="%"
            chartConfig={{
              backgroundColor: 'transparent',
              backgroundGradientFromOpacity: 0,
              backgroundGradientToOpacity: 0,
              decimalPlaces: 1, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

              style: {
                borderRadius: 16,
              },
            }}
            verticalLabelRotation={30}
            fromZero={true}
          />
        </ScrollView>
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

export default Historic;
