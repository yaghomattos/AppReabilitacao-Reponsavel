import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import { createExercise } from '../../components/Exercises';

export function UploadExercise() {
  const [file, setFile] = useState(null);

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
      name: 'nome',
      description: 'descrição',
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Selecionar arquivo da galeria" onPress={pickFile} />
      {file && (
        <Image
          source={{ uri: file.uri }}
          style={{
            width: 250,
            height: 250,
            marginTop: 50,
            marginBottom: 50,
            resizeMode: 'cover',
            alignSelf: 'center',
          }}
        />
      )}

      {file && <Button title="Upload" color="green" onPress={upload} />}
    </View>
  );
}
