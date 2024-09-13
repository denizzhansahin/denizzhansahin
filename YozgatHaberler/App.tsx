



import React, { useState } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HaberDetay from './Sayfalar/HaberDetay';
import BottomNavigationMenu from './Components/BottomNavigationMenu';

import { store } from './store'
import { Provider } from 'react-redux'
import BizeUlasin from './Sayfalar/BizeUlasin';
import Politika from './Sayfalar/Politika';


const Stack = createNativeStackNavigator();





function App(): React.JSX.Element {


  return (

    /*
        <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Anasayfa" component={BottomNavigationMenu} />
        <Stack.Screen options={{headerShown:true}} name="Haber Detayı" component={HaberDetay}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    */

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen options={{ headerShown: false }} name="Anasayfa" component={BottomNavigationMenu} />
          <Stack.Screen options={{ headerShown: true }} name="Haber Detayı" component={HaberDetay} />
          <Stack.Screen options={{ headerShown: true }} name="Bize Ulaşın" component={BizeUlasin} />
          <Stack.Screen options={{ headerShown: true }} name="Gizlilik Politikası ve Kullanım Koşulları" component={Politika} />


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>


  );
}

/*
    <SafeAreaView>
      <View>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </View>
    </SafeAreaView>
*/

export default App;
