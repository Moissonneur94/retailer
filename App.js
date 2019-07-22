/* eslint-disable quotes */
import React, { Component } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  View,
  StatusBar,
  ScrollView,
  SelectionList,
  Text
} from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import { Ionicons } from "react-native-vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { Buffer } from "buffer";
import { CheckBox, Button, Input } from "react-native-elements";

class SignInScreen extends Component {
  static navigationOptions = {
    title: "Профиль"
  };

  render() {
    return (
      <ScrollView>
        <View>
          <Input label="Ваше имя" placeholder="Введите имя" />
          <Input label="Ваша фамилия" placeholder="Введите фамилию" />
          <Input label="Дата рождения" placeholder="Basic input" />
          <Input label="Телефон для связи" placeholder="Введите телефон" />
          <Input label="Эл. почта" placeholder="Введите email" />
        </View>
        <View>
          <Button title="SignIn" onPress={this._signInAsync} />
        </View>
      </ScrollView>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("App");
  };
}

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Главная страница"
  };

  render() {
    return (
      <View>
        <SelectionList
          renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
          renderSectionHeader = {({section: {title}}) => (
            <Text style={{fontWeight: 'bold'}}>{title}</Text>
          )}

          section={[
            {title: 'Не выбрано', data:['item1', 'item2']}
            {title: 'Жен.', data:['item3', 'item4']}
            {title: 'Муж.', data:['item5', 'item6']}
          ]}
          keyExtractor = {(item, index) => item+index}
        />

        <Button title="ECHO" onPress={this._showMoreApp}/>
        <Button title="SignOut" onPress={this._signOutAsync}/>
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate("Other");
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
}

class OtherScreen extends Component {
  static navigationOptions = {
    title: "Lots of features here"
  };

  render() {
    return (
      <View >
        <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
}

class AurhLoadingScreen extends Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AurhLoading: AurhLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AurhLoading"
    }
  )
);
