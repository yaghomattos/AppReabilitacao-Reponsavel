import React from 'react';
import { SafeAreaView } from 'react-native';

import Styles from '../../components/Styles';

import { UploadVideo } from '../../components/UploadVideo';


export function UploadExercise() {
  return (
    <SafeAreaView style={Styles.login_wrapper}>
      < UploadVideo />
    </SafeAreaView>
  );
}
