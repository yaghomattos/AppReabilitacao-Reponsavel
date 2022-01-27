import React, { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { createSelectTests } from '../../../components/CRUDs/SelectTest/index';
import Header from '../../../components/Header';
import { database } from '../../../services/firebase';
import styles from './styles';

export const SelectTest = (props) => {
  var participant = props.route.params;

  const [results, setResults] = useState('');

  useEffect(() => {
    var li = [];
    database
      .ref('test')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          li.push({
            name: child.val().name,
            description: child.val().description,
            video: child.val().video,
            preview: child.val().preview,
            id: child.key,
          });
        });
        setResults(li);
      });
  }, [results]);

  async function HandleCreateSelectedTest(item) {
    var property = {
      participant: participant,
      test: item.id,
      name: item.name,
      description: item.description,
      video: item.video,
      preview: item.preview,
    };

    createSelectTests(property);
  }

  return (
    <View style={styles.container}>
      <Header title="Selecionar Testes" />
      <View style={styles.viewList}>
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
            <List.Item
              style={{
                width: 350,
                height: item.description.lenght,
                marginBottom: 10,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#6f6f6f',
              }}
              title={item.name}
              description={item.description}
              titleNumberOfLines={1}
              titleStyle={styles.itemTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={100}
              onPress={() => HandleCreateSelectedTest(item)}
              left={() => (
                <Image
                  style={{ width: '20%', height: '100%', marginRight: 5 }}
                  source={{ uri: item.preview }}
                />
              )}
            />
          )}
        />
      </View>
    </View>
  );
};
