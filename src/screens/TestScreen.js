import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function TestScreen() {

    return (
        <View style={{flex: 1, backgroundColor: 'red'}}>
            <Text>TestScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})