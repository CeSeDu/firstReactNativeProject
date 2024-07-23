import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './Card.style';

function Card(props) {
  return (
    <View style={styles.card_container}>
      <View style={styles.card_body}>
        <Text style={styles.card_title}>{props.title}</Text>
        <Text style={styles.card_text}>{props.text}</Text>
      </View>
      <TouchableOpacity 
        style={styles.card_button_container}
        onPress={()=> Alert.alert('Merhaba ' + props.title)}
      >
        <Text style={styles.card_button}>I Liked</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Card;
