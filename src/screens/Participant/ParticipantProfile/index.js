import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  ScrollView,
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
  const [gender, setGender] = useState(props.route.params.gender);

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
      gender: gender,
      id: props.route.params.id,
    };

    updateParticipant(participant);
  }

  return (
    <View style={styles.container}>
      <HeaderHome title="Perfil do Participante" />
      <ScrollView>
        <View style={styles.form}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>{'Nome'}</Text>
            <TextInput
              style={styles.input}
              value={participantName}
              placeholder={props.route.params.name}
              onChangeText={(text) => setParticipantName(text)}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>{'CPF'}</Text>
            <TextInputMask
              style={styles.input}
              type={'cpf'}
              placeholder={props.route.params.cpf}
              value={CPF}
              onChangeText={(text) => setCPF(text)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>{'Data de Nascimento'}</Text>
            <TextInputMask
              style={styles.input}
              type={'datetime'}
              placeholder={props.route.params.age}
              options={{
                format: 'DD/MM/YYYY',
              }}
              value={age}
              onChangeText={(text) => setAge(text)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>{'Telefone'}</Text>
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
              onChangeText={(text) => setPhone(text)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>{'Diagnóstico'}</Text>
            <TextInput
              style={styles.input}
              value={diagnosis}
              placeholder={props.route.params.diagnosis}
              onChangeText={(text) => setDiagnosis(text)}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>{'Endereço'}</Text>
            <TextInput
              style={styles.input}
              value={address}
              placeholder={props.route.params.address}
              onChangeText={(text) => setAddress(text)}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>{'Peso'}</Text>
            <TextInputMask
              type={'custom'}
              options={{
                mask: '99.99',
              }}
              value={weight}
              placeholder={props.route.params.weight}
              onChangeText={(text) => setWeight(text)}
              style={styles.input}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>{'Altura'}</Text>
            <TextInputMask
              type={'custom'}
              options={{
                mask: '9.99',
              }}
              value={height}
              placeholder={props.route.params.height}
              onChangeText={(text) => setHeight(text)}
              style={styles.input}
            />
          </View>
          <Picker
            selectedValue={gender}
            label={props.route.params.gender}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
          >
            <Picker.Item label="Masculino" value="male" />
            <Picker.Item label="Feminino" value="female" />
          </Picker>

          <TouchableOpacity onPress={() => handleSave()}>
            <View style={styles.button}>
              <Text style={styles.text_label}>{'Salvar'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
