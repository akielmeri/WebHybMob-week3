import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import { StyleSheet } from "react-native";

export default function CustomNavigationBar({
  navigation,
  route,
  options,
  back,
}) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header style={styles.header}>
      {back && (
        <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
      )}

      <Appbar.Content title={title} />

      {!back && route.name === "Home" && (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate("Second")}
        />
      )}
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgb(239,122,20)",
  },
});
