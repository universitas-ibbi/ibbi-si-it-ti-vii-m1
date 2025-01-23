import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

import NewsData from "../NewsData";

import { Link, useNavigation } from 'expo-router';

import axios from 'axios';

const NewsList = () => {
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: "News App" });
  }, [navigation]);

  useEffect(() => {
    const fetchNews = async () => {
      // const newsArticles = NewsData().articles;
      const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
        params: {
          country: 'us',
          apiKey: '08548bde1d0e44d58d87aca53a4b45f9',
        },
      });
      setArticles(response.data.articles);
      // setArticles(newsArticles);
    };

    fetchNews();
  }, []);

  const renderItem = ({ item }) => (
    <Link href={{ 
      pathname: '/NewsDetail', 
      params: { article: JSON.stringify(item) }
     }}>
      <View style={styles.articleContainer}>
        {item.urlToImage && <Image source={{ uri: item.urlToImage }} style={styles.image} />}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </Link>
  );

  return (
    <FlatList
      data={articles}
      renderItem={renderItem}
      keyExtractor={(item) => item.url}
    />
  );
};

const styles = StyleSheet.create({
  articleContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});

export default NewsList;