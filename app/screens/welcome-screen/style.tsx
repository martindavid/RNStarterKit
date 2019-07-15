import { ViewStyle, ImageStyle, TextStyle } from "react-native";
import { color, spacing } from "app/theme";

export const TOP_VIEW: ViewStyle = {
  flex: 2,
  alignItems: "center",
  justifyContent: "center"
};

export const IMAGE: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing.large,
  maxWidth: "40%",
  flexShrink: 1,
  resizeMode: "contain"
};

export const BOTTOM_VIEW: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  flexGrow: 1,
  padding: spacing.huge,
  alignItems: "center",
  justifyContent: "center"
};

export const HEADER_TEXT: TextStyle = {
  marginVertical: spacing.medium
};

export const HELP_TEXT: TextStyle = {
  textAlign: "center"
};

export const BUTTON: ViewStyle = {
  width: "100%",
  marginVertical: spacing.medium
};

export const SIGN_UP_VIEW: ViewStyle = {
  flexDirection: "row",
  marginVertical: spacing.medium
};
