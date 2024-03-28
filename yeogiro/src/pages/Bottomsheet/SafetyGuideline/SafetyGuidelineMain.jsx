import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function SafetyGuidelineMain({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: '행동 요령',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  const screenWidth = Dimensions.get('window').width;
  const buttonWidth = screenWidth * 0.4;

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.button, {width: buttonWidth, height: buttonWidth}]}
          onPress={() => navigation.navigate('NaturalDisaster')}>
          <View style={styles.buttonContent}>
            <Image
              source={require('../../../../assets/icons/NaturalIcon.png')}
              style={styles.icon}
            />
            <View style={styles.buttonTopRight}>
              <Text style={styles.buttonNumber}>10</Text>
              <Text style={styles.buttonSubtitle}>개</Text>
            </View>
            <Text style={styles.buttonText}>자연 재난</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {width: buttonWidth, height: buttonWidth}]}
          onPress={() => navigation.navigate('SocialDisaster')}>
          <View style={styles.buttonContent}>
            <Image
              source={require('../../../../assets/icons/SocialDisaster1.png')}
              style={styles.icon}
            />
            <View style={styles.buttonTopRight}>
              <Text style={styles.buttonNumber}>4</Text>
              <Text style={styles.buttonSubtitle}>개</Text>
            </View>
          </View>
          <Text style={styles.buttonText}>사회 재난</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.button, {width: buttonWidth, height: buttonWidth}]}
          onPress={() => navigation.navigate('LifeSafety')}>
          <View style={styles.buttonContent}>
            <Image
              source={require('../../../../assets/icons/LifeSafety.png')}
              style={styles.icon}
            />
            <View style={styles.buttonTopRight}>
              <Text style={styles.buttonNumber}>4</Text>
              <Text style={styles.buttonSubtitle}>개</Text>
            </View>
          </View>
          <Text style={styles.buttonText}>생활 안전</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {width: buttonWidth, height: buttonWidth}]}
          onPress={() => navigation.navigate('EmergencyEvacuation')}>
          <View style={styles.buttonContent}>
            <Image
              source={require('../../../../assets/icons/EmergencyEvacuation.png')}
              style={styles.icon}
            />
            <View style={styles.buttonTopRight}>
              <Text style={styles.buttonNumber}>2</Text>
              <Text style={styles.buttonSubtitle}>개</Text>
            </View>
          </View>
          <Text style={styles.buttonText}>비상 대피</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#CED4DA',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(178, 201, 219)',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  buttonContent: {
    alignItems: 'center',
  },
  buttonTopRight: {
    position: 'absolute',
    flexDirection: 'row',
    paddingLeft: 90,
  },
  buttonNumber: {
    fontSize: 22,
    marginTop: -35,
    // color: '#888e9b',
    color: '#fcfdff',
    fontWeight: 'bold',
  },
  buttonSubtitle: {
    fontSize: 15,
    marginTop: -30,
    paddingLeft: 3,
    color: 'white',
    fontWeight: 'bold',
  },
  icon: {
    width: 35,
    height: 35,
    marginBottom: 10,
  },
});

export default SafetyGuidelineMain;
