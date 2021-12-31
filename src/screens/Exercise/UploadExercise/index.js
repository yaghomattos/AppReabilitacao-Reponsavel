import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from '../../../components/Button/index';
import { createExercise } from '../../../components/CRUDs/Exercise/index';
import { storage } from '../../../services/firebase';
import styles from './styles';

export function UploadExercise() {
  const navigation = useNavigation();

  const [video, setVideo] = useState(false);
  const [preview, setPreview] = useState(false);
  const [videoURL, setVideoURL] = useState('');
  const [previewURL, setPreviewURL] = useState('');
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
    var check = false;
    var storageRef = storage.ref();

    var previewRef = storageRef.child(`preview/${name}.jpg`);
    var videoRef = storageRef.child(`video/${name}.jpg`);

    const responsePreview = await fetch(preview.uri);
    const blobPreview = await responsePreview.blob();

    const videoPreview = await fetch(video.uri);
    const blobVideo = await videoPreview.blob();

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
      var exercise = {
        video: videoURL,
        preview: previewURL,
        name: name,
        description: description,
      };

      createExercise(exercise);
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
          <Text style={styles.header_text}>{'Cadastro de Exercício'}</Text>
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

          {video && (
            <TouchableOpacity style={styles.send} onPress={upload}>
              <Text style={styles.text_label}>{'Cadastrar'}</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
