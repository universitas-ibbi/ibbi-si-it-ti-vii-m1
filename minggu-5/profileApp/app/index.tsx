import { Text, View, Image } from "react-native";

export default function Index(){
  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      padding: 20
    }}>
      <Image source={require("./images/profile.jpg")} 
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          marginBottom: 20
        }}
        />
      <Text style={{
        fontSize: 30,
        fontWeight: "bold",
      }}>Jhon Doe</Text>

      <Text style={{
        fontSize: 16,
        color: "#666",
        marginVertical: 5
      }}>Mahasiswa</Text>

      <Text style={{
        fontSize: 16,
        color: "#666",
        marginVertical: 5
      }}>jhondoe@email.com</Text>

      <View style={{
        width: "100%",
        marginTop: 20,
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 8
      }}>
        <Text style={{ 
          fontSize: 18, 
          fontWeight: "bold", 
          marginBottom: 20}}>About Me</Text>
        <Text style={{
          fontSize: 16,
          color: "#666",
          lineHeight: 22
        }}>
          Seorang Mahasiswa baik hati dan suka menabung
        </Text>
      </View>
    </View>
  )
}