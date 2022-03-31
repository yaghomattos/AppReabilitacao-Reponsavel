import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createOrientation } from '../../../components/CRUDs/Orientation/index';
import HeaderHome from '../../../components/HeaderHome';
import styles from './styles';

export function NewOrientation() {
  const [text, setText] = useState('');

  async function handleCreateOrientation() {
    createOrientation(text);
  }

  return (
    <View style={styles.container}>
      <HeaderHome title="Adicionar nova Orientação" />
      <View style={styles.wrapper}>
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
    </View>
  );
}
