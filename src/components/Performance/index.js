import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as referenceValues from '../../utils/ReferenceValues';
import { readParticipantWithId } from '../CRUDs/Participant/index';
import styles from './styles';

export const Performance = ({ props }) => {
  const [result, setResult] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const name = props.reference;
  var numReps = 0;
  var timerValue = 0;

  if (props.reps) {
    numReps = props.reps;
  } else timerValue = props.timer;

  useEffect(() => {
    readParticipantWithId(props.participantId).then((response) => {
      setAge(response.child('age'));
      setGender(response.child('gender'));
    });

    switch (name) {
      case 'TSL_5Reps':
        setResult(
          timerValue /
            referenceValues.TSL_5Reps({
              age: age,
              gender: gender,
            })
        );
      case 'TSL_30Seconds':
        setResult(
          numReps /
            referenceValues.TSL_30Seconds({
              age: age,
              gender: gender,
            })
        );
      case 'TSL_1Minute':
        setResult(
          numReps /
            referenceValues.TSL_1Minute({
              age: age,
              gender: gender,
            })
        );
      case 'TUG_Normal':
        setResult(
          timerValue /
            referenceValues.TUG_Normal({
              age: age,
              gender: gender,
            })
        );
      case 'TUG_Maximum':
        setResult(
          timerValue /
            referenceValues.TUG_Maximum({
              age: age,
              gender: gender,
            })
        );
      case 'FourMGS_Normal':
        setResult(
          timerValue /
            referenceValues.FourMGS_Normal({
              age: age,
              gender: gender,
            })
        );
      case 'FourMGS_Maximum':
        setResult(
          timerValue /
            referenceValues.FourMGS_Maximum({
              age: age,
              gender: gender,
            })
        );
      case 'TD6':
        setResult(
          numReps /
            referenceValues.TD6({
              age: age,
              gender: gender,
            })
        );
      case 'TDIM':
        setResult(
          timerValue /
            referenceValues.TDIM({
              age: age,
              gender: gender,
            })
        );
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Desempenho'}</Text>
      <Text style={styles.label}>{result + '%'}</Text>
    </View>
  );
};
