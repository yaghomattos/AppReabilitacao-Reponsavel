import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createOrientation } from '../../../components/CRUDs/Orientation/index';
import Header from '../../../components/Header';
import styles from './styles';

export function NewOrientation() {
  const navigation = useNavigation();

  const [text, setText] = useState('');

  async function handleCreateOrientation() {
    createOrientation(text);
  }

  return (
    <>
      <Header title="Adicionar nova Orientação" />
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.inputName}>{'Descrição'}</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            value={text}
            placeholder={''}
            onChangeText={(text) => setText(text)}
            keyboardType={'email-address'}
          />
          <TouchableOpacity onPress={() => handleCreateOrientation()}>
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Adicionar'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
