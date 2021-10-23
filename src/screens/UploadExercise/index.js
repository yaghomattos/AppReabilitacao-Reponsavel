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

import { createExercise } from '../../components/Exercises';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export function UploadExercise() {
  const navigation = useNavigation();

  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

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
    var exercise = {
      video: file,
      name: name,
      description: description,
    };

    createExercise(exercise);
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backView}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.back}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.header_text}>{'Cadastro de Exercício'}</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.background}>
          <TextInput
            style={styles.input}
            value={name}
            placeholder={'nome do exercício'}
            onChangeText={(text) => setName(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <TextInput
            editable
            multiline
            style={styles.input}
            value={description}
            placeholder={'descrição do exercício'}
            onChangeText={(text) => setDescription(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <View style={styles.preview}>
            <TouchableOpacity
              style={file ? styles.button : styles.button2}
              onPress={pickFile}
            >
              <Text style={styles.text_label}>
                {'Selecionar vídeo ou imagem'}
              </Text>
            </TouchableOpacity>
            {file && <Image source={{ uri: file.uri }} style={styles.image} />}
          </View>

          {file && (
            <TouchableOpacity style={styles.send} onPress={upload}>
              <Text style={styles.text_label}>{'Cadastrar'}</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
