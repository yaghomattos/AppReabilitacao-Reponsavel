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

export const ListParticipants = () => {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');

  const results = useParseQuery(parseQuery).results;

  Parse.User._clearCache();

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
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
            <List.Item
              style={styles.item}
              title={item.get('name')}
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
