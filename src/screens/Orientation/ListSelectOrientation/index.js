import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { List } from 'react-native-paper';
import { deleteSelectOrientations } from '../../../components/CRUDs/SelectOrientation/index';
import Header from '../../../components/Header';
import { database } from '../../../services/firebase';
import styles from './styles';

export const ListSelectOrientation = (props) => {
  const navigation = useNavigation();

  const testOrExercise = props.route.params.className;
  const id = props.route.params.id;

  const [orientation, setOrientation] = useState('');

  useEffect(() => {
    var li = [];
    if (testOrExercise == 'test') {
      database
        .ref('selectOrientation')
        .get()
        .then((snapshot) => {
          snapshot.forEach((child) => {
            if (child.val().test == id) {
              li.push({
                orientation: child.val().orientation,
                id: child.key,
              });
            }
          });
          setOrientation(li);
        });
    } else {
      database
        .ref('selectOrientation')
        .get()
        .then((snapshot) => {
          snapshot.forEach((child) => {
            if (child.val().exercise == id) {
              li.push({
                orientation: child.val().orientation,
                id: child.key,
              });
            }
          });
          setOrientation(li);
        });
    }
  }, [orientation]);

  async function handleDelete(object_id) {
    deleteSelectOrientations(object_id);
  }

  return (
    <View style={styles.container}>
      <Header title="Orientações selecionadas" />
      <View style={styles.backgroundList}>
        <View style={styles.viewList}>
          <FlatList
            data={orientation}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <List.Item
                  style={styles.itemText}
                  title={item.orientation}
                  titleNumberOfLines={100}
                  titleStyle={styles.listItemTitle}
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
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() =>
              navigation.push('ListOrientations', props.route.params)
            }
          >
            <MaterialIcons name="playlist-add" size={24} color="black" />
            <Text style={styles.tab_text}>{'Orientações'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Feather name="check-square" size={24} color="#fefefe" />
            <Text style={styles.tab_text_inative}>
              {'Orientações selecionadas'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.add}>
        <Ionicons
          name="add-outline"
          size={24}
          color={'#fefefe'}
          onPress={() => {
            navigation.navigate('SelectOrientation', props.route.params);
          }}
        />
      </View>
    </View>
  );
};
