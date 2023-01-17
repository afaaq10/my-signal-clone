// import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
// import React, { useState } from 'react'
// import { auth, database } from '../firebase';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// const Signup = ({ navigation }) => {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")


//     const handleRegister = () => {
//         createUserWithEmailAndPassword(auth, email, password).
//             then(userCredentials => {
//                 const user = userCredentials.user
//                 console.log(user)
//                 console.log("Successfully registered", user.email)
//                 Alert.alert("Successfully registered, Signin now!")
//             }).catch(error => Alert.alert(error.message))

//         navigation.navigate('Login')
//         Alert.alert("Signed up successfully. Login now!")
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
//                     placeholder={"Enter your name"}
//                     value={name}
//                     onChangeText={(userdata) => setName(userdata)}
//                     placeholderTextColor={'lightgray'}
//                     autoFocus

//                 />
//             </View>
//             <View style={styles.inputContainer}>
//                 {/* <Text style={styles.labels}> Enter your Password </Text> */}
//                 <TextInput
//                     style={styles.inputStyle}
//                     placeholder={"Enter your email address"}
//                     value={email}
//                     onChangeText={(userdata) => setEmail(userdata)}
//                     placeholderTextColor={'lightgray'}


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
//                 onPress={handleRegister}
//                 style={styles.buttonStyle}>
//                 <Text style={styles.incText2}>Register</Text>
//             </TouchableOpacity>

//         </KeyboardAvoidingView>
//     )
// }

// export default Signup

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




import { Alert, KeyboardAvoidingView, StyleSheet, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase'



const Signup = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const handleRegister = () => {
        auth.createUserWithEmailAndPassword(email, password).then((authUser) => {

            authUser.user.updateProfile({
                displayName: name,
            }).then(() => {
                console.log('name updated')
                console.log(authUser)
            }).catch((error) => {
                console.log(error.message)
            });

        }).catch((error) => {
            console.log(error.message)
        })
    }



    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={styles.maincontainer}
        >
            <StatusBar style="light" />
            <View style={styles.inputContainer}>
                {/* <Text style={styles.labels}> Enter your Password </Text> */}
                <TextInput
                    style={styles.inputStyle}
                    placeholder={"Enter your Name"}
                    value={name}
                    onChangeText={(userdata) => setName(userdata)}
                    placeholderTextColor={'lightgray'}


                />
            </View>

            <View style={styles.inputContainer}>
                {/* <Text style={styles.labels}> Enter your Password </Text> */}
                <TextInput
                    style={styles.inputStyle}
                    placeholder={"Enter your email address"}
                    value={email}
                    onChangeText={(userdata) => setEmail(userdata)}
                    placeholderTextColor={'lightgray'}


                />
            </View>

            <View style={styles.inputContainer}>
                {/* <Text style={styles.labels}> Enter your Password </Text> */}
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputStyle}
                    placeholder={"Set your password"}
                    value={password}
                    onChangeText={(userdata) => setPassword(userdata)}
                    placeholderTextColor={'lightgray'}


                />
            </View>

            <TouchableOpacity
                onPress={handleRegister}
                style={styles.buttonStyle}>
                <Text style={styles.incText2}>Register</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )

}

export default Signup

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

    incText: {
        backgroundColor: 'lightblue',
        padding: 8,
        border: 1,
        borderRadius: 5,
        color: 'blue',
        width: 185,
        textAlign: 'center',
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