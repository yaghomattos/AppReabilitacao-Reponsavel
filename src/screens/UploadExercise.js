import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { createExercise } from '../components/Exercices';
import Styles from '../components/Styles';

export function UploadExercise() {
  const [file, setFile] = useState('');

  async function handleCreate() {
    const fileValue = file;
    createExercise(/*fileValue*/);
  }

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TextInput
          style={Styles.form_input}
          value={file}
          placeholder={'Upload'}
          onChangeText={(text) => setFile(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TouchableOpacity onPress={() => handleCreate()}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Upload Exercício'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
