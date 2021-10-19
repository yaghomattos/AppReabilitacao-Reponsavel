import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export function ViewForm(props) {
  const navigation = useNavigation();

  const form = props.route.params;

  var exam = false;

  if (form.get('reps') != undefined && form.get('reps') != '') exam = true;

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.backView}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.back}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.header_text}>{'Formulário'}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>
            {exam ? null : 'Número de repetições'}
          </Text>
          <Text style={styles.label}>{exam ? null : form.get('reps')}</Text>

          <Text style={styles.title}>{'Frequência Cardíaca'}</Text>
          <Text style={styles.label}>{form.get('Frequency')}</Text>

          <Text style={styles.title}>{'Saturação'}</Text>
          <Text style={styles.label}>{form.get('Saturation')}</Text>

          <Text style={styles.title}>{'Borg Dispineia'}</Text>
          <Text style={styles.label}>{form.get('Dyspnea')}</Text>

          <Text style={styles.title}>{'Borg Fadiga'}</Text>
          <Text style={styles.label}>{form.get('Fatique')}</Text>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Voltar'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
