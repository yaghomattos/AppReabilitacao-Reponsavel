import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { updateParticipant } from '../../../components/CRUDs/Participant/index';
import HeaderHome from '../../../components/HeaderHome';
import styles from './styles';

export function ParticipantProfile(props) {
  const [participantName, setParticipantName] = useState('');
  const [CPF, setCPF] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [address, setAddress] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  async function handleSave() {
    const participant = {
      name: participantName,
      cpf: CPF,
      age: age,
      phone: phone,
      diagnosis: diagnosis,
      address: address,
      weight: weight,
      height: height,
      id: props.route.params.id,
    };

    updateParticipant(participant);
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <HeaderHome title="Perfil do Participante" />
      <View style={styles.background}>
        <Text style={styles.form}>{'Nome:'}</Text>
        <TextInput
          style={styles.input}
          value={participantName}
          placeholder={props.route.params.name}
          onChangeText={(text) =>
            text == null || text == '' ? '' : setParticipantName(text)
          }
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <Text style={styles.form}>{'CPF:'}</Text>
        <TextInputMask
          style={styles.input}
          type={'cpf'}
          placeholder={props.route.params.cpf}
          value={CPF}
          onChangeText={(text) =>
            text == null || text == '' ? '' : setCPF(text)
          }
        />
        <Text style={styles.form}>{'Data de Nascimento:'}</Text>
        <TextInputMask
          style={styles.input}
          type={'datetime'}
          placeholder={props.route.params.age}
          options={{
            format: 'DD/MM/YYYY',
          }}
          value={age}
          onChangeText={(text) =>
            text == null || text == '' ? '' : setAge(text)
          }
        />
        <Text style={styles.form}>{'Telefone:'}</Text>
        <TextInputMask
          style={styles.input}
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
          placeholder={props.route.params.phone}
          value={phone}
          onChangeText={(text) =>
            text == null || text == '' ? '' : setPhone(text)
          }
        />
        <Text style={styles.form}>{'Diagnóstico:'}</Text>
        <TextInput
          style={styles.input}
          value={diagnosis}
          placeholder={props.route.params.diagnosis}
          onChangeText={(text) =>
            text == null || text == '' ? '' : setDiagnosis(text)
          }
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <Text style={styles.form}>{'Endereço:'}</Text>
        <TextInput
          style={styles.input}
          value={address}
          placeholder={props.route.params.address}
          onChangeText={(text) =>
            text == null || text == '' ? '' : setAddress(text)
          }
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <Text style={styles.form}>{'Peso:'}</Text>
        <TextInput
          style={styles.input}
          value={weight}
          placeholder={props.route.params.weight}
          onChangeText={(text) =>
            text == null || text == '' ? '' : setWeight(text)
          }
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <Text style={styles.form}>{'Altura:'}</Text>
        <TextInput
          style={styles.input}
          value={height}
          placeholder={props.route.params.height}
          onChangeText={(text) =>
            text == null || text == '' ? '' : setHeight(text)
          }
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TouchableOpacity onPress={() => handleSave()}>
          <View style={styles.button}>
            <Text style={styles.text_label}>{'Salvar'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
