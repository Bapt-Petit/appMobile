import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, } from 'react-native';
import ProductShow from './components/product';
import { styled } from 'nativewind';
// import DrawerNavigator from './components/burger';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native';
import Footer from './components/footer';
import Loading from './components/loading';


const StyledView = styled(View)
const StyledText = styled(Text)

const Drawer = createDrawerNavigator();

function LogoTitle(props: any) {
  return (
    <>
    {/* <Text style={styles.container} >E-Commernce</Text> */}
      <Image
        style={{ width: 50, height: 50, marginLeft: 240, }}
        source={require('./image/logo.png')}
      />
    </>
  );
}

const HomeScreen = ({ navigation }) => {
  return (

    <View>
      
      {/* <Button title="Settings" onPress={() => navigation.navigate("Settings")}></Button>   */}
      <ProductShow />
    </View>
  );
};

const SettingsScreen = ({ navigation }) => {
  return (
    <View>

      <Button title="Retour à l'accueil" onPress={() => navigation.navigate("Home")}></Button>
      {/* <Footer/> */}
      <Loading />
    </View>
  );
};

function App(): React.JSX.Element {

  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000000'
  },

  text: {
    fontFamily: 'Luciole-Regular',
    fontSize: 20,
  },

});

export default App;
