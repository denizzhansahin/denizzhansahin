import React from 'react'
import { Card , Text} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, View, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';



function KategoriCard({ isim, gorsel, renk }) {
    return (
        <View>
                <LinearGradient
                    angle={200}
                    colors={renk}
                    style={{height:170,width:170, alignItems:"center", flexDirection:"column",  borderRadius:10}}
                    useAngle={true}
                >
                    <View style={{flex:20,marginTop:10}}>{gorsel?(gorsel):(<Image style={{height:100,width:100}} source={require('../Components/logo.png')}/>)}</View>
                    
                    <View style={{flex:7}}><Text variant='labelLarge' style={{color:"white",fontSize:20,fontWeight:"bold"}}>{isim}</Text></View>
                </LinearGradient>
                

            
        </View>
    )
}

export default KategoriCard
