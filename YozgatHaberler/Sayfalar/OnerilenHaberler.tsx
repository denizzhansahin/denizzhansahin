import React from 'react'
import HaberList from './HaberList'

import { SafeAreaView} from 'react-native'


function OnerilenHaberler() {
  return (
    <SafeAreaView>
      <HaberList kategori="Önerilen" onerilen={true}/>
    </SafeAreaView>
    
)
}

export default OnerilenHaberler