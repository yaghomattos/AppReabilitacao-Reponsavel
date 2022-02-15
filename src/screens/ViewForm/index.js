import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { readPostForm, readPreForm } from '../../components/CRUDs/Form/index';
import Header from '../../components/Header';
import { CalcPerformance } from '../../utils/CalcPerformance';
import styles from './styles';

export function ViewForm(props) {
  const navigation = useNavigation();

  const [form, setForm] = useState('');
  const [performance, setPerformance] = useState('');

  const formId = props.route.params.form;
  const type = props.route.params.type;
  const participant = props.route.params.participant;

  var test = false;

  useEffect(() => {
    if (type == 'preForm') {
      readPreForm(formId).then((response) => {
        setForm(response.val());
      });
    } else {
      readPostForm(formId).then((response) => {
        setForm(response.val());
      });
    }
    HandleCalcPerformance();
  }, []);

  if (form.reps != null || form.timer != null) test = true;

  async function HandleCalcPerformance() {
    if (form.reps != null) {
      setPerformance(
        await CalcPerformance({
          name: form.name,
          participant: participant,
          reps: form.reps,
        })
      );
    } else {
      setPerformance(
        await CalcPerformance({
          name: form.name,
          participant: participant,
          timer: form.timer,
        })
      );
    }
  }

  return (
    <View style={styles.wrapper}>
      <Header title="Formulário" />
      <View style={styles.container}>
        <View style={styles.form}>
          {type != 'preForm' && test && (
            <>
              <Text style={styles.title}>
                {form.timer != null ? 'Tempo' : 'Número de repetições'}
              </Text>
              <Text style={styles.label}>
                {form.timer != null ? form.timer + ' segundos' : form.reps}
              </Text>
            </>
          )}

          {form.frequency != null && (
            <>
              <Text style={styles.title}>{'Frequência Cardíaca'}</Text>
              <Text style={styles.label}>{form.frequency}</Text>
            </>
          )}

          {form.saturation != null && (
            <>
              <Text style={styles.title}>{'Saturação'}</Text>
              <Text style={styles.label}>{form.saturation}</Text>
            </>
          )}

          {form.dyspnea != null && (
            <>
              <Text style={styles.title}>{'Falta de Ar'}</Text>
              <Text style={styles.label}>{form.dyspnea}</Text>
            </>
          )}

          {form.fatigue != null && (
            <>
              <Text style={styles.title}>{'Cansaço'}</Text>
              <Text style={styles.label}>{form.fatigue}</Text>
            </>
          )}

          {type != 'preForm' && (
            <>
              <Text style={styles.title}>{'Desempenho'}</Text>
              <Text style={styles.label}>{'0 %'}</Text>
            </>
          )}

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
