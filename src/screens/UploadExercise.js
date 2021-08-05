import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { createExercise } from '../components/Exercices';
import Styles from '../components/Styles';

import UploadImage from './UploadVideo';


export function UploadExercise() {

  return (
    <SafeAreaView style={Styles.login_wrapper}>
      <UploadImage />
    </SafeAreaView>
  );
}
