import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const Button = ({ onPress }) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={style.button}
    >
      <Text style={style.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

export default Button;


const style = StyleSheet.create({
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});