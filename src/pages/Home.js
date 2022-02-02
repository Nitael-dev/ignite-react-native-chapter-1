import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,TouchableOpacity, FlatList,
} from "react-native";
import Button from "../components/Button";
import SkillCard from "../components/SkillCard";

export const Home = () => {
  const [newSkill, setNewSkill] = React.useState("");
  const [mySkill, setMySkill] = React.useState([]);

  const handleAddNewSkill = () => {
    setMySkill((old) => [...old, newSkill]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>aijsnasjidnasd</Text>
      <TextInput
        placeholder="New Skill"
        placeholderTextColor="#555"
        style={styles.input}
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill}/>
      <Text style={[styles.buttonText, { marginVertical: 40 }]}>My Skills</Text>

      <FlatList
        data={mySkill}
        keyExtractor={(item, key) => key}
        renderItem={({item}) => (
          <SkillCard skill={item}/>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70, 
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1E25",
    color: "#FFF",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 50,
    borderRadius: 7,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
