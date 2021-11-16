import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

export function Button({ title, onPress, props }) {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigation.navigate(onPress, props)}>
        <View style={styles.button}>
          <Text style={styles.button_label}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
