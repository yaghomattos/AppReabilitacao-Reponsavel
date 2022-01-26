import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { List } from 'react-native-paper';
import { deleteParticipant } from '../../../components/CRUDs/Participant/index';
import HeaderHome from '../../../components/HeaderHome/index';
import { database } from '../../../services/firebase';
import styles from './styles';

export const ListParticipants = () => {
  const navigation = useNavigation();

  const [results, setResults] = useState([]);

  useEffect(() => {
    var li = [];
    database
      .ref('participant')
      .get()
      .then((snapshot) => {
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
  }, [results]);

  async function handleDelete(participant) {
    deleteParticipant(participant);
  }

  return (
    <View style={styles.container}>
      <HeaderHome title="Cadastro de participantes" />
      <View style={styles.viewList}>
        <FlatList
          numColumns={1}
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <List.Item
                style={styles.itemText}
                title={item.name}
                titleNumberOfLines={1}
                titleStyle={styles.itemTitle}
                onPress={() => navigation.navigate('ParticipantProfile', item)}
              />
              <Ionicons
                name="trash"
                size={24}
                style={styles.deleteButton}
                onPress={() => {
                  handleDelete(item.id);
                }}
              />
            </View>
          )}
        />
      </View>
      <View style={styles.add}>
        <Ionicons
          name="add-outline"
          size={38}
          color={'black'}
          onPress={() => {
            navigation.navigate('ParticipantRecord');
          }}
        />
      </View>
    </View>
  );
};
