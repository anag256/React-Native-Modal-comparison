import React, {useState} from 'react';
import {Alert,StyleSheet, Text, Pressable, View, Dimensions, ScrollView, TextInput} from 'react-native';
import Modal from "react-native-modal";
import {getRealWindowHeight} from 'react-native-extra-dimensions-android';
const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  console.log("Dimensions.window",Dimensions.get('window').height)
  console.log("Dimensions.screen",Dimensions.get('screen').height)
  console.log("RealWindowheight",getRealWindowHeight())
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (

  //       <View style={styles.centeredView} onLayout={(event)=>{
  //   const {x,y,width,height}=event.nativeEvent.layout;
  //   console.log("width",width);
  //   console.log("height",height);
  // }}>
  //   <Text>  <Text>absbsbbsbbs</Text>
  //   <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text>
  //   <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text></Text>

  //   <Modal isVisible={isModalVisible} animationType="slide"
  //       transparent={true}
  //       onRequestClose={() => {
  //         Alert.alert('Modal has been closed.');
  //        toggleModal();
  //       }}>
  //   <View style={styles.centeredView1}>
  //         <View style={styles.modalView}>
  //           <Text style={styles.modalText}>Hello World!</Text>
  //           <Pressable
  //             style={[styles.button, styles.buttonClose]}
  //             onPress={toggleModal}>
  //             <Text style={styles.textStyle}>Hide Modal</Text>
  //           </Pressable>
  //         </View>
  //       </View>
  //     </Modal>

  //       {/* <Modal/> */}
  //     <Pressable
  //       style={[styles.button, styles.buttonOpen]}
  //       onPress={toggleModal}>
  //       <Text style={styles.textStyle}>Show Modal</Text>
  //     </Pressable>
  //   </View>

  <View style={{ justifyContent: 'center',
    alignItems: 'center',flex:1}}>
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
    <View style={styles.test}>
            <Text style={styles.modalText}>Hello World!</Text>
            <ScrollView >
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text><Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>

                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
                <TextInput style={{borderColor:'black',borderWidth:1,width:'100%'}}/>
                <Text>abbcbcbcbbcbcbcbcbbcbcbbcbcbcbbddhdhhdhdhhdhdhhhdhdhdhhdhdhhdhdhd</Text>
            </ScrollView>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={toggleModal}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
        </View>
      </Modal>

          <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={toggleModal}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
  </View>




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
    maxHeight:540
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop:20
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