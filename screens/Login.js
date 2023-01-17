// import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
// import React, { useState, useEffect } from 'react'

// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth, database } from '../firebase';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ref, set } from 'firebase/database';


// const Login = ({ navigation }) => {

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     useEffect(() => {
//         getData()
//     }, [])

//     const getData = async () => {
//         await AsyncStorage.getItem('newData').
//             then(value => {
//                 if (value != null) {
//                     navigation.navigate('Home')
//                 }
//             }

//             )
//     }






//     const handleSignup = () => {


//         navigation.navigate('Signup')
//     }

//     const handleSignin = async () => {



//         signInWithEmailAndPassword(auth, email, password).then(userCredentials => {
//             const user = userCredentials.user
//             if (user.email) {
//                 navigation.navigate('Home')
//                 Alert.alert("Signed in as", user.email)
//             }

//         }).catch(error => Alert.alert(error.message))



//         await AsyncStorage.setItem('newData', email)

//         set(ref(database, 'users/' + password), {
//             username: email,
//             email: email,

//         }).then(() => {
//             console.log("User added successfully in the database")
//         }).catch((error) => { console.log(error) })

//     }

//     return (
//         <KeyboardAvoidingView
//             behavior='padding'
//             style={styles.maincontainer}
//         >


//             <View style={styles.inputContainer}>
//                 {/* <Text style={styles.labels}> Enter your email </Text> */}
//                 <TextInput

//                     style={styles.inputStyle}
//                     placeholder={"Enter your email"}
//                     value={email}
//                     onChangeText={(userdata) => setEmail(userdata)}
//                     placeholderTextColor={'lightgray'}
//                     autoFocus

//                 />
//             </View>

//             <View style={styles.inputContainer}>
//                 {/* <Text style={styles.labels}> Enter your Password </Text> */}
//                 <TextInput
//                     secureTextEntry={true}
//                     style={styles.inputStyle}
//                     placeholder={"Enter your password"}
//                     value={password}
//                     onChangeText={(userdata) => setPassword(userdata)}
//                     placeholderTextColor={'lightgray'}


//                 />
//             </View>

//             <TouchableOpacity
//                 onPress={handleSignin}
//                 style={styles.buttonStyle}>
//                 <Text style={styles.incText}>Signin</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//                 onPress={handleSignup}
//                 style={styles.buttonStyle}>
//                 <Text style={styles.incText2}>SignUp</Text>
//             </TouchableOpacity>

//         </KeyboardAvoidingView>
//     )
// }

// export default Login

// const styles = StyleSheet.create({
//     maincontainer: {
//         justifyContent: 'center',
//         alignItems: 'center',

//     },
//     buttonStyle: {
//         borderRadius: 5,
//         paddingVertical: 10,
//         paddingHorizontal: 18,
//         marginVertical: 15,

//     },

//     incText: {
//         backgroundColor: 'lightblue',
//         padding: 8,
//         border: 1,
//         borderRadius: 5,
//         color: 'blue',
//         width: 185,
//         textAlign: 'center',
//     },
//     incText2: {
//         backgroundColor: 'lightgreen',
//         padding: 8,
//         border: 1,
//         borderRadius: 5,
//         color: 'blue',
//         width: 185,
//         textAlign: 'center',
//         marginVertical: -8,
//     },
//     inputContainer: {
//         marginTop: 30,

//     },
//     labels: {
//         // fontWeight: "bold",
//         fontSize: 15,
//         color: "#7d7d7d",
//         paddingBottom: 5,
//         //   fontFamily: "WorkSans_400Regular",
//         lineHeight: 25,
//     },
//     inputStyle: {
//         borderWidth: 1,
//         borderColor: "rgba(0, 0, 0, 0.3)",
//         paddingHorizontal: 15,
//         paddingVertical: 6,
//         borderRadius: 12,
//         width: 290,

//     },

// })

import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from '../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase';
const Login = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")




    useEffect(() => {
        const subscribe = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace('Home')

            }


        })
        return subscribe;


    }, [])



    // const getData = async () => {
    //     const getAsyncUser = await AsyncStorage.getItem('user')
    //     if (getAsyncUser !== null) {
    //         navigation.navigate('Home')
    //     }

    //     const getGoogleAsyncUser = await AsyncStorage.getItem('user2')
    //     console.log("The google async storage has", getGoogleAsyncUser)
    //     if (getGoogleAsyncUser) {
    //         navigation.navigate('Home')
    //     }
    // }

    const handleSignin = () => {
        auth.signInWithEmailAndPassword(email, password).then((user) => {
            console.log(user)

            navigation.replace("Home")

        }).catch((error) => {
            console.log(error.message)
        })





    }

    // const handleGoogleSignin = async () => {


    //     try {
    //         const googleLogin = await signInWithPopup(auth, provider)
    //         console.log(googleLogin)
    //         const asyncGoogleUser = await AsyncStorage.setItem('user2', googleLogin)
    //         if (asyncGoogleUser !== null) {
    //             navigation.navigate("Home")

    //         }



    //     } catch (error) {
    //         console.log(error.message)

    //     }



    // }


    const handleSignup = () => {


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
            style={styles.maincontainer}
        >


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
            <Text style={{ color: 'gray' }}>Don't have an account?</Text>

            <TouchableOpacity
                onPress={handleSignup}
                style={styles.buttonStyle}>
                <Text style={styles.incText2}>SignUp</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
                onPress={handleGoogleSignin}
                style={styles.buttonStyle}>
                <Text style={styles.incText2}>Signin with Google</Text>
            </TouchableOpacity> */}



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

