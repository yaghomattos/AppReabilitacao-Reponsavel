import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Button } from '../../../components/Button/index';
import Header from '../../../components/Header';
import styles from './styles';

export function MenuTest() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#3E9ACD" />
      <SafeAreaView style={styles.container}>
        <Header title="Menu avaliação" />
        <View style={styles.background}>
          <View style={styles.buttons}>
            <Button
              title="Avaliação"
              onPress="ListParticipantRoute"
              props={'ListSelectTest'}
            />
            {/* <Button
              title="Monitoramento"
              onPress="ListParticipantRoute"
              props={'TestMonitoring'}
            /> */}
            <Button title="Cadastrar Novo Teste" onPress="UploadTest" />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
