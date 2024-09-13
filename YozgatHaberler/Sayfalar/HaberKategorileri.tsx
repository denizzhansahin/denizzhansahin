import React from 'react'
import {  View } from 'react-native'
import HaberList from './HaberList'

import { StyleSheet, SafeAreaView, ScrollView, StatusBar, Pressable } from 'react-native'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HaberDetay from './HaberDetay';
import KategoriCard from '../Components/KategoriCard'



import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';


//Akdağmadeni, Aydıncık, Boğazlıyan, Çandır, Çayıralan, Çekerek, Kadışehri, Saraykent, Sarıkaya, Şefaatli, Sorgun, Yenifakılı, Yerköy ve Yozgat.
const Stack = createNativeStackNavigator();

function HaberKategoriIcerikleri({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.container2}>
      <View style={styles.view}>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Akdağmadeni'});}}><KategoriCard  renk={['#40E0D0', '#008080']} isim="Akdağmadeni" /></Pressable>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Aydıncık'});}}><KategoriCard  renk={['#40E0D0', '#008080']} isim="Aydıncık"  /></Pressable>
      </View>
      <View style={styles.view}>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Boğazlıyan'});}}><KategoriCard  renk={['#40E0D0', '#008080']} isim="Boğazlıyan" /></Pressable>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Çandır'});}}><KategoriCard  renk={['#40E0D0', '#008080']} isim="Çandır"  /></Pressable>
      </View>
      <View style={styles.view}>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Çayıralan'});}}><KategoriCard  renk={['#40E0D0', '#008080']} isim="Çayıralan" /></Pressable>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Çekerek'});}}><KategoriCard  renk={['#40E0D0', '#008080']} isim="Çekerek"  /></Pressable>
      </View>

      <View style={styles.view}>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Kadışehri'});}}><KategoriCard  renk={['#40E0D0', '#008080']} isim="Kadışehri" /></Pressable>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Merkez'});}}><KategoriCard  renk={['#40E0D0', '#008080']} isim="Merkez"  /></Pressable>
      </View>
      <View style={styles.view}>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Saraykent'});}}><KategoriCard  renk={['#40E0D0', '#008080']} isim="Saraykent" /></Pressable>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Sarıkaya'});}}><KategoriCard  renk={['#40E0D0', '#008080']} isim="Sarıkaya"  /></Pressable>
      </View>
      <View style={styles.view}>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Şefaatli'});}}><KategoriCard  renk={['#40E0D0', '#008080']} isim="Şefaatli" /></Pressable>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Sorgun'});}}><KategoriCard  renk={['#40E0D0', '#008080']} isim="Sorgun"  /></Pressable>
      </View>
      <View style={styles.view}>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Yenifakılı'});}}><KategoriCard  renk={['#40E0D0', '#008080']} isim="Yenifakılı" /></Pressable>
        <Pressable style={styles.press} onPress={() => {navigation.navigate('Haber Listesi', {haberBilgisi: 'Yerköy'});}}><KategoriCard  renk={['#40E0D0', '#008080']} isim="Yerköy"  /></Pressable>
      </View>



      </View>
      </ScrollView>

    </SafeAreaView>
  )
}

/*
      <Button
        title="Spor Haberleri"

        onPress={() => {navigation.navigate('HaberListParent', {haberBilgisi: 'Spor'});}}
      />
*/


function HaberKategorileri() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HaberKategorileri" component={HaberKategoriIcerikleri} />
        <Stack.Screen options={{headerShown:true}} name="Haber Listesi" component={DetailsScreen} />
        <Stack.Screen name="HaberList" component={HaberList} />
        <Stack.Screen options={{headerShown:true}} name="Haber Detayı" component={HaberDetay} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}



function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { haberBilgisi } = route.params;
  return (

    <HaberList kategori={JSON.stringify(haberBilgisi)} />

  );
}


export default HaberKategorileri


const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    width:"100%",

    //alignItems:"center"
    //justifyContent:"center",
  },
  container2:{
    borderColor:"red",
    //borderWidth:1,
    alignItems:"center"
    
  }
  ,
  view:{
    flexDirection:"row",
    height:"auto",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    borderColor:"green",
    //borderWidth:1,
  },
  press:{
  height:"auto",
  width:"100%",
  flex:10,
  margin:2,
  borderColor:"pink",
  //borderWidth:2,
  alignItems:"center"
  },
})