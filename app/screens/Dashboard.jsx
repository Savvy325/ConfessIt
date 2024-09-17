import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Dashboard = ({ navigation }) => {
  const confessions = [
    { id: '1', text: 'Body text' },
    { id: '2', text: 'Body text' },
    { id: '3', text: 'Body text' },
  ];

  const renderConfession = ({ item }) => (
    <View style={styles.confessionCard}>
      <Text style={styles.confessionText}>{item.text}</Text>
      <TouchableOpacity style={styles.deleteIcon}>
        <Icon name="trash-outline" size={24} color="#FF24BD" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="person-outline" size={30} color="#fff" />
        </TouchableOpacity>

        <Image
          style={styles.logo}
          source={require('../../assets/images/logo2.png')}
        />

        <TouchableOpacity>
          <Icon name="add-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Today's Confessions</Text>

      
      <View style={styles.confessionsContainer}>
        <FlatList
          data={confessions}
          renderItem={renderConfession}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: -50,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 70,
    marginTop: -35,
  },
  title: {
    fontSize: 20,
    color: "#B8B8B8",
    textAlign: "center",
    textDecorationLine: "underline",
    fontWeight: "700",
    marginBottom: 20,
  },
  confessionsContainer: {
    backgroundColor: '#3C3C3C',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    flex: 1,
  },
  confessionCard: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 20,
    marginBottom: 50, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 175
  },
  confessionText: {
    color: '#FF24BD',
    fontSize: 16,
  },
  deleteIcon: {
    paddingHorizontal: 20,
    position: "absolute",
    right: -5,
    bottom: 140,
  },
});

export default Dashboard;