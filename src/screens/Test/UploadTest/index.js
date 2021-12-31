import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
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
import { Button } from '../../../components/Button/index';
import { createTest } from '../../../components/CRUDs/Test';
import { storage } from '../../../services/firebase';
import styles from './styles';

export function UploadTest() {
  const navigation = useNavigation();

  const [video, setVideo] = useState(false);
  const [preview, setPreview] = useState(false);
  const [videoURL, setVideoURL] = useState('');
  const [previewURL, setPreviewURL] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState('');
  const [reps, setReps] = useState('');

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
    var check = false;
    var storageRef = storage.ref();

    var previewRef = storageRef.child(`test/preview/${name}.jpg`);
    var videoRef = storageRef.child(`test/video/${name}.jpg`);

    const responsePreview = await fetch(preview.uri);
    const blobPreview = await responsePreview.blob();

    const videoPreview = await fetch(video.uri);
    const blobVideo = await videoPreview.blob();

    Alert.alert('Fazendo upload das informações, aguarde!');

    previewRef.put(blobPreview).then((snapshot) => {
      console.log('Uploaded a blob preview!');
      previewRef
        .getDownloadURL()
        .then((url) => {
          setPreviewURL(url);
        })
        .catch((e) =>
          console.log('getting downloadURL of preview error => ', e)
        );
    });
    videoRef.put(blobVideo).then((snapshot) => {
      console.log('Uploaded a blob video!');
      videoRef
        .getDownloadURL()
        .then((url) => {
          setVideoURL(url);
        })
        .catch((e) => console.log('getting downloadURL of video error => ', e));
      setTimeout(function () {
        createData();
      }, 100);
    });

    async function createData() {
      var test = {
        video: videoURL,
        preview: previewURL,
        name: name,
        description: description,
        timer: timer,
        reps: reps,
      };

      createTest(test);
    }
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
          <Text>{'ou'}</Text>
          <TextInput
            style={styles.input}
            value={reps}
            placeholder={'Repetições'}
            onChangeText={(text) => setReps(text)}
            autoCapitalize={'none'}
            keyboardType={'numeric'}
          />
          <View style={styles.preview}>
            <TouchableOpacity
              style={video ? styles.button : styles.button2}
              onPress={pickFile}
            >
              <Text style={styles.text_button}>{'Selecionar vídeo'}</Text>
              <Text style={styles.text_button}>{'ou imagem'}</Text>
            </TouchableOpacity>
            {video && (
              <Image source={{ uri: video.uri }} style={styles.image} />
            )}
          </View>
          <View style={styles.preview}>
            <TouchableOpacity style={styles.button} onPress={pickPhoto}>
              <Text style={styles.text_button}>{'Definir ícone'}</Text>
            </TouchableOpacity>
            {preview && (
              <Image source={{ uri: preview.uri }} style={styles.image} />
            )}
          </View>

          <Button title="Orientações" onPress="MenuOrientation" />

          {video && preview && (
            <TouchableOpacity style={styles.send} onPress={upload}>
              <Text style={styles.text_button}>{'Cadastrar'}</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
