import React, { useEffect, useState } from 'react'
import { FlatList, View, Text, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native'
import CardViewHaber from '../Components/Card';
import OnerilenCard from '../Components/OnerilenCard';


import firestore from "@react-native-firebase/firestore"


import { RootState, AppDispatch } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, VeriGetir2 } from '../redux/veriler'
import { Button } from 'react-native-paper';


interface Item {
  baslik: string;
  kategori: string;
  tarih: string;
  gorsel: string;
  metin: string;
  yayinci_yazar : string;
}




function HaberList({ navigation = null, kategori = null, onerilen = null }) {

  function filterByCategory(items: Item[], kategori: string): Item[] {
    return items.filter(item => item.kategori === kategori);
  }

  const yeniDeger: string = kategori.replace(/"/g, '')

  const dispatch: AppDispatch = useDispatch()
  const { veri, status, error } = useSelector((state: RootState) => state.counter)



  /*
  const [veri1, setVeri] = useState([])

  
  const VeriGetir = async()=>{
    const veriler = await firestore().collection("haberler").get()
    //console.log("veriler geldi")
    //console.log(veriler.docs)
    setVeri(
      veriler.docs.map((deniz)=>{
        return {...deniz.data()}
      })
    )

  }
  */



  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  useEffect(() => {
    if (veri.length == 0) {
      dispatch(VeriGetir2())
    } else {
      console.log("Veri var")
      //console.log(veri.map((doc)=>doc))
      //veri.map((doc)=>doc.kategori=="Spor"&& console.log(doc))
      //veri.map((doc)=>doc.kategori==kategori&& console.log(kategori))

      //console.log(kategori.length)
      //console.log(kategori)
      //console.log(yeniDeger.length)
      //console.log(yeniDeger)
      //const filteredItems = filterByCategory(veri, yeniDeger);
      //console.log(filteredItems);
      //console.log(veri[2]["baslik"])

      const bilgi = filterByCategory(veri, yeniDeger);
      setFilteredItems(bilgi);

    }
  }, [])

  console.log(filteredItems)



  /*
    veri.map((alt_ver) => {
      //console.log(alt_ver["baslik"])
    }
    )
  */





  return (
    <SafeAreaView style={styles.container}>
      {
        onerilen ? (
          <SafeAreaView>
            <FlatList
              data={filteredItems}
              renderItem={({ item }) => <OnerilenCard title={item.baslik} body={item.metin} image={item.gorsel} link={item} />}
              keyExtractor={item => item.baslik}
            />
          </SafeAreaView>
        ) : (
          yeniDeger == "tumHaberler" ? (
            <SafeAreaView>
              <FlatList
              data = { veri }
              renderItem = { ({ item }) => <CardViewHaber title = {item.baslik } body = {item.metin} image={item.gorsel} link={item} />}
              keyExtractor={item => item.baslik}
            />
            </SafeAreaView>
          ): (
            <SafeAreaView>




            <FlatList
              data = { filteredItems }
              renderItem = { ({ item }) => <CardViewHaber title = {item.baslik } body = {item.metin} image={item.gorsel} link={item} />}
              keyExtractor={item => item.baslik}
            />




    </SafeAreaView>
  )
        )
}
    </SafeAreaView >
  )
}

export default HaberList

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})


/*

(
          <SafeAreaView>




            <FlatList
              data={filteredItems}
              renderItem={({ item }) => <CardViewHaber title={item.baslik} body={item.metin} image={item.kategori} link={item} />}
              keyExtractor={item => item.baslik}
            />




          </SafeAreaView>
        )
*/

/*
  return (
    <View>
      {
        onerilen ? (
          <View>
            <Text>onerilen {onerilen}</Text>
            <CardViewHaber title={"onerilen"} body={"onerilen"} image={"onerilen"} link={"onerilen"}/>
          </View>
        ) : (
          <View>
          <Text>kategori {kategori}</Text>
          <CardViewHaber title={kategori} body={kategori} image={kategori} link={kategori}/>
        </View>
        )
      }
    </View>
  )
*/