import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Header = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.backView}>
        <Ionicons name="home" size={24} color="transparent" />
        <Text style={styles.header_text}>{title}</Text>
        <Ionicons
          name="home"
          size={24}
          style={styles.icon}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'Drawer',
                },
              ],
            })
          }
        />
      </View>
    </View>
  );
};

export default Header;
