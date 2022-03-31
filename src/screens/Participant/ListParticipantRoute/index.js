import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import { List } from 'react-native-paper';
import { CurrentUser } from '../../../components/CRUDs/User';
import HeaderHome from '../../../components/HeaderHome';
import { database } from '../../../services/firebase';
import styles from './styles';

export const ListParticipantRoute = (props) => {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [results, setResults] = useState('');

  const [id, setId] = useState('');

  CurrentUser().then((currentUser) => {
    setId(currentUser.id);
  });

  useEffect(() => {
    var li = [];
    database
      .ref('participant')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          // if (child.val().user == id) {
          li.push({
            key: child.val().cpf,
            name: child.val().name,
            id: child.key,
          });
          //}
        });
        setResults(li);
      });
  }, [results]);

  var route = props.route.params;
  var user = '';
  if (props.route.params.hasOwnProperty('route'))
    route = props.route.params.route;
  else if (props.route.params[1] != undefined) {
    route = props.route.params[0];
    user = props.route.params[1];
  }

  return (
    <View style={styles.container}>
      <HeaderHome title="Participantes" />
      <View style={styles.search}>
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
          keyExtractor={(item) => item.key.toString()}
          renderItem={({ item }) => (
            <List.Item
              style={styles.item}
              title={item.name}
              titleNumberOfLines={1}
              titleStyle={styles.itemTitle}
              onPress={() => {
                switch (route) {
                  case 'Chat':
                    navigation.navigate('Chat', { item, user });
                    break;
                  case 'TestMonitoring':
                    navigation.navigate('Monitoring', [item.id, 'test']);
                    break;
                  case 'ExerciseMonitoring':
                    navigation.navigate('Monitoring', [item.id, 'exercise']);
                    break;
                  case 'Educational':
                    navigation.navigate('Educational', { item, user });
                    break;
                  case 'ListSelectTest':
                    navigation.navigate('ListSelectTest', item.id);
                    break;
                  case 'ListSelectExercise':
                    navigation.navigate('ListSelectExercise', item.id);
                    break;
                  case 'ListSelectOrientations':
                    navigation.navigate('ListSelectOrientations', item.id);
                    break;
                }
              }}
            />
          )}
        />
      </View>
    </View>
  );
};
