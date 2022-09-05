import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import { List } from 'react-native-paper';
import { deleteParticipant } from '../../../components/CRUDs/Participant/index';
import { CurrentUser } from '../../../components/CRUDs/User';
import HeaderHome from '../../../components/HeaderHome/index';
import { database } from '../../../services/firebase';
import styles from './styles';

export const ListParticipants = () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState(null);
  const [results, setResults] = useState('');

  const [id, setId] = useState('');

  CurrentUser().then((currentUser) => {
    setId(currentUser.id);
  });

  useEffect(() => {
    var li = [];
    const onValueChange = database
      .ref('participant')
      .on('value', (snapshot) => {
        snapshot.forEach((child) => {
          if (child.val().user == id) {
            li.push({
              name: child.val().name,
              cpf: child.val().cpf,
              age: child.val().age,
              phone: child.val().phone,
              diagnosis: child.val().diagnosis,
              address: child.val().address,
              height: child.val().height,
              weight: child.val().weight,
              gender: child.val().gender,
              id: child.key,
            });
          }
        });
        if (searchText === '' || searchText == null) {
          setResults(li);
          setSearchText('');
        } else {
          setResults(
            li.filter((item) => {
              if (item.name.indexOf(searchText) > -1) return true;
              else return false;
            })
          );
        }
      });

    return () => database.ref('participant').off('value', onValueChange);
  }, [searchText]);

  async function handleDelete(participant) {
    deleteParticipant(participant);
  }

  return (
    <View style={styles.container}>
      <HeaderHome title="Participantes" />
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          value={searchText}
          placeholder={'Pesquisar'}
          onChangeText={(text) => setSearchText(text)}
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
            <View style={styles.item}>
              <List.Item
                style={styles.itemText}
                title={item.name}
                titleNumberOfLines={1}
                titleStyle={styles.itemTitle}
                onPress={() => navigation.navigate('ParticipantProfile', item)}
              />
              <Feather
                name="trash-2"
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
          size={24}
          color={'#fefefe'}
          onPress={() => {
            navigation.navigate('ParticipantRecord');
          }}
        />
      </View>
    </View>
  );
};
