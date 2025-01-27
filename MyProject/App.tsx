import React from 'react'

import {
  View,
  Text,
  SafeAreaView,
  Image
} from 'react-native'

function App(){
  return(
    <SafeAreaView>
    <View>
      <Text>Hello World!</Text>
    </View>
    {/* <View>
      <Image source={require('./images/img.jpg')}/>
    </View> */}
  </SafeAreaView>
  )
}

export default App;