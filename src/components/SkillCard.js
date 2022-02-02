import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
    >
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
};

export default SkillCard;

const styles = StyleSheet.create({
  buttonSkill: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#1F1E26",
    alignItems: "center",
    marginVertical: 10,
  },
  textSkill: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});
