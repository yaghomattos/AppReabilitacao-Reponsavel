import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { List, Divider } from 'react-native-paper';
import { useParseQuery } from '@parse/react-native';

import Parse from 'parse/react-native.js';

import Styles from '../../components/Styles';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

const parseQuery = new Parse.Query('Patient');
parseQuery.ascending('name');

export const ListPatientChat = (props) => {
  const [search, setSearch] = useState('');

  const results = useParseQuery(parseQuery).results;

  const navigation = useNavigation();

  const admin = props.route.params;

  return (
    <>
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
          numColumns={2}
          data={results}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
            <List.Item
              style={styles.item}
              title={item.get('name')}
              titleNumberOfLines={1}
              titleStyle={styles.itemTitle}
              onPress={() => navigation.navigate('Chat', { item, admin })}
            />
          )}
        />
      </View>
    </>
  );
};