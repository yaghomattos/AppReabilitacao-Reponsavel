import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { createOrientation } from '../../../components/CRUDs/Orientations/index';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export function NewOrientation() {
  const navigation = useNavigation();

  const [text, setText] = useState('');

  async function handleCreateOrientation() {
    createOrientation(text);
  }

  return (
    <>
      <View style={styles.header}>
        <View style={styles.backView}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.back}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.header_text}>{'Adicionar nova Orientação'}</Text>
        </View>
      </View>
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
