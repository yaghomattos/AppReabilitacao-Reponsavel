import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as referenceValues from '../../utils/ReferenceValues';
import { readParticipantWithId } from '../CRUDs/Participant/index';
import styles from './styles';

export const Performance = ({ props }) => {
  const [result, setResult] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [value, setValue] = useState(0);

  const name = props.reference;

  useEffect(() => {
    readParticipantWithId(props.participantId).then((response) => {
      setAge(response.val().age);
      setGender(response.val().gender);
    });

    setValue(props.reps ? props.reps : props.timer);

    if (name == 'TSL_5Reps')
      setResult(
        (
          value /
          referenceValues.TSL_5Reps({
            age: moment(age, 'DDMMYYYY').fromNow().substring(0, 2),
            gender: gender,
          })
        ).toFixed(2) * 100
      );
    else if (name == 'TSL_30Seconds')
      setResult(
        (
          value /
          referenceValues.TSL_30Seconds({
            age: moment(age, 'DDMMYYYY').fromNow().substring(0, 2),
            gender: gender,
          })
        ).toFixed(2) * 100
      );
    else if (name == 'TSL_1Minute')
      setResult(
        (
          value /
          referenceValues.TSL_1Minute({
            age: moment(age, 'DDMMYYYY').fromNow().substring(0, 2),
            gender: gender,
          })
        ).toFixed(2) * 100
      );
    else if (name == 'TUG_Normal')
      setResult(
        (
          value /
          referenceValues.TUG_Normal({
            age: moment(age, 'DDMMYYYY').fromNow().substring(0, 2),
            gender: gender,
          })
        ).toFixed(2) * 100
      );
    else if (name == 'TUG_Maximum')
      setResult(
        (
          value /
          referenceValues.TUG_Maximum({
            age: moment(age, 'DDMMYYYY').fromNow().substring(0, 2),
            gender: gender,
          })
        ).toFixed(2) * 100
      );
    else if (name == 'FourMGS_Normal')
      setResult(
        (
          value /
          referenceValues.FourMGS_Normal({
            age: moment(age, 'DDMMYYYY').fromNow().substring(0, 2),
            gender: gender,
          })
        ).toFixed(2) * 100
      );
    else if (name == 'FourMGS_Maximum')
      setResult(
        (
          value /
          referenceValues.FourMGS_Maximum({
            age: moment(age, 'DDMMYYYY').fromNow().substring(0, 2),
            gender: gender,
          })
        ).toFixed(2) * 100
      );
    else if (name == 'TD6')
      setResult(
        (
          value /
          referenceValues.TD6({
            age: moment(age, 'DDMMYYYY').fromNow().substring(0, 2),
            gender: gender,
          })
        ).toFixed(2) * 100
      );
    else if (name == 'TDIM')
      setResult(
        (
          value /
          referenceValues.TDIM({
            age: moment(age, 'DDMMYYYY').fromNow().substring(0, 2),
            gender: gender,
          })
        ).toFixed(2) * 100
      );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Desempenho'}</Text>
      <Text style={styles.label}>{result + '%'}</Text>
    </View>
  );
};
