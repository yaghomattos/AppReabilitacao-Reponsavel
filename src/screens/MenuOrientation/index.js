import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../../components/Button/index';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export function MenuOrientation() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.back}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.header_text}>{'Orientações'}</Text>
        </View>
        <View style={styles.background}>
          <View style={styles.buttons}>
            <Button
              title="Orientações selecionadas"
              onPress="ListSelectOrientations"
            />
            <Button
              title="Cadastrar nova Orientação"
              onPress="NewOrientation"
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
