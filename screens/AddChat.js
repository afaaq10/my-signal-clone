import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useState } from 'react'
import { Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from 'react';
const AddChat = ({ navigation }) => {
    const [chat, setChat] = useState("")

    const createChat = async () => {
        await db.collection('chats').add(
            {
                chatName: chat,
            }).then(() => {



                navigation.goBack()


            }).catch((error) => {
                console.log(error.message)

            })



    }


    useLayoutEffect(() => {


        navigation.setOptions({
            title: 'Chats'
        })

    }, [])

    return (
        <KeyboardAvoidingView>
            <View style={styles.mainContainer}>
                <TextInput placeholderTextColor={'lightgray'} style={styles.inputStyle} placeholder='Enter a chat name' onChangeText={(text) => setChat(text)}
                    onSubmitEditing={createChat}
                />



            </View>
            <Button onPress={createChat} title="Create new chat" type="solid" />

        </KeyboardAvoidingView>

    )
}

export default AddChat

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        margin: 15,
        backgroundColor: 'white'
    },
    inputStyle: {

        width: '100%',
        marginTop: 5,
        padding: 10,
        backgroundColor: 'white',
        borderColor: 'white',
        outlineColor: 'white',



    },

})