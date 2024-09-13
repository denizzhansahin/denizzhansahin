import React from 'react'
import { Image, Pressable, ScrollView, View,Linking } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Button, Card, Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';


function UygulamaTanitim() {
    const navigation = useNavigation()
  return (
    <ScrollView>
            <View style={{ height: "auto", width: "auto", flex: 10, margin: 2 }}>
            <LinearGradient
                angle={200}
                colors={['#40E0D0', '#008080']}
                style={{ height: 450, width: "100%", flexDirection: "column", borderRadius: 10 }}
                useAngle={true}
            >
                <View style={{ height: "100%", width: "100%", flexDirection: "column" }}>

                    <View style={{ flex: 10, marginTop: 0, width: "100%", height: 450 }}>
                        <Image style={{ height: "100%", width: "100%", borderRadius: 10 }} source={require('../Components/logo1.png')} />
                    </View>

                    <View style={{ marginTop:10,flexDirection:"column",flex: 10, margin: 1, width: "100%", height: "auto" }}>
                        <Text variant='titleMedium' style={{ color: "white", fontSize: 20, fontWeight: "bold", textAlign:"center"}}>Yozgat Haberler Uygulaması</Text>
                        <Text variant='bodyLarge' style={{textAlign:"center",color: "white", fontSize: 15, fontWeight: "bold" }}>
                                Yozgat Haberler uygulaması ile birlikte istediğiniz kategorideki istediğiniz haberi hızlı ve kolayca okuyabileceksiniz. Yazar ekibimiz ile sizlerin okuması için
                                özgün ve kaliteli haber içerikleri üretmekteyiz.
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
        <View style={{ height: "auto", width: "auto", flex: 10, margin: 2 }}>
            <LinearGradient
                angle={200}
                colors={['#40E0D0', '#008080']}
                style={{ height: 100, width: "100%", justifyContent:"center",alignItems:"center", borderRadius: 10 }}
                useAngle={true}
            >
            <Button style={{borderColor:"white",borderWidth:0,width:"100%",height:"auto"}}
             onPress={() => navigation.navigate('Bize Ulaşın')}>
                <Text variant='titleMedium' style={{ color: "white", fontSize: 25, fontWeight: "bold", textAlign:"center"}}>Bize Ulaşın</Text>
                
            </Button>

            </LinearGradient>
        </View>
        <View style={{ height: "auto", width: "auto", flex: 10, margin: 2 }}>
            <LinearGradient
                angle={200}
                colors={['#40E0D0', '#008080']}
                style={{ height: 100, width: "100%", justifyContent:"center",alignItems:"center", borderRadius: 10 }}
                useAngle={true}
            >
            <Button style={{borderColor:"white",borderWidth:0,width:"100%",height:"auto"}}
             onPress={() => navigation.navigate('Gizlilik Politikası ve Kullanım Koşulları')}>
                <Text variant='titleMedium' style={{ color: "white", fontSize: 15, fontWeight: "bold", textAlign:"center"}}>Gizlilik Politikası ve Kullanım Koşulları</Text>
                
            </Button>

            </LinearGradient>
        </View>
    </ScrollView>
  )
}

export default UygulamaTanitim