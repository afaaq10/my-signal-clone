import { StyleSheet, Text, View, TouchableOpacity, TextInput, } from 'react-native'
import React, { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth, db } from '../firebase'
import { Avatar } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { collection, addDoc } from "firebase/firestore";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BlogPage from './BlogPage';
const Home = ({ navigation }) => {


    const [title, setTitle] = useState("")
    const [text, setText] = useState("")




    const handleBlog = async () => {

        if (!title || !text) {
            alert("Please add both fields first")

        }
        else {
            const blogCollection = collection(db, 'blog')

            const blogRef = await addDoc(blogCollection, {
                title: title,
                text: text,
                author: {
                    name: auth.currentUser.displayName,
                    id: auth.currentUser.uid
                }

            });
            console.log("Document written with ID: ", blogRef);
            setText("")
            setTitle("")

            navigation.navigate("BlogPage")

        }



    }

    const signOutUser = () => {
        signOut(auth)
        navigation.replace("Login")
    }


    return (
        <View style={styles.mainContainer}>

            <TouchableOpacity onPress={signOutUser} style={styles.avatar}>
                <AntDesign name="logout" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.inputContainer}>
                {/* <Text style={styles.labels}> Enter your email </Text> */}
                <TextInput

                    style={styles.inputStyle}
                    placeholder={"Enter the title"}
                    value={title}
                    onChangeText={(e) => setTitle(e)}
                    placeholderTextColor={'lightgray'}
                    autoFocus

                />
            </View>

            <View style={styles.inputContainer}>
                {/* <Text style={styles.labels}> Enter your Password </Text> */}
                <TextInput

                    style={styles.inputStyle}
                    placeholder={"Add your blog"}
                    value={text}
                    multiline={true}
                    numberOfLines={15}
                    onChangeText={(e) => setText(e)}
                    placeholderTextColor={'lightgray'}


                />
            </View>

            <TouchableOpacity
                onPress={handleBlog}
                style={styles.buttonStyle}>
                <Text style={styles.incText2}>Create Blog</Text>
            </TouchableOpacity>



        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {

        height: '100%',


    },
    avatar: {

        alignItems: 'flex-end',
        marginTop: -15,
        marginRight: 4,
        marginTop: 12
    },
    inputContainer: {
        marginTop: 30,
        alignItems: 'center'


    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.3)",
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 12,
        width: 290,

    },
    buttonStyle: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        marginVertical: 15,
        alignItems: 'center'

    },
    incText2: {
        backgroundColor: 'lightgreen',
        padding: 8,
        border: 1,
        borderRadius: 5,
        color: 'blue',
        width: 185,
        textAlign: 'center',
        marginVertical: -8,
    },
})