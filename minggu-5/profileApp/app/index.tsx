import React from 'react';
import { View, Text, Image, Button, ScrollView } from 'react-native';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{
      flexGrow: 1,
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5'
    }}>
      {/* Profile Picture */}
      <Image
        source={require('./images/profile.jpg')}  // Adjust path as needed
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          marginBottom: 20
        }}
      />
      
      {/* Profile Information */}
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333'
      }}>John Doe</Text>
      <Text style={{
        fontSize: 16,
        color: '#666',
        marginVertical: 5
      }}>Software Developer</Text>
      <Text style={{
        fontSize: 16,
        color: '#666',
        marginVertical: 5
      }}>johndoe@example.com</Text>
      
      {/* About Section */}
      <View style={{
        width: '100%',
        marginTop: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333',
          marginBottom: 10
        }}>About Me</Text>
        <Text style={{
          fontSize: 16,
          color: '#666',
          lineHeight: 22
        }}>
          Passionate software developer with expertise in mobile and web development. Loves creating user-friendly applications and learning new technologies.
        </Text>
      </View>
      
      {/* Skills Section */}
      <View style={{
        width: '100%',
        marginTop: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333',
          marginBottom: 10
        }}>Skills</Text>
        <Text style={{
          fontSize: 16,
          color: '#666',
          lineHeight: 22
        }}>- JavaScript</Text>
        <Text style={{
          fontSize: 16,
          color: '#666',
          lineHeight: 22
        }}>- React & React Native</Text>
        <Text style={{
          fontSize: 16,
          color: '#666',
          lineHeight: 22
        }}>- HTML & CSS</Text>
        <Text style={{
          fontSize: 16,
          color: '#666',
          lineHeight: 22
        }}>- Node.js</Text>
        <Text style={{
          fontSize: 16,
          color: '#666',
          lineHeight: 22
        }}>- SQL & NoSQL Databases</Text>
      </View>

      {/* Work Experience Section */}
      <View style={{
        width: '100%',
        marginTop: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333',
          marginBottom: 10
        }}>Work Experience</Text>
        <View style={{ marginBottom: 15 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#333'
          }}>Senior Developer</Text>
          <Text style={{
            fontSize: 16,
            color: '#666',
            marginVertical: 2
          }}>Tech Solutions Inc.</Text>
          <Text style={{
            fontSize: 14,
            color: '#999'
          }}>Jan 2020 - Present</Text>
          <Text style={{
            fontSize: 16,
            color: '#666',
            lineHeight: 22,
            marginTop: 5
          }}>
            Leading the development team, managing project timelines, and implementing full-stack applications for various clients.
          </Text>
        </View>
        <View style={{ marginBottom: 15 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#333'
          }}>Junior Developer</Text>
          <Text style={{
            fontSize: 16,
            color: '#666',
            marginVertical: 2
          }}>WebWorks Studio</Text>
          <Text style={{
            fontSize: 14,
            color: '#999'
          }}>Aug 2018 - Dec 2019</Text>
          <Text style={{
            fontSize: 16,
            color: '#666',
            lineHeight: 22,
            marginTop: 5
          }}>
            Built responsive websites and web apps, collaborating with designers and backend developers to create seamless experiences.
          </Text>
        </View>
      </View>

      {/* Contact Section */}
      <View style={{
        width: '100%',
        marginTop: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333',
          marginBottom: 10
        }}>Contact Information</Text>
        <Text style={{
          fontSize: 16,
          color: '#666',
          lineHeight: 22
        }}>Phone: (123) 456-7890</Text>
        <Text style={{
          fontSize: 16,
          color: '#666',
          lineHeight: 22
        }}>Address: 123 Main St, Anytown, USA</Text>
      </View>
      
      {/* Edit Profile Button */}
      <View style={{
        marginTop: 30,
        width: '100%',
        borderRadius: 8,
        overflow: 'hidden'
      }}>
        <Button title="Edit Profile" onPress={() => alert('Edit Profile')} />
      </View>
    </ScrollView>
  );
};

