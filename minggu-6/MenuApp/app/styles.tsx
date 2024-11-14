import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
        padding: 10,
        // flexDirection: "row",
        // flexWrap: "wrap",
  },
    menuCard: {
        // width: "45%",
        // marginLeft: "2.5%",
    overflow: "hidden",
    backgroundColor: "#fff",
    paddingBottom: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd"
  },
  namaMakanan: {
    fontSize: 18,
    fontWeight: "bold",
  },
  menuOriginalPrice: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  menuDiscountedPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e74c3c"
  },
  menuDiscount: {
    color: "#27ae60",
    fontWeight: "bold",
    marginTop: 5
  },
  menuImage: {
    height: 150,
    marginBottom: 10
  }
});

export default styles;