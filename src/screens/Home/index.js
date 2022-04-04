import {
  Feather,
  Foundation,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Divider } from 'react-native-paper';
import { CurrentUser } from '../../components/CRUDs/User/index';
import { Logout } from '../../components/Logout/index';
import styles from './styles';

export function Home() {
  const navigation = useNavigation();

  const [id, setId] = useState('');
  const [username, setUsername] = useState('');

  CurrentUser().then((currentUser) => {
    setId(currentUser.id);
    setUsername(currentUser.username);
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="dark-content" backgroundColor="#76BCAA" />

        <View style={styles.header}>
          <Feather name="menu" size={24} color="#000" />
          <Text style={styles.app_name}>{'App Reabilitação'}</Text>
          <Feather name="menu" size={24} color="transparent" />
        </View>

        <View style={styles.welcome}>
          <Text style={styles.welcome_text}>
            {'Olá, '}
            <Text style={styles.welcome_text_bold}>{username}</Text>
          </Text>
        </View>
        <View style={styles.alignDivider}>
          <Divider style={styles.divider} />
        </View>
        <View style={styles.background}>
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.push('ListExercises')}>
              <View style={styles.button}>
                <MaterialIcons
                  name={'directions-walk'}
                  size={24}
                  color="black"
                />
                <Text style={styles.button_label}>{'Treinamento'}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.push('ListTests')}>
              <View style={styles.button}>
                <Foundation name={'clipboard-pencil'} size={24} color="black" />
                <Text style={styles.button_label}>{'Avaliação'}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.menu}>
            <TouchableOpacity
              onPress={() =>
                navigation.push('ListParticipantRoute', ['Chat', id])
              }
            >
              <View style={styles.button}>
                <Ionicons name="chatbox-outline" size={24} color="black" />
                <Text style={styles.button_label}>{'Chat'}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.push('ListParticipants')}
            >
              <View style={styles.button}>
                <Feather name="users" size={24} color="black" />
                <Text style={styles.button_label}>{'Participantes'}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.menu}>
            <TouchableOpacity
              onPress={() =>
                navigation.push('ListParticipantRoute', ['Educational', id])
              }
            >
              <View style={styles.button}>
                <Feather name="book-open" size={24} color="black" />
                <Text style={styles.button_label}>{'Educacional'}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.fake_button}></View>
            </TouchableOpacity>
          </View>
          <Logout />
        </View>
      </ScrollView>
    </View>
  );
}
