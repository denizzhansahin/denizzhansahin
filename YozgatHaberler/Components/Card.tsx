import {useState} from 'react';
import { Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


import E from '../Components/E.jpeg';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HaberDetay from '../Sayfalar/HaberDetay';

const Stack = createNativeStackNavigator();

import storage from '@react-native-firebase/storage';


async function gorselIndir(yol) {
  console.log(yol)
  try {
    const url = await storage().ref(yol).getDownloadURL();
    return url;
  } catch (error) {
    console.error('Error getting download URL', error);
    throw error; 
  }
}

function CardViewHaber({ title, body, image, link }) {
  const [gorselUri,setGorselUri]=useState('')
  gorselIndir(yol=image)
    .then((url) => {
      console.log('Download URL:', url);
      setGorselUri(url)
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  const navigation = useNavigation();
  return (
    <Card style={{ margin: 5 }} onPress={() => navigation.navigate('Haber Detayı', { haber: link })}>
      <Card.Cover source={{uri:gorselUri}} />
      <Card.Title title={title} subtitle={body} />

    </Card>
  )
}



export default CardViewHaber;


/*


  <Card>
    <Card.Cover source={E} />
    <Card.Content>
      <Text variant="titleLarge">Card title {title}</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
  </Card>

  */