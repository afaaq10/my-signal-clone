
// React native blog page app.......................
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './blogComponents/Home';
// import Login from './blogComponents/Login';
// import Signup from './blogComponents/Signup';
// import BlogPage from './blogComponents/BlogPage';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import AddChat from './screens/AddChat';
import ChatScreen from './screens/ChatScreen';

const Stack = createNativeStackNavigator();

function App() {
  const globalScreenOptions = {
    headerTintColor: 'white',
    headerTitleStyle: { color: 'white' },
    headerStyle: { backgroundColor: 'black' }

  }




  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions} initialRouteName='Home'>
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="BlogPage" component={BlogPage} /> */}


        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="AddChat" component={AddChat} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;




// import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
// import React from 'react'
// import { Provider } from 'react-redux'
// import { store } from './store'
// import 'react-native-gesture-handler'
// import HomeScreen from './screens/HomeScreen'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import MapScreen from './screens/MapScreen'
// const App = () => {
//   const Stack = createStackNavigator();
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen}
//             options={{ headerShown: false }}
//           />


//           <Stack.Screen name="MapScreen" component={MapScreen}
//             options={{ headerShown: false }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>

//     </Provider>

//   )
// }

// export default App

// const styles = StyleSheet.create({
//   text: {
//     marginTop: 25
//   }

// })