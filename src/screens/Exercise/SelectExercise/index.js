import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { createSelectExercises } from '../../../components/CRUDs/SelectExercise/index';
import styles from './styles';

export const SelectExercise = (props) => {
  const navigation = useNavigation();

  const [results, setResults] = useState('');

  useEffect(() => {
    var li = [];
    database.ref('exercise').on('value', (snapshot) => {
      snapshot.forEach((child) => {
        if (child.val().participant == participant) {
          li.push({
            name: child.val().name,
            description: child.val().description,
            id: child.key,
          });
        }
      });
      setResults(li);
    });
  }, []);

  async function HandleCreateSelectedExercise(exercise, name) {
    var property = {
      participant: participant,
      exercise: exercise,
      name: name,
    };

    createSelectExercises(property);
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
          <Text style={styles.header_text}>{'Selecionar Exercícios'}</Text>
        </View>
      </View>
      <View style={styles.viewList}>
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
            <List.Item
              style={{
                width: 350,
                height: item.get('description').lenght,
                marginBottom: 10,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#6f6f6f',
              }}
              title={item.get('name')}
              description={item.get('description')}
              titleNumberOfLines={1}
              titleStyle={styles.itemTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={10}
              onPress={() => HandleCreateSelectedExercise(item.id, item.name)}
            />
          )}
        />
      </View>
    </View>
  );
};
