import { StyleSheet, Dimensions } from "react-native";

export const styleSignIn = StyleSheet.create({
  box: {
    margin: 1,
    height: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    textAlign: "center"
  },
  container: {
    flex: 1
  }, 
  error: {
    borderWidth: 3,
    borderColor: "red"
  }, 
  input: {
    height: 40,
    backgroundColor: "rgba(166, 194, 220, 0.5)",
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "gray"
  },
  logo: {
    width: 174,
    height: 174,
    padding: 5,
    margin: 2
  },
  logoCpntainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#000",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.9
  }
});
