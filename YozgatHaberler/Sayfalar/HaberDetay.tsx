import {useState} from 'react';
import { View,StyleSheet,SafeAreaView,ScrollView,StatusBar } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { Chip } from 'react-native-paper';

import E from "../Components/E.jpeg"

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


function HaberDetay({route}) {
    const { haber } = route.params;
    const [gorselUri,setGorselUri]=useState('')
    gorselIndir(yol=haber.gorsel)
      .then((url) => {
        console.log('Download URL:', url);
        setGorselUri(url)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>

        <Card>
          <Card.Cover source={{uri:gorselUri}}/>
          <Card.Content>
          <Text style={{marginTop:2}} variant="titleLarge">{haber.baslik}</Text>

          <View>
          <View style={styles.bilgi}>
            <Chip style={{flex:1}}><Text variant='labelLarge'> Haber Kategorisi :{haber.kategori}</Text></Chip>
            <Chip style={{flex:1}}><Text variant='labelLarge'>Haber Yayınlanma Tarihi : {haber.tarih}</Text></Chip>
            <Chip style={{flex:1}}><Text variant='labelLarge'>Haber Yayıncısı-Yazar : {haber.yayinci_yazar}</Text></Chip>
          </View>
          <View style={{marginTop:2}}>
            <Text variant='bodyLarge'>{haber.metin}</Text>
          </View>
        </View>
        
          </Card.Content>
        </Card>

        </ScrollView>
    </SafeAreaView>
  )
}

export default HaberDetay


const styles = StyleSheet.create({
  container:{
    paddingTop:StatusBar.currentHeight,
  },
  bilgi:{
    flexDirection:"column",
    marginTop:5,
    gap:10,
  }
})