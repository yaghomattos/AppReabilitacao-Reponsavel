import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { updateSelectTests } from '../../../components/CRUDs/SelectTest';
import HeaderHome from '../../../components/HeaderHome';
import styles from './styles';

export function TestSettings(props) {
  const navigation = useNavigation();

  const [save, setSave] = useState(false);

  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [reps, setReps] = useState('');
  const [reference, setReference] = useState('');

  const [timer, setTimer] = useState(false);
  const [repetitions, setRepetitions] = useState(false);
  const [frequency, setFrequency] = useState(false);
  const [saturation, setSaturation] = useState(false);
  const [dyspnea, setDyspnea] = useState(false);
  const [fatigue, setFatique] = useState(false);

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
      reference: reference,
    };

    updateSelectTests(object);
  }

  return (
    <View style={styles.wrapper}>
      <HeaderHome title="Ajuste de Métricas" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.form}>
            <Checkbox
              status={timer ? 'checked' : 'unchecked'}
              onPress={() => {
                setTimer(!timer);
                setRepetitions(false);
              }}
              color="#000"
            />
            <Text style={timer ? styles.subtitle_true : styles.subtitle_false}>
              {'Tempo:'}
            </Text>

            <TextInput
              style={timer ? styles.input_true : styles.input_false}
              value={minutes}
              onChangeText={(text) => setMinutes(text)}
              keyboardType={'numeric'}
              maxLength={2}
            />
            <Text style={timer ? styles.subtitle_true : styles.subtitle_false}>
              {':'}
            </Text>
            <TextInput
              style={timer ? styles.input_true : styles.input_false}
              value={seconds}
              onChangeText={(text) => setSeconds(text)}
              keyboardType={'numeric'}
              maxLength={3}
            />
          </View>
          <View style={styles.form2}>
            <Checkbox
              status={repetitions ? 'checked' : 'unchecked'}
              onPress={() => {
                setRepetitions(!repetitions);
                setTimer(false);
              }}
              color="#000"
            />
            <View style={styles.form2}>
              <Text
                style={
                  repetitions ? styles.subtitle_true : styles.subtitle_false
                }
              >
                {'Repetições:'}
              </Text>
              <TextInput
                style={
                  repetitions ? styles.inputReps_true : styles.inputReps_false
                }
                value={reps}
                onChangeText={(text) => setReps(text)}
                keyboardType={'numeric'}
                maxLength={3}
              />
            </View>
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
                status={fatigue ? 'checked' : 'unchecked'}
                onPress={() => {
                  setFatique(!fatigue);
                }}
              />
              <Text style={styles.text_checkbox}>{'Cansaço'}</Text>
            </View>
          </View>
          <View style={styles.pickerBox}>
            <Text style={styles.title}>{'Tipo de Teste:'}</Text>
          </View>
          <Picker
            selectedValue={reference}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setReference(itemValue)}
          >
            <Picker.Item label="Selecione" />
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

          <TouchableOpacity onPress={() => handleSettings() && setSave(true)}>
            <View style={styles.button_save}>
              <Text style={styles.text_label}>{'Salvar'}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              save
                ? navigation.navigate('ListOrientations', props.route.params)
                : Alert.alert(
                    'Salvar as Métricas primeiro, antes de acessar as Orientações'
                  )
            }
          >
            <View style={save ? styles.button : styles.button_off}>
              <Text style={styles.text_label}>{'Orientações'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
