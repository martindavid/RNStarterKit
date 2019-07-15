import * as React from "react";
import { View, Image } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Screen, Toast } from "app/components";
import { Button, Input, Header, Text } from "react-native-elements";
import { color } from "app/theme";
import * as layoutStyle from "app/screens/style";

export interface SignInScreenProps extends NavigationScreenProps<{}> {}

export class SignInScreen extends React.Component<SignInScreenProps, {}> {
  goBack = () => this.props.navigation.goBack(null);

  handlePressSignIn = () => {
    Toast("Welcome!");
    this.props.navigation.navigate("App");
  };

  // TODO: build forgot pwd screen
  handlePressForgotPwd = () => this.props.navigation.navigate("WelcomeScreen");

  render() {
    return (
      <Screen preset="fixed">
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "Sign In", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        <View style={layoutStyle.TOP_VIEW}>
          <Image
            source={require("app/images/starter-kit-logo.png")}
            style={layoutStyle.IMAGE}
          />
        </View>
        <View style={layoutStyle.BOTTOM_VIEW}>
          <Button
            icon={{
              name: "google",
              type: "font-awesome",
              color: color.palette.white
            }}
            title=" Sign in with Google"
          />
          <Input
            label="Email"
            placeholder="name@example.com"
            keyboardType="email-address"
            leftIcon={{ type: "font-awesome", name: "user" }}
            returnKeyType="next"
          />
          <Input
            label="Email"
            placeholder="name@example.com"
            keyboardType="default"
            leftIcon={{ type: "font-awesome", name: "lock" }}
            secureTextEntry
          />
          <Button onPress={this.handlePressSignIn} title="Sign In" />
        </View>
      </Screen>
    );
  }
}
