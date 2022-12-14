import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: "100%",
        paddingBottom: 10,
        paddingHorizontal: 10
    },
    header: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontWeight: "500",
    },
    input: {},
    buttonContainer: {
        marginTop: "auto",
    },
    icon: {
        marginLeft: "auto",
    },
    image: {
        width: "100%",
        aspectRatio: 4 / 3,
    },
  });