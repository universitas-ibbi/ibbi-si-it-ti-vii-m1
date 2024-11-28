import {
  View,
  Text,
  ScrollView,
  Image
} from 'react-native'


export default function App() {
  return (
    <ScrollView>
      <Text style={{ 
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center"
      }}>NewsApp</Text>
      <ScrollView horizontal
        style={{ 
          marginBottom: 10,
          marginLeft: 10,
          height: 250
         }}
        >
        <Image source={
          require("./images/berita.jpg")
        } style={{
          width: 300,
          height: 250,
          marginRight: 10,
          borderRadius: 10
        }} />
        <Image source={
          require("./images/berita.jpg")
        } style={{
          width: 300,
          height: 250,
          marginRight: 10,
          borderRadius: 10
        }} />
        <Image source={
          require("./images/berita.jpg")
        } style={{
          width: 300,
          height: 250,
          marginRight: 10,
          borderRadius: 10
        }} />
      </ScrollView>

      <View style={{ 
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10
       }}>
        <Text style={{ 
          backgroundColor: "blue",
          padding: 10,
          width: 100,
          color: "white",
          borderRadius: 5,
          textAlign: "center"
         }}>Previous</Text>
        <Text style={{ 
          backgroundColor: "blue",
          padding: 10,
          width: 100,
          color: "white",
          borderRadius: 5,
          textAlign: "center"
         }}>Next</Text>
      </View>

      {/* View container berita */}
      <View style={{ 
        paddingHorizontal: 10
       }}>
        {/* View Berita */}
        <View style={{ 
          marginBottom: 10,
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: "#fff",
          elevation: 3
         }}> 
          <Image
            style={{ 
              width: "100%",
              height: 150
             }}
            source={require("./images/berita.jpg")} />
          <Text style={{ 
            padding: 10,
            fontSize: 16,
            fontWeight: "bold"
           }}>Judul Berita</Text>
          <Text
            style={{ 
              paddingHorizontal: 10,
              paddingBottom: 10,
              fontSize: 14,
              color: "#666"
             }}
           >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quod, recusandae earum fugit velit voluptatem quo animi at corrupti quae nesciunt eum non culpa, dolorem provident possimus id ipsum eaque.</Text>
        </View>
        <View style={{ 
          marginBottom: 10,
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: "#fff",
          elevation: 3
         }}> 
          <Image
            style={{ 
              width: "100%",
              height: 150
             }}
            source={require("./images/berita.jpg")} />
          <Text style={{ 
            padding: 10,
            fontSize: 16,
            fontWeight: "bold"
           }}>Judul Berita</Text>
          <Text
            style={{ 
              paddingHorizontal: 10,
              paddingBottom: 10,
              fontSize: 14,
              color: "#666"
             }}
           >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quod, recusandae earum fugit velit voluptatem quo animi at corrupti quae nesciunt eum non culpa, dolorem provident possimus id ipsum eaque.</Text>
        </View>
        <View style={{ 
          marginBottom: 10,
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: "#fff",
          elevation: 3
         }}> 
          <Image
            style={{ 
              width: "100%",
              height: 150
             }}
            source={require("./images/berita.jpg")} />
          <Text style={{ 
            padding: 10,
            fontSize: 16,
            fontWeight: "bold"
           }}>Judul Berita</Text>
          <Text
            style={{ 
              paddingHorizontal: 10,
              paddingBottom: 10,
              fontSize: 14,
              color: "#666"
             }}
           >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quod, recusandae earum fugit velit voluptatem quo animi at corrupti quae nesciunt eum non culpa, dolorem provident possimus id ipsum eaque.</Text>
        </View>
        <View style={{ 
          marginBottom: 10,
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: "#fff",
          elevation: 3
         }}> 
          <Image
            style={{ 
              width: "100%",
              height: 150
             }}
            source={require("./images/berita.jpg")} />
          <Text style={{ 
            padding: 10,
            fontSize: 16,
            fontWeight: "bold"
           }}>Judul Berita</Text>
          <Text
            style={{ 
              paddingHorizontal: 10,
              paddingBottom: 10,
              fontSize: 14,
              color: "#666"
             }}
           >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quod, recusandae earum fugit velit voluptatem quo animi at corrupti quae nesciunt eum non culpa, dolorem provident possimus id ipsum eaque.</Text>
        </View>
        <View style={{ 
          marginBottom: 10,
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: "#fff",
          elevation: 3
         }}> 
          <Image
            style={{ 
              width: "100%",
              height: 150
             }}
            source={require("./images/berita.jpg")} />
          <Text style={{ 
            padding: 10,
            fontSize: 16,
            fontWeight: "bold"
           }}>Judul Berita</Text>
          <Text
            style={{ 
              paddingHorizontal: 10,
              paddingBottom: 10,
              fontSize: 14,
              color: "#666"
             }}
           >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quod, recusandae earum fugit velit voluptatem quo animi at corrupti quae nesciunt eum non culpa, dolorem provident possimus id ipsum eaque.</Text>
        </View>
      </View>
    </ScrollView>
  )
}