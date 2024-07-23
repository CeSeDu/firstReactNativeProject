import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const sayHello = () => {
  console.log('Merhabalar!');
};

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Eddard Stark</Text>
          <Text style={styles.card_text}>Winter is Coming...</Text>
        </View>
        <TouchableOpacity style={styles.card_button_container}>
          <Text style={styles.card_button}>I Liked</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  card_container: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    marginTop:20,
  },
  card_body: {
    padding: 10,
  },
  card_title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 3,
  },
  card_text: {
    fontSize: 16,
    margin: 10,
  },
  card_button_container: {
    backgroundColor:'#00C2FF',
    padding:10,
    alignItems: 'center',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  card_button: {

    
  }
});
