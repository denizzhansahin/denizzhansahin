import React, { useState } from 'react';

import { BottomNavigation, Text } from 'react-native-paper';
import GenelHabeler from '../Sayfalar/GenelHabeler';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import HaberKategorileri from '../Sayfalar/HaberKategorileri';
import OnerilenHaberler from '../Sayfalar/OnerilenHaberler';
import UygulamaTanitim from '../Sayfalar/UygulamaTanitim';




function BottomNavigationMenu(): React.JSX.Element {

  const [index,setIndex] = useState(0)
  const [routes] = useState([
    {key:'genelHaber',title:'Anasayfa',focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    {key:'haberKategorileri',title:'Kategoriler',focusedIcon: 'newspaper-variant', unfocusedIcon: 'newspaper-variant-outline'},
    {key:'onerilen',title:'Önerilen',focusedIcon: 'star-four-points', unfocusedIcon: 'star-four-points-outline'},
    {key:'tanitim',title:'Hakkında',focusedIcon: 'information', unfocusedIcon: 'information-outline'},

  ])

  const renderScene = BottomNavigation.SceneMap({
    genelHaber: GenelHabeler,
    haberKategorileri: HaberKategorileri,
    onerilen: OnerilenHaberler,
    tanitim:UygulamaTanitim
  });

  return (

    <SafeAreaProvider>

      
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      

    </SafeAreaProvider>
  );
}

export default BottomNavigationMenu
