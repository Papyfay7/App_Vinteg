import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userInfoContainer}>
        <Image source={require('../assets/produit3.jpg')} style={styles.profilePic} />
        <View style={styles.userDetails}>
          <Text style={styles.username}>JohnDoe123</Text>
          <View style={styles.viewProfileContainer}>
            <Text style={styles.viewProfileText}>Voir profile</Text>
            <MaterialIcons name="arrow-forward" size={24} color="#333" style={styles.arrowIcon} />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.userInfo}>
        <Text style={styles.userInfoText}>Email: johndoe@example.com</Text>
        <Text style={styles.userInfoText}>Member since: January 2022</Text>
      </View>
      {/* Section "Mes articles" */}
      {/* Section "Mes favoris" */}
      {/* Section "Mes achats" */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
 profilePic: {
    width: 70,
    height: 70,
    borderRadius: 60,
    marginRight: 20,
  },
  userDetails: {
    flex: 1,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  viewProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewProfileText: {
    fontSize: 16,
    color: '#333',
    marginRight: 5,
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  userInfoText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  }
});

export default ProfileScreen;
