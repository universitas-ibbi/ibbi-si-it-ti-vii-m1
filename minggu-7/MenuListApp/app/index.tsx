import { View, Text, Image, ScrollView } from 'react-native';

function App() {
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
        <View style={{ 
          paddingHorizontal: 10,
          alignItems: "center"
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
           }}>Nasi Goreng</Text>
        </View>
        <View style={{ 
          paddingHorizontal: 10,
          alignItems: "center"
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
           }}>Nasi Goreng</Text>
        </View>
        <View style={{ 
          paddingHorizontal: 10,
          alignItems: "center"
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
           }}>Nasi Goreng</Text>
        </View>
        <View style={{ 
          paddingHorizontal: 10,
          alignItems: "center"
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
           }}>Nasi Goreng</Text>
        </View>
      </ScrollView>

      <ScrollView>
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
              }}>Nasi Goreng</Text>
              <View>
                <Text style={{ 
                  textDecorationLine: "line-through",
                  fontSize: 16,
                  color: "#999"
                }}>Rp 20.000</Text>
                <Text style={{ 
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#e74c3c"
                }}>Rp 18.000</Text>
                <Text style={{ 
                  fontSize: 16,
                  color: "#27ae60",
                  fontWeight: "bold"
                }}>Diskon 10%</Text>
              </View>
            </View>
          </View>
        </View>
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
              }}>Nasi Goreng</Text>
              <View>
                <Text style={{ 
                  textDecorationLine: "line-through",
                  fontSize: 16,
                  color: "#999"
                }}>Rp 20.000</Text>
                <Text style={{ 
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#e74c3c"
                }}>Rp 18.000</Text>
                <Text style={{ 
                  fontSize: 16,
                  color: "#27ae60",
                  fontWeight: "bold"
                }}>Diskon 10%</Text>
              </View>
            </View>
          </View>
        </View>
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
              }}>Nasi Goreng</Text>
              <View>
                <Text style={{ 
                  textDecorationLine: "line-through",
                  fontSize: 16,
                  color: "#999"
                }}>Rp 20.000</Text>
                <Text style={{ 
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#e74c3c"
                }}>Rp 18.000</Text>
                <Text style={{ 
                  fontSize: 16,
                  color: "#27ae60",
                  fontWeight: "bold"
                }}>Diskon 10%</Text>
              </View>
            </View>
          </View>
        </View>
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
              }}>Nasi Goreng</Text>
              <View>
                <Text style={{ 
                  textDecorationLine: "line-through",
                  fontSize: 16,
                  color: "#999"
                }}>Rp 20.000</Text>
                <Text style={{ 
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#e74c3c"
                }}>Rp 18.000</Text>
                <Text style={{ 
                  fontSize: 16,
                  color: "#27ae60",
                  fontWeight: "bold"
                }}>Diskon 10%</Text>
              </View>
            </View>
          </View>
        </View>
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
              }}>Nasi Goreng</Text>
              <View>
                <Text style={{ 
                  textDecorationLine: "line-through",
                  fontSize: 16,
                  color: "#999"
                }}>Rp 20.000</Text>
                <Text style={{ 
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#e74c3c"
                }}>Rp 18.000</Text>
                <Text style={{ 
                  fontSize: 16,
                  color: "#27ae60",
                  fontWeight: "bold"
                }}>Diskon 10%</Text>
              </View>
            </View>
          </View>
        </View>
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
              }}>Nasi Goreng</Text>
              <View>
                <Text style={{ 
                  textDecorationLine: "line-through",
                  fontSize: 16,
                  color: "#999"
                }}>Rp 20.000</Text>
                <Text style={{ 
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#e74c3c"
                }}>Rp 18.000</Text>
                <Text style={{ 
                  fontSize: 16,
                  color: "#27ae60",
                  fontWeight: "bold"
                }}>Diskon 10%</Text>
              </View>
            </View>
          </View>
        </View>
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
              }}>Nasi Goreng</Text>
              <View>
                <Text style={{ 
                  textDecorationLine: "line-through",
                  fontSize: 16,
                  color: "#999"
                }}>Rp 20.000</Text>
                <Text style={{ 
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#e74c3c"
                }}>Rp 18.000</Text>
                <Text style={{ 
                  fontSize: 16,
                  color: "#27ae60",
                  fontWeight: "bold"
                }}>Diskon 10%</Text>
              </View>
            </View>
          </View>
        </View>
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
              }}>Nasi Goreng</Text>
              <View>
                <Text style={{ 
                  textDecorationLine: "line-through",
                  fontSize: 16,
                  color: "#999"
                }}>Rp 20.000</Text>
                <Text style={{ 
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#e74c3c"
                }}>Rp 18.000</Text>
                <Text style={{ 
                  fontSize: 16,
                  color: "#27ae60",
                  fontWeight: "bold"
                }}>Diskon 10%</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    
      
    </ScrollView>
  )
}

export default App;