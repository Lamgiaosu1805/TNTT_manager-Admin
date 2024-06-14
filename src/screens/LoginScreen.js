import { Dimensions, Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import utils from '../utils'

export default function LoginScreen({navigation}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        if(username == "" || password == "") {
            alert("Tên đăng nhập hoặc mật khẩu không được bỏ trống")
            return
        }
        try {
            const response = await axios.post(`${utils.apiUrl}/auth/signIn`, {
                username, password
            })
            const data = response.data
            if(data.status == true) {
                if(data.result.isResetPassword == true) {
                    navigation.navigate('ChangeFirstPassScreen', {oldPassword: password, accessToken: data.result.accessToken})
                }
                else {
                    navigation.replace('HomeBottomTabNavigator')
                }
            }
            else {
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                     <View style={{alignItems: 'center', marginBottom: 40}}>
                        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/TNTT.png/800px-TNTT.png'}} style={{width: 60, height: 60, marginBottom: 12}}/>
                        <Text style={{fontSize: 16, fontWeight: '500'}}>THIẾU NHI THÁNH THỂ VIỆT NAM</Text>
                    </View>

                    <View style={{width: Dimensions.get('window').width * 0.8}}>
                        <Text style={{fontSize: 16, marginBottom: 12, fontWeight: '500'}}>Tên đăng nhập</Text>
                        <TextInput 
                            style={{
                                backgroundColor: 'white', paddingHorizontal: 12, borderRadius: 30, height: 52, fontSize: 16,  shadowOffset: { width: 1, height: 1 },
                                shadowColor: 'grey',
                                shadowOpacity: 0.25,
                                elevation: 10,
                                color: 'grey',
                            }} 
                            autoCapitalize='none'
                            onChangeText={(value) => setUsername(value)}
                        />
                        <Text style={{fontSize: 16, marginBottom: 12, marginTop: 20, fontWeight: '500'}}>Mật khẩu</Text>
                        <View>
                            <TextInput
                                style={{
                                    backgroundColor: 'white', paddingHorizontal: 12, borderRadius: 30, height: 52, fontSize: 16,  shadowOffset: { width: 1, height: 1 },
                                    shadowColor: 'grey',
                                    shadowOpacity: 0.25,
                                    elevation: 6,
                                    color: 'grey'
                                }} 
                                autoCapitalize='none'
                                secureTextEntry={true}
                                onChangeText={(value) => setPassword(value)}
                            />
                        </View>
                    </View>

                    <TouchableOpacity 
                        style={{marginTop: 32, paddingHorizontal: 32, paddingVertical: 12, backgroundColor: 'red', borderRadius: 40}} 
                        activeOpacity={0.6}
                        onPress={handleLogin}
                    >
                        <Text style={{color: 'yellow', fontSize: 16, fontWeight: '600'}}>
                            Đăng nhập
                        </Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>  
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    }
})