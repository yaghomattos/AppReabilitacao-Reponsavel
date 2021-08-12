import React from 'react';
import { SafeAreaView } from 'react-native';

import { UploadVideo } from '../../components/UploadVideo/index';

import Styles from '../../components/Styles';

export function UploadExercise() {
  return (
    <SafeAreaView style={Styles.login_wrapper}>
      < UploadVideo />
    </SafeAreaView>
  );
}
