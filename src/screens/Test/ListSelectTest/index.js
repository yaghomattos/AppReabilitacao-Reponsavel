import { Ionicons } from '@expo/vector-icons';
import { useParseQuery } from '@parse/react-native';
import { useNavigation } from '@react-navigation/core';
import Parse from 'parse/react-native.js';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { Button } from '../../../components/Button/index';
import styles from './styles';

const parseQuery = new Parse.Query('SelectTests');
parseQuery.descending('createdAt');

export const ListSelectTest = (props) => {
  const navigation = useNavigation();

  const participant = props.route.params;

  const [test, setTest] = useState('');

  useEffect(() => {
    async function Search(participantId) {
      var participantPointer = {
        __type: 'Pointer',
        className: 'Participant',
        objectId: participantId,
      };

      parseQuery.equalTo('participant', participantPointer);
      const results = await parseQuery.find();

      setTest(results);
    }

    Search(participant);
  }, [test]);

  const results = useParseQuery(parseQuery).results;
  Parse.User._clearCache();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backView}>
            <Ionicons
              name="arrow-back"
              size={24}
              style={styles.icon}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.header_text}>{'Testes selecionados'}</Text>
            <Ionicons
              name="home"
              size={24}
              style={styles.icon}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
        <View style={styles.background}>
          <View style={styles.viewList}>
            <FlatList
              data={test}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <Divider />}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <List.Item
                    style={styles.item}
                    title={item.get('test').get('name')}
                    titleNumberOfLines={1}
                    titleStyle={styles.itemTitle}
                  />
                  <Ionicons
                    name="build"
                    size={24}
                    style={styles.icon}
                    onPress={() => {
                      navigation.navigate('TestSettings', item.get('test').id);
                    }}
                  />
                </View>
              )}
            />
          </View>
          <Button
            title="Selecionar Testes"
            onPress="SelectTests"
            props={participant}
          />
        </View>
      </View>
    </>
  );
};
