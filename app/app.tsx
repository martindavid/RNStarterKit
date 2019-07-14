import * as React from "react"
import { AppRegistry } from "react-native"
import { elementsTheme } from "app/theme/element-theme"
import { ThemeProvider } from "react-native-elements"
import { RootNavigator } from "app/navigation"

export class App extends React.Component<{}> {
  render() {
    return (
      <ThemeProvider theme={elementsTheme}>
        <RootNavigator />
      </ThemeProvider>
    )
  }
}

const APP_NAME = "RNStarterKit"

AppRegistry.registerComponent(APP_NAME, () => App)
