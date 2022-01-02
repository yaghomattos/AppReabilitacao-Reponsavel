import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import { List } from 'react-native-paper';
import { database } from '../../../services/firebase';
import styles from './styles';

export const ListParticipants = () => {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    var li = [];
    database.ref('participant').on('value', (snapshot) => {
      snapshot.forEach((child) => {
        li.push({
          name: child.val().name,
          cpf: child.val().cpf,
          age: child.val().age,
          phone: child.val().phone,
          diagnosis: child.val().diagnosis,
          address: child.val().address,
          height: child.val().height,
          weight: child.val().weight,
          id: child.key,
        });
      });
      setResults(li);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backView}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.icon}
            onPress={() => navigation.goBack()}
          />
          <Ionicons
            name="home"
            size={24}
            style={styles.icon}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
        <TextInput
          style={styles.input}
          value={search}
          placeholder={'Pesquisar'}
          onChangeText={(text) => setSearch(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
      </View>
      <View style={styles.viewList}>
        <FlatList
          numColumns={1}
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <List.Item
              style={styles.item}
              title={item.name}
              titleNumberOfLines={1}
              titleStyle={styles.itemTitle}
              onPress={() => navigation.navigate('ParticipantProfile', item)}
            />
          )}
        />
      </View>
    </View>
  );
};
