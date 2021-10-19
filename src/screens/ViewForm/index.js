import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { readForm } from '../../components/Form';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export function ViewForm(props) {
  const navigation = useNavigation();

  const [reps, setReps] = useState('');
  const [frequency, setFrequency] = useState('');
  const [saturation, setSaturation] = useState('');
  const [dyspnea, setDyspnea] = useState('');
  const [fatigue, setFatigue] = useState('');

  const formId = props.route.params.id;

  async function update() {
    readForm(formId).then((response) => {
      setReps(response.get('Reps'));
      setFrequency(response.get('Frequency'));
      setSaturation(response.get('Saturation'));
      setDyspnea(response.get('Dyspnea'));
      setFatigue(response.get('Fatique'));
    });
  }

  update();

  var exam = false;
  if (reps != undefined && reps != '') exam = true;

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
            {exam ? 'Número de repetições' : null}
          </Text>
          <Text style={styles.label}>{exam ? reps : null}</Text>

          <Text style={styles.title}>{'Frequência Cardíaca'}</Text>
          <Text style={styles.label}>{frequency}</Text>

          <Text style={styles.title}>{'Saturação'}</Text>
          <Text style={styles.label}>{saturation}</Text>

          <Text style={styles.title}>{'Borg Dispineia'}</Text>
          <Text style={styles.label}>{dyspnea}</Text>

          <Text style={styles.title}>{'Borg Fadiga'}</Text>
          <Text style={styles.label}>{fatigue}</Text>

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
