import { StyleSheet, Text, View, Keyboard, SafeAreaView, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback }
    from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { db, auth } from '../firebase';
import firebase from 'firebase'
import { collection, getDocs, getDoc, doc, addDoc, setDoc, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
const ChatScreen = ({ navigation, route }) => {


    const [text, setText] = useState("")
    const [messages, setMessages] = useState([])
    // console.log("the auth is", auth.currentUser)

    const sendMessage = () => {
        Keyboard.dismiss()



        // const docColl = doc(collection(db, "chats"));

        // console.log("docColl is: ", docColl);

        // setDoc(doc(db, "message", `${route.params.id}`), {
        //     timestamp: serverTimestamp(),
        //     message: text,
        //     // displayName: auth.currentUser.displayName
        // }, { merge: true });

        db.collection('chats').doc(`${route.params.id}`).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: text,
            displayName: firebase.auth().currentUser.displayName,
            email: firebase.auth().currentUser.email
        })
        setText("")

    }




    useEffect(() => {

        db.collection('chats').doc(`${route.params.id}`).collection('messages')
            .orderBy("timestamp", "desc").onSnapshot((snapshot) => setMessages(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
            ))
    }, [route])







    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            {/* <Text>Hello chats</Text> */}
            <KeyboardAvoidingView style={styles.container}>
                {/* <Text>{route.params.chatValue}</Text> */}







                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <>
                        <ScrollView>
                            {messages.map(({ data, id }) => (

                                data.email == auth.currentUser.email ? (
                                    <View key={id} style={styles.recView}>
                                        <Text style={styles.recText}>{data.message}</Text>
                                    </View>
                                ) : (
                                    <View style={styles.senView}>
                                        <Text style={styles.senText}>{data.message}</Text>

                                    </View>
                                )
                            ))}
                        </ScrollView>
                        <View style={styles.footer}>
                            <TextInput
                                value={text}
                                placeholderTextColor={'white'}
                                style={styles.textInput} placeholder='Send a message'
                                onChangeText={(text) => setText(text)}
                                onSubmitEditing={sendMessage}
                            />

                            <TouchableOpacity onPress={sendMessage} >
                                <Ionicons name="md-send" size={34} color="blue" />

                            </TouchableOpacity>

                        </View>

                    </>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15

    },
    textInput: {
        width: '80%',
        outlineColor: 'white',
        borderWidth: 1,
        borderRadius: 25,
        marginRight: 5,
        height: 40,
        backgroundColor: 'lightgrey',
        textAlign: 'center'

    },
    recView: {
        padding: 15,
        backgroundColor: 'gray',
        alignSelf: 'flex-end',
        borderRadius: 20,
        marginRight: 15,
        marginBottom: 20,
        maxWidth: '80%',
        position: 'relative'


    },
    senView: {
        padding: 15,
        backgroundColor: 'blue',
        alignSelf: 'flex-start',
        borderRadius: 20,
        marginRight: 15,
        maxWidth: '80%',
        position: 'relative'
    },
    senText: {
        color: 'white',
        fontWeight: '500',
        marginLeft: 10,
        marginBottom: 15,
    },
    recText: {
        color: 'black',
        fontWeight: '500',
        marginLeft: 10,

    }

})