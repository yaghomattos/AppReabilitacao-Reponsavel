import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Button } from '../../../components/Button/index';
import { updateSelectTests } from '../../../components/CRUDs/SelectTest';
import Header from '../../../components/Header';
import styles from './styles';

export function TestSettings(props) {
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [reps, setReps] = useState('');

  const [frequency, setFrequency] = useState(false);
  const [saturation, setSaturation] = useState(false);
  const [dyspnea, setDyspnea] = useState(false);
  const [fatigue, setFatigue] = useState(false);

  var selectTest = props.route.params.id;

  async function handleSettings() {
    if (minutes == '') setMinutes('');
    if (seconds == '') setSeconds('');

    const object = {
      id: selectTest,
      timer:
        minutes != '' || seconds != ''
          ? parseInt(minutes) * 60 + parseInt(seconds)
          : '',
      reps: reps,
      frequency: frequency,
      saturation: saturation,
      dyspnea: dyspnea,
      fatigue: fatigue,
    };

    updateSelectTests(object);
  }

  return (
    <View style={styles.wrapper}>
      <Header title="Ajuste de Métricas" />
      <View style={styles.container}>
        <Text style={styles.title}>{'Cronômetro'}</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={minutes}
            placeholder={'min'}
            onChangeText={(text) => setMinutes(parseInt(text))}
            keyboardType={'numeric'}
            maxLength={2}
          />
          <Text style={styles.inputText}>{':'}</Text>
          <TextInput
            style={styles.input}
            value={seconds}
            placeholder={'seg'}
            onChangeText={(text) => setSeconds(parseInt(text))}
            keyboardType={'numeric'}
            maxLength={3}
          />
        </View>
        <Text style={styles.title}>{'ou'}</Text>
        <Text style={styles.title}>{'Número de repetições'}</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.inputReps}
            value={reps}
            placeholder={'Repetições'}
            onChangeText={(text) => setReps(text)}
            autoCapitalize={'none'}
            keyboardType={'numeric'}
          />
        </View>
        <View style={styles.wrapperCheckbox}>
          <Text style={styles.title}>{'Dados do formulário'}</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={frequency ? 'checked' : 'unchecked'}
              onPress={() => {
                setFrequency(!frequency);
              }}
            />
            <Text style={styles.text_checkbox}>Frequência Cardíaca</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={saturation ? 'checked' : 'unchecked'}
              onPress={() => {
                setSaturation(!saturation);
              }}
            />
            <Text style={styles.text_checkbox}>Saturação</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={dyspnea ? 'checked' : 'unchecked'}
              onPress={() => {
                setDyspnea(!dyspnea);
              }}
            />
            <Text style={styles.text_checkbox}>Falta de ar</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={fatigue ? 'checked' : 'unchecked'}
              onPress={() => {
                setFatigue(!fatigue);
              }}
            />
            <Text style={styles.text_checkbox}>Cansaço</Text>
          </View>
        </View>

        <Button
          title="Orientações"
          onPress="MenuOrientation"
          props={props.route.params}
        />

        {(minutes != '' || seconds != '' || reps != '') && (
          <TouchableOpacity onPress={() => handleSettings()}>
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Salvar'}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
