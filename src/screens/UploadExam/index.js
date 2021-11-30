import React, { useState, useEffect } from 'react';
import {
  Image,
  View,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import { Button } from '../../components/Button/index';
import { createExam } from '../../components/Exams';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export function UploadExam() {
  const navigation = useNavigation();

  const [file, setFile] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState('');

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  async function upload() {
    var exam = {
      video: file,
      photo: photo,
      name: name,
      description: description,
      timer: timer,
    };

    createExam(exam);
  }

  const pickFile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
    });

    if (!result.cancelled) {
      setFile(result);
    }
  };

  const pickPhoto = async () => {
    let resultPhoto = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
    });

    if (!resultPhoto.cancelled) {
      setPhoto(resultPhoto);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backView}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.icon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.header_text}>{'Cadastro de Teste'}</Text>
          <Ionicons
            name="home"
            size={24}
            style={styles.icon}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.background}>
          <TextInput
            style={styles.input}
            value={name}
            placeholder={'Nome do teste'}
            onChangeText={(text) => setName(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <TextInput
            editable
            multiline
            style={styles.input}
            value={description}
            placeholder={'Descrição do teste'}
            onChangeText={(text) => setDescription(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <TextInput
            style={styles.input}
            value={timer}
            placeholder={'Tempo'}
            onChangeText={(text) => setTimer(text)}
            autoCapitalize={'none'}
            keyboardType={'numeric'}
          />
          <View style={styles.preview}>
            <TouchableOpacity
              style={file ? styles.button : styles.button2}
              onPress={pickFile}
            >
              <Text style={styles.text_button}>{'Selecionar vídeo'}</Text>
              <Text style={styles.text_button}>{'ou imagem'}</Text>
            </TouchableOpacity>
            {file && <Image source={{ uri: file.uri }} style={styles.image} />}
          </View>
          <View style={styles.preview}>
            <TouchableOpacity style={styles.button} onPress={pickPhoto}>
              <Text style={styles.text_button}>{'Definir ícone'}</Text>
            </TouchableOpacity>
            {photo && (
              <Image source={{ uri: photo.uri }} style={styles.image} />
            )}
          </View>

          <Button title="Orientações" onPress="MenuOrientation" />

          {file && photo && (
            <TouchableOpacity style={styles.send} onPress={upload}>
              <Text style={styles.text_button}>{'Cadastrar'}</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
