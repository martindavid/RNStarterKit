import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { color, spacing } from "app/theme";

export const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1
};

export const HEADER: TextStyle = {
  alignSelf: "center"
};

export const TOP_VIEW: ViewStyle = {
  flex: 1,
  flexShrink: 1
};

export const BOTTOM_VIEW: ViewStyle = {
  flex: 1,
  padding: spacing.large,
  justifyContent: "center"
};

export const BUTTON: ViewStyle = {
  width: "100%",
  marginVertical: spacing.medium
};

export const IMAGE: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing.mediumPlus,
  maxWidth: "40%",
  flexShrink: 1,
  resizeMode: "contain"
};
