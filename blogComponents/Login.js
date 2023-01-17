
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase';


const Login = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")




    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.replace('Home')

            }


        })
        return (() => {
            subscribe()
        })


    }, [])




    const handleSignin = () => {
        signInWithEmailAndPassword(auth, email, password).then((user) => {
            console.log("Signed in successfully ", user)

            navigation.replace("Home")

        }).catch((error) => {
            console.log(error.message)
        })

    }




    const handleSignup = () => {

        console.log("SignedUp successfully ")
        navigation.navigate('Signup')
    }

    const emailTextChange = (userdata) => {
        setEmail(userdata)


    }
    const passwordChange = (userdata) => {
        setPassword(userdata)
    }






    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={styles.maincontainer} >


            <View style={styles.inputContainer}>
                {/* <Text style={styles.labels}> Enter your email </Text> */}
                <TextInput

                    style={styles.inputStyle}
                    placeholder={"Enter your email"}
                    value={email}
                    onChangeText={emailTextChange}
                    placeholderTextColor={'lightgray'}
                    autoFocus

                />
            </View>

            <View style={styles.inputContainer}>
                {/* <Text style={styles.labels}> Enter your Password </Text> */}
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputStyle}
                    placeholder={"Enter your password"}
                    value={password}
                    onChangeText={passwordChange}
                    placeholderTextColor={'lightgray'}


                />
            </View>

            <TouchableOpacity
                onPress={handleSignin}
                style={styles.buttonStyle}>
                <Text style={styles.incText}>Signin</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handleSignup}
                style={styles.buttonStyle}>
                <Text style={styles.incText2}>SignUp</Text>
            </TouchableOpacity>




        </KeyboardAvoidingView>
    )

}

export default Login


const styles = StyleSheet.create({
    maincontainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonStyle: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        marginVertical: 15,

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

    incText: {
        backgroundColor: 'lightblue',
        padding: 8,
        border: 1,
        borderRadius: 5,
        color: 'blue',
        width: 185,
        textAlign: 'center',
    },

    inputContainer: {
        marginTop: 30,

    },
    labels: {
        // fontWeight: "bold",
        fontSize: 15,
        color: "#7d7d7d",
        paddingBottom: 5,
        //   fontFamily: "WorkSans_400Regular",
        lineHeight: 25,
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.3)",
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 12,
        width: 290,

    },

})

