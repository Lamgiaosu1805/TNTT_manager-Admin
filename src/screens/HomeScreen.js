import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <TouchableOpacity onPress={() => navigation.navigate('TestScreen')}>
        <Text>ADSD</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})