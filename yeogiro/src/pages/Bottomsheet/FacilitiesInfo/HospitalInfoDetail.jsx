import {TouchableOpacity} from '@gorhom/bottom-sheet';
import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const HospitalInfoDetail = ({navigation}) => {
  const DATA = [
    {
      id: '1',
      title: '병원 1',
      address: '대전 서구 청사로 128 칼릭스 빌딩 5-8층 (월평동)',
      telephone: '042-123-4567',
    },
    {
      id: '2',
      title: '병원 2',
      address: '대전 서구 청사로 128 칼릭스 빌딩 5-8층 (월평동)',
      telephone: '042-123-4567',
    },
    {
      id: '3',
      title: '병원 3',
      address: '대전 서구 청사로 128 칼릭스 빌딩 5-8층 (월평동)',
      telephone: '042-123-4567',
    },
    {
      id: '4',
      title: '병원 4',
      address: '대전 서구 청사로 128 칼릭스 빌딩 5-8층 (월평동)',
      telephone: '042-123-4567',
    },
    {
      id: '5',
      title: '병원 5',
      address: '대전 서구 청사로 128 칼릭스 빌딩 5-8층 (월평동)',
      telephone: '042-123-4567',
    },
    {
      id: '6',
      title: '병원 6',
      address: '대전 서구 청사로 128 칼릭스 빌딩 5-8층 (월평동)',
      telephone: '042-123-4567',
    },
    {
      id: '7',
      title: '병원 7',
      address: '대전 서구 청사로 128 칼릭스 빌딩 5-8층 (월평동)',
      telephone: '042-123-4567',
    },
    {
      id: '8',
      title: '병원 8',
      address: '대전 서구 청사로 128 칼릭스 빌딩 5-8층 (월평동)',
      telephone: '042-123-4567',
    },
    {
      id: '9',
      title: '병원 9',
      address: '대전 서구 청사로 128 칼릭스 빌딩 5-8층 (월평동)',
      telephone: '042-123-4567',
    },
    {
      id: '10',
      title: '병원 10',
      address: '대전 서구 청사로 128 칼릭스 빌딩 5-8층 (월평동)',
      telephone: '042-123-4567',
    },
    {
      id: '11',
      title: '병원 11',
      address: '대전 서구 청사로 128 칼릭스 빌딩 5-8층 (월평동)',
      telephone: '042-123-4567',
    },
    {
      id: '12',
      title: '병원 12',
      address: '대전 서구 청사로 128 칼릭스 빌딩 5-8층 (월평동)',
      telephone: '042-123-4567',
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '시설 정보',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.hospital}>
        <View>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 600}}>
            {item.title}
          </Text>
          <Text>{item.address}</Text>
          <Text style={{color: 'blue'}}>{item.telephone}</Text>
        </View>
        <View style={styles.navigatorContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../../../assets/icons/Navigator.png')}
              style={styles.navigatorImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{borderBottomWidth: 1, borderBottomColor: '#CED4DA'}}>
        <Text style={styles.containerTitle}>병원 정보</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#CED4DA',
  },
  hospital: {
    borderBottomWidth: 1,
    borderBottomColor: '#CED4DA',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 20,
    marginVertical: 25,
  },
  navigatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigatorImage: {
    width: 40,
    height: 40,
  },
});

export default HospitalInfoDetail;
