import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { List } from 'react-native-paper';
import { deleteOrientation } from '../../../components/CRUDs/Orientation/index';
import Header from '../../../components/Header';
import { database } from '../../../services/firebase';
import styles from './styles';

export const ListOrientations = (props) => {
  const navigation = useNavigation();

  const [result, setResult] = useState('');

  useEffect(() => {
    var li = [];

    database
      .ref('orientation')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          li.push({
            text: child.val().text,
            id: child.key,
          });
        });
        setResult(li);
      });
  }, [result]);

  async function handleDelete(object_id) {
    deleteOrientation(object_id);
  }

  return (
    <View style={styles.container}>
      <Header title="Orientações" />
      <View style={styles.background}>
        <View style={styles.viewList}>
          <FlatList
            data={result}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <List.Item
                  style={styles.item}
                  title={item.text}
                  titleNumberOfLines={100}
                  titleStyle={styles.itemTitle}
                />
                <Feather
                  name="trash-2"
                  size={24}
                  style={styles.button}
                  onPress={() => {
                    handleDelete(item.id);
                  }}
                />
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.tab}>
          <MaterialIcons name="playlist-add" size={24} color="#fefefe" />
          <Text style={styles.tab_text_inative}>{'Orientações'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() =>
            navigation.push('ListSelectOrientation', props.route.params)
          }
        >
          <Feather name="check-square" size={24} color="black" />
          <Text style={styles.tab_text}>{'Orientações selecionadas'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.add}>
        <Ionicons
          name="add-outline"
          size={24}
          color={'#fefefe'}
          onPress={() => {
            navigation.navigate('NewOrientation');
          }}
        />
      </View>
    </View>
  );
};
