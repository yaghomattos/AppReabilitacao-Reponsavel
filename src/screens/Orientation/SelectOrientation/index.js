import { Ionicons } from '@expo/vector-icons';
import { useParseQuery } from '@parse/react-native';
import { useNavigation } from '@react-navigation/core';
import Parse from 'parse/react-native.js';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { createSelectOrientations } from '../../../components/CRUDs/SelectOrientation/index';
import styles from './styles';

const parseQuery = new Parse.Query('Orientation');
parseQuery.ascending('createdAt');

export const SelectOrientation = (props) => {
  const navigation = useNavigation();

  const [orientationId, setOrientationId] = useState('');

  const results = useParseQuery(parseQuery).results;
  Parse.User._clearCache();

  const testOrExerciseId = props.route.params[0];
  const className = props.route.params[1];

  async function SaveItemId(id) {
    setOrientationId(id);
  }

  async function HandleCreateSelectedOrientation() {
    var props = {
      testOrExerciseId: testOrExerciseId,
      orientationId: orientationId,
      className: className,
    };

    createSelectOrientations(props);
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
          <Text style={styles.header_text}>{'Selecionar Orientações'}</Text>
        </View>
      </View>
      <View style={styles.viewList}>
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
            <>
              <List.Item
                style={{
                  width: 350,
                  height: item.get('text').length,
                  marginBottom: 5,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#6f6f6f',
                }}
                title={item.get('text')}
                titleNumberOfLines={100}
                titleStyle={styles.itemTitle}
                onPress={() => SaveItemId(item.id)}
              />
            </>
          )}
        />
      </View>
      <View style={styles.extra}>
        <View>
          {!orientationId ? (
            <Text style={styles.warning}>{'Orientação não selecionada!'}</Text>
          ) : (
            <TouchableOpacity onPress={() => HandleCreateSelectedOrientation()}>
              <View style={styles.button}>
                <Text style={styles.text_label}>{'Confirmar'}</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
