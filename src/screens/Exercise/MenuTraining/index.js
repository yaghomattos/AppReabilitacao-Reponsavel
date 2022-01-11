import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Button } from '../../../components/Button/index';
import Header from '../../../components/Header';
import styles from './styles';

export function MenuTraining() {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#3E9ACD" />
      <SafeAreaView style={styles.container}>
        <Header title="Menu Treinamento" />
        <View style={styles.background}>
          <View style={styles.buttons}>
            <Button
              title="Treinamento"
              onPress="ListParticipantRoute"
              props={'ListSelectExercise'}
            />
            <Button title="Cadastrar Novo Exercício" onPress="UploadExercise" />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
