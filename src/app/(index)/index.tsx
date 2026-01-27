import { ScrollView, Text } from "react-native";

export default function IndexRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        padding: 16,
        backgroundColor: "white",
      }}
    >
      <Text>Hello world</Text>
      <Text selectable style={{ marginTop: 16 }}>
        EXPO_PUBLIC_TEST: {process.env.EXPO_PUBLIC_TEST}
      </Text>
    </ScrollView>
  );
}
