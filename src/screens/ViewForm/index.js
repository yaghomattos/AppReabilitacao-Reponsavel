import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { readForm } from '../../components/CRUDs/Form/index';
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

  var test = false;
  if (reps != undefined && reps != '') test = true;

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
            {test ? 'Número de repetições' : null}
          </Text>
          <Text style={styles.label}>{test ? reps : null}</Text>

          <Text style={styles.title}>{'Frequência Cardíaca'}</Text>
          <Text style={styles.label}>{frequency}</Text>

          <Text style={styles.title}>{'Saturação'}</Text>
          <Text style={styles.label}>{saturation}</Text>

          <Text style={styles.title}>{'Falta de Ar'}</Text>
          <Text style={styles.label}>{dyspnea}</Text>

          <Text style={styles.title}>{'Cansaço'}</Text>
          <Text style={styles.label}>{fatigue}</Text>

          <Text style={styles.title}>{'Desempenho'}</Text>
          <Text style={styles.label}>{'0 %'}</Text>

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
