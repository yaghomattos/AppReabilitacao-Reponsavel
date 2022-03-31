import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export const TabOrientation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.push('ListOrientations')}
      >
        <MaterialIcons name="playlist-add" size={24} color="black" />
        <Text style={styles.header_text}>{'Orientações'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() =>
          navigation.push('ListSelectOrientation', props.route.params)
        }
      >
        <Feather name="check-square" size={24} color="black" />
        <Text style={styles.header_text}>{'Orientações selecionadas'}</Text>
      </TouchableOpacity>
    </View>
  );
};
