import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export const TabExercise = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('ListExercises')}
      >
        <Ionicons name="list" size={24} color="black" />
        <Text style={styles.header_text}>{'Exercícios'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() =>
          navigation.navigate('ListParticipantRoute', 'ListSelectExercise')
        }
      >
        <Ionicons name="checkbox-outline" size={24} color="black" />
        <Text style={styles.header_text}>{'Exercícios Selecionados'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() =>
          navigation.navigate('ListParticipantRoute', 'ExerciseMonitoring')
        }
      >
        <Feather name="activity" size={24} color="black" />
        <Text style={styles.header_text}>{'Monitoramento'}</Text>
      </TouchableOpacity>
    </View>
  );
};
