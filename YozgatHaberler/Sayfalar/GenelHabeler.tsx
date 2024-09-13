import React from 'react'
import { SafeAreaView, } from 'react-native'
import { Text } from 'react-native-paper'
import HaberList from './HaberList'


function GenelHabeler() {
  return (
    <SafeAreaView>
        <HaberList kategori='tumHaberler'/>
    </SafeAreaView>
  )
}

export default GenelHabeler

