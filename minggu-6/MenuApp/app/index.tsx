import { View, Text, Image, ScrollView } from 'react-native';

import styles from "./styles";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.menuCard}>
        <Image source={require("./images/nasi-goreng.jpg")}
          style={styles.menuImage}
          resizeMode='cover' />
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            width: "100%"
          }}>
          <Text style={styles.namaMakanan}>Nasi Goreng</Text>
          <Text style={styles.menuDiscountedPrice}>Rp 20.000</Text>
        </View>
        <View style={{ width: "100%", justifyContent: "flex-end", paddingRight: 10, flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <Text style={[styles.menuOriginalPrice, {textAlign: "right"}]}>Rp 18.000</Text>
            <Text style={[styles.menuDiscount, {textAlign: "right"}]}>Diskon 10%</Text>
          </View>
        </View>
      </View>
      <View style={styles.menuCard}>
        <Image source={require("./images/nasi-goreng.jpg")}
          style={styles.menuImage}
          resizeMode='cover' />
        <Text style={styles.namaMakanan}>Nasi Goreng</Text>
        <Text style={styles.menuOriginalPrice}>Rp 20.000</Text>
        <Text style={styles.menuOriginalPrice}>Rp 18.000</Text>
        <Text style={styles.menuDiscount}>Diskon 10%</Text>
      </View>
      <View style={styles.menuCard}>
        <Image source={require("./images/nasi-goreng.jpg")}
          style={styles.menuImage}
          resizeMode='cover' />
        <Text style={styles.namaMakanan}>Nasi Goreng</Text>
        <Text style={styles.menuOriginalPrice}>Rp 20.000</Text>
        <Text style={styles.menuOriginalPrice}>Rp 18.000</Text>
        <Text style={styles.menuDiscount}>Diskon 10%</Text>
      </View>
      <View style={styles.menuCard}>
        <Image source={require("./images/nasi-goreng.jpg")}
          style={styles.menuImage}
          resizeMode='cover' />
        <Text style={styles.namaMakanan}>Nasi Goreng</Text>
        <Text style={styles.menuOriginalPrice}>Rp 20.000</Text>
        <Text style={styles.menuOriginalPrice}>Rp 18.000</Text>
        <Text style={styles.menuDiscount}>Diskon 10%</Text>
      </View>
      <View style={styles.menuCard}>
        <Image source={require("./images/nasi-goreng.jpg")}
          style={styles.menuImage}
          resizeMode='cover' />
        <Text style={styles.namaMakanan}>Nasi Goreng</Text>
        <Text style={styles.menuOriginalPrice}>Rp 20.000</Text>
        <Text style={styles.menuOriginalPrice}>Rp 18.000</Text>
        <Text style={styles.menuDiscount}>Diskon 10%</Text>
      </View>
      <View style={styles.menuCard}>
        <Image source={require("./images/nasi-goreng.jpg")}
          style={styles.menuImage}
          resizeMode='cover' />
        <Text style={styles.namaMakanan}>Nasi Goreng</Text>
        <Text style={styles.menuOriginalPrice}>Rp 20.000</Text>
        <Text style={styles.menuOriginalPrice}>Rp 18.000</Text>
        <Text style={styles.menuDiscount}>Diskon 10%</Text>
      </View>
    </ScrollView>
  )
}

