import {
  Feather,
  Foundation,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { CurrentUser } from '../../components/CRUDs/User/index';
import styles from './styles';

const CustomDrawer = () => {
  const navigation = useNavigation();

  const [id, setId] = useState('');

  CurrentUser().then((currentUser) => {
    setId(currentUser.id);
  });

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Drawer');
        }}
      >
        <View style={styles.button}>
          <Ionicons name="home" size={24} color="#000" />
          <Text style={styles.button_label}>{'Início'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListExercises')}>
        <View style={styles.button}>
          <MaterialIcons name="directions-walk" size={24} color="#000" />
          <Text style={styles.button_label}>{'Treinamento'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListTests')}>
        <View style={styles.button}>
          <Foundation name={'clipboard-pencil'} size={24} color="black" />
          <Text style={styles.button_label}>{'Avaliação'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListParticipants')}>
        <View style={styles.button}>
          <Feather name="users" size={24} color="black" />
          <Text style={styles.button_label}>{'Participantes'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ListParticipantRoute', ['Educational', id])
        }
      >
        <View style={styles.button}>
          <Feather name="book-open" size={24} color="black" />
          <Text style={styles.button_label}>{'Educacional'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ListParticipantRoute', ['Chat', id])
        }
      >
        <View style={styles.button}>
          <Ionicons name="chatbox-outline" size={24} color="black" />
          <Text style={styles.button_label}>{'Chat'}</Text>
        </View>
      </TouchableOpacity>

      <Divider style={styles.divider} />

      <TouchableOpacity onPress={{}}>
        <View style={styles.text}>
          <Text style={styles.text_label}>{'Termos de uso'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={{}}>
        <View style={styles.text}>
          <Text style={styles.text_label}>{'Política de privacidade'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
