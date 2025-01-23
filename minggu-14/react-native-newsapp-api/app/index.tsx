import { View, StyleSheet } from 'react-native';
import NewsList from './components/NewsList';

const App = () => {
  return (
    <View style={styles.container}>
      <NewsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;