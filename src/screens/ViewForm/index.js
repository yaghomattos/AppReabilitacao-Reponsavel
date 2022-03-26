import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { readPostForm, readPreForm } from '../../components/CRUDs/Form/index';
import HeaderHome from '../../components/HeaderHome';
import { Performance } from '../../components/Performance';
import styles from './styles';

export function ViewForm(props) {
  const navigation = useNavigation();

  const [form, setForm] = useState('');
  const [performance, setPerformance] = useState('');

  const formId = props.route.params.form;
  const type = props.route.params.type;
  const participant = props.route.params.participant;
  const reference = props.route.params.reference;

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
  }, []);

  if (form.reps != '' || form.timer != '') test = true;

  return (
    <View style={styles.wrapper}>
      <HeaderHome title="Formulário" />
      <View style={styles.container}>
        <View style={styles.form}>
          {type != 'preForm' && test && (
            <>
              <Text style={styles.title}>
                {form.timer != '' ? 'Tempo' : 'Número de repetições'}
              </Text>
              <Text style={styles.label}>
                {form.timer != '' ? form.timer + ' segundos' : form.reps}
              </Text>
            </>
          )}

          {form.frequency != '' && (
            <>
              <Text style={styles.title}>{'Frequência Cardíaca'}</Text>
              <Text style={styles.label}>{form.frequency}</Text>
            </>
          )}

          {form.saturation != '' && (
            <>
              <Text style={styles.title}>{'Saturação'}</Text>
              <Text style={styles.label}>{form.saturation}</Text>
            </>
          )}

          {form.dyspnea != '' && (
            <>
              <Text style={styles.title}>{'Falta de Ar'}</Text>
              <Text style={styles.label}>{form.dyspnea}</Text>
            </>
          )}

          {form.fatigue != '' && (
            <>
              <Text style={styles.title}>{'Cansaço'}</Text>
              <Text style={styles.label}>{form.fatigue}</Text>
            </>
          )}

          {type != 'preForm' && (
            <Performance
              props={{
                reference: reference,
                participantId: participant,
                reps: form.reps,
              }}
            />
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
