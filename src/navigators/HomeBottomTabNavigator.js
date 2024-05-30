import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';
import { FontAwesome5 } from '@expo/vector-icons'
import { Platform, View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function HomeBottomTabNavigator() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: '#ffffff',
          height: insets.bottom > 0 ? 74 : 56,
          alignItems: 'center',
        }
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center', top: insets.bottom > 0 ? 10 : 0}}>
              <FontAwesome5 name="home" size={20} color={focused ? 'red' : 'grey'}/>
              <Text style={{fontSize: 9, marginTop: 6, color: focused ? 'red' : 'grey'}}>Trang chủ</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="TestScreen" component={TestScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center', top: insets.bottom > 0 ? 10 : 0}}>
              <FontAwesome5 name="cog" size={20} color={focused ? 'red' : 'grey'}/>
              <Text style={{fontSize: 9, marginTop: 6, color: focused ? 'red' : 'grey'}}>Cài đặt</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5
  }
})