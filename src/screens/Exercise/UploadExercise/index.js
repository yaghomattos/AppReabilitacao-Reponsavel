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
import { createExercise } from '../../../components/CRUDs/Exercise/index';
import HeaderHome from '../../../components/HeaderHome';
import { storage } from '../../../services/firebase';
import styles from './styles';

export function UploadExercise() {
  const [video, setVideo] = useState(false);
  const [preview, setPreview] = useState(false);
  const [videoURL, setVideoURL] = useState('');
  const [previewURL, setPreviewURL] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
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

    var previewRef = storageRef.child(`exercise/preview/${name}.jpg`);
    var videoRef = storageRef.child(`exercise/video/${name}.jpg`);

    const responsePreview = await fetch(preview.uri);
    const blobPreview = await responsePreview.blob();

    const videoPreview = await fetch(video.uri);
    const blobVideo = await videoPreview.blob();

    previewRef.put(blobPreview).then((snapshot) => {
      console.log('Uploaded a blob preview!');
    });
    videoRef.put(blobVideo).then((snapshot) => {
      console.log('Uploaded a blob video!');
    });

    previewRef
      .getDownloadURL()
      .then(function (url) {
        setPreviewURL(url);
        console.log(previewURL);
      })
      .catch((e) => console.log('getting downloadURL of preview error => ', e));

    videoRef
      .getDownloadURL()
      .then(function (url) {
        setVideoURL(url);
        console.log(videoURL);
      })
      .catch((e) => console.log('getting downloadURL of video error => ', e));

    setTimeout(() => {
      setUploaded(true);
      Alert.alert('Upload Concluído!');
    }, 3000);

    Alert.alert('Fazendo Upload das informações, Aguarde!');
  }

  async function createData() {
    var exercise = {
      video: videoURL,
      preview: previewURL,
      name: name,
      description: description,
    };

    createExercise(exercise);
    setUploaded(false);
  }

  const pickFile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });

    if (!result.cancelled) {
      setVideo(result);
    }
  };

  const pickPhoto = async () => {
    let resultPhoto = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!resultPhoto.cancelled) {
      setPreview(resultPhoto);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderHome title="Cadastro de Exercício" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.background}>
          <TextInput
            style={styles.input}
            value={name}
            placeholder={'Nome'}
            onChangeText={(text) => setName(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <TextInput
            editable
            multiline
            style={styles.input}
            value={description}
            placeholder={'Descrição'}
            onChangeText={(text) => setDescription(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />

          <View style={styles.preview}>
            <TouchableOpacity style={styles.button} onPress={pickPhoto}>
              <Text style={styles.text_button}>{'Selecionar ícone'}</Text>
            </TouchableOpacity>
            {preview && (
              <Image source={{ uri: preview.uri }} style={styles.image} />
            )}
          </View>
          <View style={styles.preview}>
            <TouchableOpacity
              style={video ? styles.button : styles.button2}
              onPress={pickFile}
            >
              <Text style={styles.text_button}>{'Selecionar vídeo'}</Text>
            </TouchableOpacity>
            {video && (
              <Image source={{ uri: video.uri }} style={styles.image} />
            )}
          </View>

          {video && preview && !uploaded && (
            <TouchableOpacity style={styles.upload} onPress={upload}>
              <Text style={styles.text_button}>{'Finalizar cadastro'}</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
