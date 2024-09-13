import React from 'react'
import { View, ScrollView, Linking } from 'react-native'
import { Card, Text, Button } from 'react-native-paper'

function BizeUlasin() {
  return (
    <ScrollView>
      <View>
        <Card style={{ margin: 5 }}>
          <Card.Content>
            <Text variant='titleLarge' style={{ textAlign: "center" }}>Bize Ulaşın</Text>
            <Text variant='bodyLarge' style={{ textAlign: "center", marginTop: 5 }}>
              Merhaba, belirtmek istediğiniz görüş ve öneriler için, ayrıca şikayetleriniz için aşağıdaki iletişim adresleri üzerinden bizler ile iletişime geçebilirsiniz.
              Aşağıdaki yer alan internet sitemiz ve elektronik posta üzerinden bizler ile kolayca iletişime geçebilirsiniz.
            </Text>
          </Card.Content>
        </Card>
        <Card style={{ margin: 5 }}>
          <Card.Title title="İnternet Sitesi" subtitle="https://makinol.com.tr/"></Card.Title>
          <Card.Actions>
            <Button onPress={() => Linking.openURL('https://makinol.com.tr/')}>İnternet Sitesini Ziyaret Et</Button>
          </Card.Actions>
        </Card>
        <Card style={{ margin: 5 }}>
          <Card.Title title="İnternet Sitesi" subtitle="https://deniizhansahin.com/"></Card.Title>
          <Card.Actions>
            <Button onPress={() => Linking.openURL('https://deniizhansahin.com/')}>İnternet Sitesini Ziyaret Et</Button>
          </Card.Actions>
        </Card>
        <Card style={{ margin: 5 }}>
          <Card.Title title="Elektronik Posta Adresi" subtitle="makinol@gmail.com"></Card.Title>
          <Card.Actions>
            <Button onPress={() => Linking.openURL('mailto:makinol@gmail.com')}>E-Posta Gönder</Button>
          </Card.Actions>
        </Card>
        <Card style={{ margin: 5 }}>
          <Card.Title title="Elektronik Posta Adresi" subtitle="16008121013@ogr.bozok.edu.tr"></Card.Title>
          <Card.Actions>
            <Button onPress={() => Linking.openURL('mailto:16008121013@ogr.bozok.edu.tr')}>E-Posta Gönder</Button>
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  )
}

export default BizeUlasin

/*
            <Button style={{borderColor:"white",borderWidth:0,width:"100%",height:"auto"}}
             onPress={() => Linking.openURL('https://www.linkedin.com/in/denizzhan-sahin/')}>
                <Text variant='titleMedium' style={{ color: "white", fontSize: 25, fontWeight: "bold", textAlign:"center"}}>Bize Ulaşın</Text>
                
            </Button>
*/