import {useState} from 'react';
import { Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, View, Image, Pressable } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

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

function OnerilenCard({ title, body, image, link }) {
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
        <View style={{ height: "auto", width: "auto", flex: 10, margin: 2 }}>
            <LinearGradient
                angle={200}
                colors={['#40E0D0', '#008080']}
                style={{ height: 200, width: "100%", alignItems: "center", justifyContent: "center", flexDirection: "column", borderRadius: 10 }}
                useAngle={true}
            >
                <Pressable style={{ height: "100%", width: "100%", flexDirection: "row" }}  onPress={() => navigation.navigate('Haber Detayı', { haber: link })}>

                    <View style={{ flex: 10, marginTop: 0, width: "100%", height: "100%" }}>
                        <Image style={{ height: "100%", width: "100%", borderRadius: 10 }} source={{uri:gorselUri}} />
                    </View>

                    <View style={{ flexDirection:"column",flex: 10, margin: 10, width: "100%", height: "100%" }}>
                        <Text variant='titleMedium' style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>{title}</Text>
                        <Text variant='bodyLarge' style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>{body}</Text>
                    </View>
                </Pressable>
            </LinearGradient>
        </View>
    )
}

export default OnerilenCard