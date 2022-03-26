import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Button } from '../../../components/Button/index';
import { updateSelectTests } from '../../../components/CRUDs/SelectTest';
import HeaderHome from '../../../components/HeaderHome';
import styles from './styles';

export function TestSettings(props) {
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [reps, setReps] = useState('');
  const [reference, setReference] = useState('');

  const [frequency, setFrequency] = useState(false);
  const [saturation, setSaturation] = useState(false);
  const [dyspnea, setDyspnea] = useState(false);
  const [fatique, setFatique] = useState(false);

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
      fatique: fatique,
      reference: reference,
    };

    updateSelectTests(object);
  }

  return (
    <View style={styles.wrapper}>
      <HeaderHome title="Ajuste de Métricas" />
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
            <Text style={styles.text_checkbox}>{'Frequência Cardíaca'}</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={saturation ? 'checked' : 'unchecked'}
              onPress={() => {
                setSaturation(!saturation);
              }}
            />
            <Text style={styles.text_checkbox}>{'Saturação'}</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={dyspnea ? 'checked' : 'unchecked'}
              onPress={() => {
                setDyspnea(!dyspnea);
              }}
            />
            <Text style={styles.text_checkbox}>{'Falta de ar'}</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={fatique ? 'checked' : 'unchecked'}
              onPress={() => {
                setFatique(!fatique);
              }}
            />
            <Text style={styles.text_checkbox}>{'Cansaço'}</Text>
          </View>
          <Picker
            selectedValue={reference}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setReference(itemValue)}
          >
            <Picker.Item
              label="Teste senta e levanta de 5 repetições"
              value="TSL_5Reps"
            />
            <Picker.Item
              label="Teste senta e levanta de 30 segundos"
              value="TSL_30Seconds"
            />
            <Picker.Item
              label="Teste senta e levanta de 1 minuto"
              value="TSL_1Minute"
            />
            <Picker.Item label="TUG – Velocidade usual" value="TUG_Normal" />
            <Picker.Item label="TUG – Velocidade máxima" value="TUG_Maximum" />
            <Picker.Item
              label="4MGS - Velocidade usual"
              value="FourMGS_Normal"
            />
            <Picker.Item
              label="4MGS - Velocidade máxima"
              value="FourMGS_Maximum"
            />
            <Picker.Item label="Teste do degrau de 6 minutos" value="TD6" />
            <Picker.Item label="Teste do degrau incremental" value="TDIM" />
          </Picker>
        </View>
        <Button
          title="Orientações"
          onPress="MenuOrientation"
          props={props.route.params}
        />
        <TouchableOpacity onPress={() => handleSettings()}>
          <View style={styles.button}>
            <Text style={styles.text_label}>{'Salvar'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
