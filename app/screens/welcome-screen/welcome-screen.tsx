import * as React from "react";
import { View, Image } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Screen } from "app/components";
import { Text, Button } from "react-native-elements";
import * as layoutStyle from "app/screens/style";
import * as style from "./style";

export interface WelcomeScreenProps extends NavigationScreenProps<{}> {}

export class WelcomeScreen extends React.Component<WelcomeScreenProps, {}> {
  onPressGo = () => this.props.navigation.navigate("SignInScreen");

  render() {
    return (
      <Screen style={layoutStyle.ROOT} preset="scroll">
        <View style={style.TOP_VIEW}>
          <Image
            source={require("app/images/starter-kit-logo.png")}
            style={style.IMAGE}
          />
        </View>
        <View style={style.BOTTOM_VIEW}>
          <Text h1 style={style.HEADER_TEXT}>
            Welcome
          </Text>
          <Text style={style.HELP_TEXT}>
            Welcome to the RNStarterKit App. Press sign in to continue.
          </Text>
          <Button
            onPress={this.onPressGo}
            title="Sign In"
            style={style.BUTTON}
          />
        </View>
      </Screen>
    );
  }
}
