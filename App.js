import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './components/Home/HomeScreen';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'


function DetailsScreen({route, navigation}) {
  const {itemId, test} = route.params;
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
      <Text>{itemId} + {test}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Details" component={DetailsScreen}/>
        </Stack.Navigator>
        
      </NavigationContainer>
    // </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(16,16,18,0.8)',
    marginTop: StatusBar.currentHeight,
  },
});
