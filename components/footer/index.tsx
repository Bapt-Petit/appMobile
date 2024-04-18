import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.linkGroup}>
        <TouchableOpacity onPress={() => { /* Votre logique de navigation ici */ }}>
          <Text style={styles.link}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Votre logique de navigation ici */ }}>
          <Text style={styles.link}>Catégories</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Votre logique de navigation ici */ }}>
          <Text style={styles.link}>Tendances</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.linkGroup}>
        <TouchableOpacity onPress={() => { /* Votre logique de navigation ici */ }}>
          <Text style={styles.link}>Qui sommes-nous ?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Votre logique de navigation ici */ }}>
          <Text style={styles.link}>Contactez-nous</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.linkGroup}>
        <TouchableOpacity onPress={() => { /* Votre logique de navigation ici */ }}>
          <Text style={styles.link}>Mentions Légales</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Votre logique de navigation ici */ }}>
          <Text style={styles.link}>CGV</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Votre logique de navigation ici */ }}>
          <Text style={styles.link}>© Copyright</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  footer: {
    fontFamily: 'Luciole_Regular',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    color: '#000',
   
  },
  linkGroup: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 0,
  
  },
  link: {
    marginTop: 10,
    textDecorationLine: 'underline',
    color: '#000',
  },
  divider: {
    backgroundColor: '#FFD700',
    width: 365,
    height: 6,
    marginTop: 15,
    marginBottom: 20,
    borderRadius: 100,
  },
});

export default Footer;
