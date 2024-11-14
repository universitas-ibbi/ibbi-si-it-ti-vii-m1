import { View, Text, Image, ScrollView } from 'react-native';

function App() {
  const menu = [
    {
      id: 1,
      nama: "Nasi Goreng",
      harga: 20000,
      diskon: 10,
    },
    {
      id: 2,
      nama: "Mie Sop",
      harga: 20000,
      diskon: 10
    },
    {
      id: 3,
      nama: "Basko Goreng",
      harga: 20000,
      diskon: 10
    },
    {
      id: 4,
      nama: "Nasi Goreng",
      harga: 20000,
      diskon: 10
    },
    {
      id: 5,
      nama: "Nasi Goreng",
      harga: 20000,
      diskon: 10
    },
    {
      id: 6,
      nama: "Nasi Goreng",
      harga: 20000,
      diskon: 10
    },
    {
      id: 7,
      nama: "Nasi Goreng",
      harga: 20000,
      diskon: 10
    },
    {
      id: 8,
      nama: "Nasi Goreng",
      harga: 20000,
      diskon: 10
    }
  ]

  return (
    <ScrollView contentContainerStyle={{ 
      flex: 1,
      backgroundColor: "#f8f8f8"
     }}>
      <Text style={{ 
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center"
      }}>Product List</Text>

      <ScrollView horizontal
        contentContainerStyle={{ 
         }}
        showsHorizontalScrollIndicator={false}>
        {menu.map((item) => {

          return (
            <View style={{ 
              paddingHorizontal: 10,
              alignItems: "center",
              height: 500,
            }}>
              <Image
                style={{ 
                  width: 100,
                  height: 100,
                  borderRadius: 10
                }}
                resizeMode="cover"
                source={require("./images/menu.webp")} />
              <Text style={{ 
                fontSize: 18,
                fontWeight: "bold",
              }}>{item.nama}</Text>
            </View>
          )
        })}

        
        
      </ScrollView>

      <ScrollView>
        {menu.map((item) => {
          return (
            <View style={{ 
              overflow: "hidden",
              backgroundColor: "#fff",
              borderRadius: 10,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: "#ddd",
              marginHorizontal: 10
              }}>
              <View style={{ 
                flexDirection: "row"
              }}>
                <Image
                  style={{ 
                    width: 100,
                    height: 100,
                    borderRadius: 10
                  }}
                  source={require("./images/menu.webp")} />
                <View style={{ 
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10
                }}>
                  <Text style={{ 
                    fontSize: 18,
                    fontWeight: "bold",
                  }}>{item.nama}</Text>
                  <View>
                    <Text style={{ 
                      textDecorationLine: "line-through",
                      fontSize: 16,
                      color: "#999"
                    }}>Rp {item.harga}</Text>
                    <Text style={{ 
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#e74c3c"
                    }}>Rp {item.harga * ( 1 - item.diskon/100)}</Text>
                    <Text style={{ 
                      fontSize: 16,
                      color: "#27ae60",
                      fontWeight: "bold"
                    }}>Diskon {item.diskon}%</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        )}
      </ScrollView>
    
      
    </ScrollView>
  )
}

export default App;