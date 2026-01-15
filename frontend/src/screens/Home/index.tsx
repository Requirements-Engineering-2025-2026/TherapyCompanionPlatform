import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header stays at the top because it's outside the ScrollView */}
      <Header />

      
         <View style={{ height: 1000, padding: 20 }}>
            {/* Example Content */}
         </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1, // Takes up the remaining space below the header
  },
});

export default Home;