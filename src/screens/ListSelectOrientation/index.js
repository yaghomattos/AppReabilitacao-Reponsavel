import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useParseQuery } from '@parse/react-native';
import Parse from 'parse/react-native.js';

import { Button } from '../../components/Button/index';

import { List, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const parseQuery = new Parse.Query('SelectOrientations');
parseQuery.descending('createdAt');

export const ListSelectOrientations = (props) => {
  const navigation = useNavigation();

  const patient = props.route.params;

  const [orientation, setOrientation] = useState('');

  useEffect(() => {
    async function Search() {
      var patientPointer = {
        __type: 'Pointer',
        className: 'Patient',
        objectId: patient,
      };

      parseQuery.equalTo('patient', patientPointer);
      const results = await parseQuery.find();

      setOrientation(results);
    }

    Search();
  }, []);

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
              style={styles.back}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.header_text}>{'Orientações selecionadas'}</Text>
          </View>
        </View>
        <View style={styles.backgroundList}>
          <View style={styles.viewList}>
            <FlatList
              data={orientation}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <Divider />}
              renderItem={({ item }) => (
                <List.Item
                  style={styles.item}
                  title={item.get('orientation').get('text')}
                  titleNumberOfLines={10}
                  titleStyle={styles.itemTitle}
                />
              )}
            />
          </View>
          <Button
            title="Selecionar Orientações"
            onPress="SelectOrientations"
            props={patient}
          />
        </View>
      </View>
    </>
  );
};
