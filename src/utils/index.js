import { Alert } from "react-native"

const apiDev = "http://192.168.1.6:3002/api/v1"
const apiServer = "http://14.224.135.196:3002/api/v1"

export default Utils = {
    apiUrl: apiDev,

    showAlert: (title, content) => {
        Alert.alert(title, content)
    }
}