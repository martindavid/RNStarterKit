import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import { AppNavigator } from "./app-navigator";
import { WelcomeScreen } from "app/screens/welcome-screen";
import { SignInScreen } from "app/screens/sign-in-screen";

const WelcomeStack = createStackNavigator(
  {
    WelcomeScreen,
    SignInScreen
  },
  {
    initialRouteName: "WelcomeScreen",
    headerMode: "none"
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Welcome: WelcomeStack,
    App: AppNavigator
  },
  {
    initialRouteName: "App"
  }
);

export const RootNavigator = createAppContainer(SwitchNavigator);
