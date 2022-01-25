import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { Divider, List } from 'react-native-paper';
import { database } from '../../services/firebase';
import { CurrentDate } from '../../utils/CurrentDate';
import styles from './styles';

var date = new Date();

function CaseBad() {
  return 'Ruim';
}

function CaseOkay() {
  return 'Bom';
}

function CaseGreat() {
  return 'Excelente';
}

function Productivy(props) {
  const percent = props;
  if (percent <= 0.34) return <CaseBad />;
  else if (percent > 0.33 && percent <= 0.67) return <CaseOkay />;
  else return <CaseGreat />;
}

const displayDate = () => {
  return <Text style={styles.date}>{CurrentDate()}</Text>;
};

export function Monitoring(props) {
  const navigation = useNavigation();

  const [show, setShow] = useState(false);
  const [preForm, setPreForm] = useState([]);
  const [postForm, setPostForm] = useState([]);
  const [totalTest, setTotalTest] = useState(0);

  const participant = props.route.params[0];
  const provider = props.route.params[1];

  const lastDate = new Date();

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
            (provider == 'test'
              ? child.val().exercise == ''
              : child.val().test == '')
          ) {
            liPre.push({
              name: child.val().test,
              preForm: child.val().form,
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
            (provider == 'test'
              ? child.val().exercise == ''
              : child.val().test == '')
          ) {
            liPost.push({
              name: child.val().test,
              postForm: child.val().form,
              id: child.key,
            });
          }
        });
        setPostForm(liPost);
      });
  }, [preForm, postForm]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <View style={styles.backView}>
          <Ionicons
            name="arrow-back"
            size={24}
            style={styles.icon}
            onPress={() => navigation.goBack()}
          />
          <TouchableHighlight
            style={styles.highlight}
            activeOpacity={0}
            onPress={() => {
              setShow(true);
            }}
          >
            {displayDate()}
          </TouchableHighlight>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="calendar"
              maximumDate={lastDate}
              onChange={(dateString) => {
                const newDate = new Date(dateString.nativeEvent.timestamp);
                date = newDate;
                setShow(false);
              }}
            />
          )}
          <Ionicons
            name="home"
            size={24}
            style={styles.icon}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
      <View style={styles.today}>
        <Text style={styles.title}>{'Feito Hoje'}</Text>
      </View>
      <Divider style={styles.divider} />
      <ScrollView horizontal={false}>
        <ScrollView horizontal={true}>
          <View style={styles.exerciseBox}>
            <Text style={styles.subTitle}>{'Informações Iniciais:'}</Text>
            <View style={styles.exerciseContainer}>
              <FlatList
                nestedScrollEnabled
                data={preForm}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <Divider />}
                renderItem={({ item }) => (
                  <List.Item
                    title={item.name}
                    titleNumberOfLines={1}
                    titleStyle={styles.description}
                    onPress={() => navigation.navigate('ViewForm', item.form)}
                  />
                )}
              />
            </View>
            <Text style={styles.subTitle}>{'Informações Finais:'}</Text>
            <View style={styles.exerciseContainer}>
              <FlatList
                nestedScrollEnabled
                data={postForm}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <Divider />}
                renderItem={({ item }) => (
                  <List.Item
                    title={item.name}
                    titleNumberOfLines={1}
                    titleStyle={styles.description}
                    onPress={() => navigation.navigate('ViewForm', item.form)}
                  />
                )}
              />
            </View>
            <View>
              <Text style={styles.subTitle}>{'Quantidade:'}</Text>
              <View>
                <Text style={styles.feedback}>
                  {preForm.length + ` de ${preForm.length} testes concluídos`}
                </Text>
              </View>
              <Text style={styles.subTitle}>{'Produtividade:'}</Text>
              <View>
                <Text style={styles.feedback}>
                  {Productivy(preForm.length)}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
