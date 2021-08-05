import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UploadVideo() {
  const [image, setImage] = useState(null);

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
    const base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
    const parseFile = new  Parse.File('image', {base64});
  
    try {
    const responseFile = await  parseFile.save();
    const Gallery = Parse.Object.extend('Exercise');
    const gallery = new  Gallery();
    gallery.set('video', responseFile);
    gallery.set('name', 'nome');
    gallery.set('description', 'descrição')
  
    await gallery.save();
    Alert.alert('The file has been saved to Back4app.');
    } catch (error) {
      console.log(
        'The file either could not be read, or could not be saved to Back4app.',
      );
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from gallery" onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image.uri }}
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

      {image && <Button title="Upload" color="green" onPress={upload} />}
    </View>
  );
}
