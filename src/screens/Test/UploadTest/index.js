import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { createTest } from '../../../components/CRUDs/Test';
import HeaderHome from '../../../components/HeaderHome';
import { storage } from '../../../services/firebase';
import styles from './styles';

export function UploadTest() {
  const [timer, setTimer] = useState(false);
  const [repetitions, setRepetitions] = useState(false);
  const [video, setVideo] = useState(false);
  const [preview, setPreview] = useState(false);
  const [videoURL, setVideoURL] = useState('');
  const [previewURL, setPreviewURL] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [reps, setReps] = useState('');
  const [uploaded, setUploaded] = useState(false);

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

    if (uploaded) {
      createData();
    }
  }, [uploaded]);

  async function upload() {
    var storageRef = storage.ref();

    var previewRef = storageRef.child(`test/preview/${name}`);
    var videoRef = storageRef.child(`test/video/${name}`);

    const responsePreview = await fetch(preview.uri);
    const blobPreview = await responsePreview.blob();

    const videoPreview = await fetch(video.uri);
    const blobVideo = await videoPreview.blob();

    previewRef.put(blobPreview).then(function (response) {
      previewRef
        .getDownloadURL()
        .then(function (url) {
          setPreviewURL(url);
          console.log(previewURL);
        })
        .catch((e) =>
          console.log('getting downloadURL of preview error => ', e)
        );
      console.log('Uploaded a blob preview!');
    });

    videoRef.put(blobVideo).then(function (response) {
      videoRef
        .getDownloadURL()
        .then(function (url) {
          setVideoURL(url);
          console.log(videoURL);
        })
        .catch((e) => console.log('getting downloadURL of video error => ', e));
      console.log('Uploaded a blob video!');
    });

    setTimeout(() => {
      setUploaded(true);
    }, 3000);

    Alert.alert('Fazendo Upload das informações, Aguarde!');
  }

  async function createData() {
    var test = {
      video: videoURL,
      preview: previewURL,
      name: name,
      description: description,
      timer: minutes * 60 + seconds,
      reps: reps,
    };

    createTest(test);

    setUploaded(false);
  }

  const pickFile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 0.5,
    });

    if (!result.cancelled) {
      setVideo(result);
    }
  };

  const pickPhoto = async () => {
    let resultPhoto = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.3,
    });

    if (!resultPhoto.cancelled) {
      setPreview(resultPhoto);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderHome title="Cadastro de Teste" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.background}>
          <View>
            <Text style={styles.label}>{'Nome'}</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(text) => setName(text)}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
            />
          </View>
          <View>
            <Text style={styles.label}>{'Descrição'}</Text>
            <TextInput
              editable
              multiline
              style={styles.input}
              value={description}
              onChangeText={(text) => setDescription(text)}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
            />
          </View>
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
              onChangeText={(text) => setMinutes(parseInt(text))}
              keyboardType={'numeric'}
              maxLength={2}
            />
            <Text style={timer ? styles.subtitle_true : styles.subtitle_false}>
              {':'}
            </Text>
            <TextInput
              style={timer ? styles.input_true : styles.input_false}
              value={seconds}
              onChangeText={(text) => setSeconds(parseInt(text))}
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

          <View style={styles.preview}>
            <TouchableOpacity style={styles.button} onPress={pickPhoto}>
              <Text style={styles.text_select}>{'Selecionar ícone'}</Text>
            </TouchableOpacity>
            {preview && (
              <Image source={{ uri: preview.uri }} style={styles.image} />
            )}
          </View>
          <View style={styles.preview}>
            <TouchableOpacity style={styles.button} onPress={pickFile}>
              <Text style={styles.text_select}>{'Selecionar teste'}</Text>
            </TouchableOpacity>
            {video && (
              <Image source={{ uri: video.uri }} style={styles.image} />
            )}
          </View>

          {!uploaded && (
            <TouchableOpacity style={styles.upload} onPress={upload}>
              <Feather name="save" size={24} color="#fefefe" />
              <Text style={styles.text_button}>{'Salvar'}</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
