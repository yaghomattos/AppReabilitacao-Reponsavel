import { Ionicons } from '@expo/vector-icons';
import { useParseQuery } from '@parse/react-native';
import { useNavigation } from '@react-navigation/native';
import Parse from 'parse/react-native.js';
import React, { useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import styles from './styles';

const parseQuery = new Parse.Query('Participant');
parseQuery.ascending('name');

export const ListParticipantRoute = (props) => {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');

  const results = useParseQuery(parseQuery).results;

  Parse.User._clearCache();

  var route = props.route.params;
  var adminId = '';
  if (props.route.params[1].length > 1) {
    route = props.route.params[0];
    adminId = props.route.params[1];
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backView}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.back}
            onPress={() => navigation.goBack()}
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
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
            <List.Item
              style={styles.item}
              title={item.get('name')}
              titleNumberOfLines={1}
              titleStyle={styles.itemTitle}
              onPress={() => {
                switch (route) {
                  case 'Chat':
                    navigation.navigate('Chat', { item, adminId });
                    break;
                  case 'Monitoring':
                    navigation.navigate('Monitoring', { item, adminId });
                    break;
                  case 'Educational':
                    navigation.navigate('Educational', { item, adminId });
                    break;
                  case 'ListSelectTest':
                    navigation.navigate('ListSelectTest', item.id);
                    break;
                  case 'ListSelectExercises':
                    navigation.navigate('ListSelectExercises', item.id);
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
