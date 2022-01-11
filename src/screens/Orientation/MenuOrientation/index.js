import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Button } from '../../../components/Button/index';
import Header from '../../../components/Header';
import styles from './styles';

export function MenuOrientation(props) {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Header title="Orientações" />
        <View style={styles.background}>
          <View style={styles.buttons}>
            <Button
              title="Orientações selecionadas"
              onPress="ListSelectOrientation"
              props={props.route.params}
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
