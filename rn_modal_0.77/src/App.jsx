import {NavigationContainer} from '@react-navigation/native';
import Screens from '@src/screens';
import {applyStateListeners} from '@src/utils/activity';
import {
  applyDeepLinkListener,
  checkUniversalLinkState,
} from '@src/utils/linking';
import {applyBackHandleListener, navigation} from '@src/utils/navigation';
import React, {useEffect, useState} from 'react';
import {StatusBar, TextInput} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Alert,StyleSheet, Text, Pressable, View, Dimensions, ScrollView} from 'react-native';
import Modal from "react-native-modal";
import {getRealWindowHeight} from 'react-native-extra-dimensions-android';

const App = () => {
  // Handle on app launch handlers here
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);
  console.log("Dimensions.window",Dimensions.get('window').height)
  console.log("Dimensions.screen",Dimensions.get('screen').height)
  console.log("RealWindowheight",getRealWindowHeight())
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderContent = () =>
    Array.from({length: 7}).map((_, index) => (
      <Text key={index}>
        1 Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with
        desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.
      </Text>
    ))
  return (
    // <View style={{paddingTop:StatusBar.currentHeight}}>
    <>
    <StatusBar backgroundColor="purple"/>
    <SafeAreaView style={{flex:1,backgroundColor:'grey'}}>


    <View style={{ justifyContent: 'center',
      alignItems: 'center',flex:1,height:'900px'}}>
      {/* <View style={styles.test}>
      <Text>I am centered</Text>
  </View> */}

     <Modal isVisible={isModalVisible} animationType="slide"
          transparent={true}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
           toggleModal();
          }}
          // deviceWidth={Dimensions.get("window").width}
          // deviceHeight={getRealWindowHeight()}
          avoidKeyboard
          onBackdropPress={()=>setModalVisible(false)}
          // statusBarTranslucent
          style={{margin:0}}

          >
      {/* <View style={styles.test}> */}

              <ScrollView style={{backgroundColor:'white',paddingHorizontal:20}}>
              <Text style={styles.modalText}>Hello World!</Text>
              {renderContent()}

                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>

                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={toggleModal}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>

            </ScrollView>


          {/* </View> */}
        </Modal>

            <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={toggleModal}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
    </View>

     </SafeAreaView>
     </>

  );
};

const styles = StyleSheet.create({
  test:{
    backgroundColor:'white',
    borderRadius: 20,
    padding: 45,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position:'absolute',
    bottom:'0',
    width:'100%',
    flex:1,
    height:'100%'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical:20
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;
