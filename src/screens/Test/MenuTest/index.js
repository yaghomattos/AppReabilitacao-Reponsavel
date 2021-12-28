import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Button } from '../../../components/Button/index';
import styles from './styles';

export function MenuTest() {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#3E9ACD" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.back}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.header_text}>{'Menu Avaliação'}</Text>
        </View>
        <View style={styles.background}>
          <View style={styles.buttons}>
            <Button
              title="Avaliação"
              onPress="ListParticipantRoute"
              props={'ListSelectTest'}
            />
            <Button title="Cadastrar Novo Teste" onPress="UploadExam" />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
