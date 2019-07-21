import React, { Component } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput
} from "react-native";
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import { Ionicons } from "react-native-vector-icons";
import { Buffer } from "buffer";
import { CheckBox, Button } from "react-native-elements";



class SignInScreen extends Component {
  constructor() {
    super()
    this.state={
      checked: false,
      userName: '',
      userPassword: '',
      nameValidate: true,
      passwordValidate: true
    }
  }

  componentDidMount = () => AsyncStorage.getItem(userName).then((value)=>this.setState({userName: value}))

  storeData = async() => {
    try {
      await AsyncStorage.setItem(userName, value);
      this.setState({name:value})
    }
    catch (error) {

    }
  }

  render() {
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text> Вход в систему </Text>

        <View style={{marginTop: 25}}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(0,0,0, 0.6)"
            returnKeyType="next"
            onChangeText={(userName) => this.setState({userName})}
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={{borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, width: 250}}
          />
          <TextInput 
            placeholder="Password"
            placeholderTextColor = "rgba(0,0,0, 0.6)"
            onChangeText={(userPassword)=> this.setState({userPassword})}
            returnKeyType="go"
            secureTextEntry
            ref={(Input) => this.passwordInput = Input}
            style={{borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, marginTop: 15, width: 250}}
          />
          <CheckBox 
            title="Запомнить меня"
            checked={this.state.checked}
            onPress={() => this.setState({checked: !this.state.checked})}
          />
          <Button 
            title="Вход"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }  
}

class HomeScreen extends Component {
  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Приветствую.
        </Text>
      </View>
    );
  }
}

class RegistrationScreen extends Component {
  constructor() {
    super()
    this.state={
      userEmail: '',
      userPassword: '',
      userName: '',
      userLastName: '',
      userPhone: '',
      emailValidate: true,
      passwordValidate: true,
      nameValidate:true,
      lastNameValidate:true,
      phoneValidate: true,
      checked: false
    }
  };

  validate(text, type) {
    alph=/^[a-zA-Z@._-]+$/
    beth=/^[a-zA-Z0-9]+$/
    delt=/^[a-zA-Zа-яА-Я-]+$/
    num=/^[0-9+-]+$/

   if(type=='username'){
     if(alph.test(text)){
       this.setState({
         emailValidate: true
       })
     }
     else{
       this.setState({
         emailValidate: false
       })
     }
   }
   else if(type=='password'){
     if(beth.test(text)){
       this.setState({
         passwordValidate: true
       })
     }
     else{
       this.setState({
         passwordValidate: false
       })
     }
   }
   else if(type=='name'){
     if(delt.test(text)){
       this.setState({
         nameValidate: true
       })
     }
     else{
       this.setState({
         nameValidate: false
       })
     }
   }
   else if(type=='lastName'){
     if(delt.test(last_name)){
       this.setState({
         lastNameValidate: true
       })
     }
     else{
       this.setState({
         lastNameValidate: false
       })
     }
   }
   else if(type=='phone'){
     if(num.test(text)){
       this.setState({
         phoneValidate: true
       })
     }
     else{
       this.setState({
         phoneValidate: false
       })
     }
   }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text> Регистрация нового пользователя </Text>

        <View style={{marginTop: 25}}>
          <TextInput 
            placeholder="Фамилия"
            placeholderTextColor="rgba(0, 0, 0, 0.6)"
            returnKeyType="next"
            onSubmitEditing={() => this.nameInput.focus()}
            // onChangeText={(text) => this.validate(text, 'lastName')}
            onChangeText = {(userLastName) => this.setState({userLastName})}
            autoCapitalize="none"
            autoCorrect={false}
            style={{borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, width: 250}}
          />
            <TextInput 
              placeholder="Имя"
              placeholderTextColor="rgba(0, 0, 0, 0.6)"
              returnKeyType="next"
              onSubmitEditing={() => this.phoneInput.focus()}
              // onChangeText={(text) => this.validate(text, 'name')}
              onChangeText = {(userName) => this.setState({userName})}
              autoCapitalize="none"
              autoCorrect={false}
              ref={(input) => this.nameInput = input}
              style={{borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, marginTop: 15, width: 250}}
            />
          {/* <TextInput 
            placeholder="Телефон"
            placeholderTextColor="rgba(0, 0, 0, 0.6)"
            returnKeyType="next"
            onSubmitEditing={() => this.mailInput.focus()}
            // onChangeText={(text) => this.validate(text, 'phone')}
            onChangeText = {(userPhone) => this.setState({userPhone})}
            keyboardType="phone-pad"
            autoCapitalize="none"
            autoCorrect={false}
            ref={(input) => this.phoneInput = input}
            style={{borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, marginTop: 15, width: 250}}
          /> */}
            <TextInput 
              placeholder="Email"
              placeholderTextColor="rgba(0, 0, 0, 0.6)"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              // onChangeText={(text) => this.validate(text, 'username')}
              onChangeText = {(userEmail) => this.setState({userEmail})}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              ref={(input) => this.mailInput = input}
              style={{borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, marginTop: 15, width: 250}}
            />
          <TextInput 
            placeholder="Password"
            placeholderTextColor="rgba(0, 0, 0, 0.6)"
            // onChangeText={(text) => this.validate(text, 'password')}
            onChangeText = {(userPassword) => this.setState({userPassword})}
            returnKeyType="go"
            secureTextEntry
            ref={(input) => this.passwordInput = input}
            style={{borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, marginTop: 15, marginBottom: 15, width: 250}}
          />
            <Button 
              title="Вход"
              onPress={() => this.props.navigation.navigate('Home')}
              
            />
        </View>
      </View>
    )
  }
}


const SignInStack = createStackNavigator({
  SignIn: SignInScreen,
  Home: HomeScreen,
});

const RegistrationStack = createStackNavigator({
  Registration: RegistrationScreen,
  Home: HomeScreen,
});


const TabNavigator = createBottomTabNavigator(
  {
    SignIn: { screen: SignInStack},
    Registration: { screen: RegistrationStack },
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
        fontWeight: 'bold',        
      },
      activeTintColor: 'tomato',
      inactiveTintColor: 'blue',
    },
  }
);

export default createAppContainer (TabNavigator);
