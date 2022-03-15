import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import HeaderHome from '../../components/HeaderHome/index';
import { database } from '../../services/firebase';
import styles from './styles';

export function Monitoring(props) {
  const navigation = useNavigation();

  const [preForm, setPreForm] = useState([]);
  const [postForm, setPostForm] = useState([]);

  const participant = props.route.params[0];
  const provider = props.route.params[1];

  useEffect(() => {
    var liPre = [];
    var liPost = [];

    database
      .ref('participantPreForm')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          if (
            child.val().participant == participant &&
            child.val().className == provider
          ) {
            liPre.push({
              name: child.val().name,
              form: child.val().form,
              participant: child.val().participant,
              createdAt: child.val().createdAt,
              type: 'preForm',
              id: child.key,
            });
          }
        });
        setPreForm(liPre);
      });

    database
      .ref('participantPostForm')
      .get()
      .then((snapshot) => {
        snapshot.forEach((child) => {
          if (
            child.val().participant == participant &&
            child.val().className == provider
          ) {
            liPost.push({
              name: child.val().name,
              form: child.val().form,
              participant: child.val().participant,
              createdAt: child.val().createdAt,
              type: 'postForm',
              id: child.key,
            });
          }
        });
        setPostForm(liPost);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderHome title="Monitoramento" />
      <View style={styles.today}>
        <Text style={styles.title}>{'Concluídos'}</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.wrapper}>
        <ScrollView horizontal={false}>
          <ScrollView horizontal={true}>
            <View style={styles.formBox}>
              <Text style={styles.subTitle}>{'Informações Iniciais:'}</Text>
              <View style={styles.formContainer}>
                <FlatList
                  nestedScrollEnabled
                  data={preForm}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <List.Item
                      title={item.name}
                      titleNumberOfLines={1}
                      titleStyle={styles.description}
                      onPress={() => navigation.navigate('ViewForm', item)}
                      right={() => (
                        <View style={styles.date}>
                          <Text style={styles.textDate}>{item.createdAt}</Text>
                        </View>
                      )}
                    />
                  )}
                />
              </View>
              <Text style={styles.subTitle}>{'Informações Finais:'}</Text>
              <View style={styles.formContainer}>
                <FlatList
                  nestedScrollEnabled
                  data={postForm}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <List.Item
                      title={item.name}
                      titleNumberOfLines={1}
                      titleStyle={styles.description}
                      onPress={() => navigation.navigate('ViewForm', item)}
                      right={() => (
                        <View style={styles.date}>
                          <Text style={styles.textDate}>{item.createdAt}</Text>
                        </View>
                      )}
                    />
                  )}
                />
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
