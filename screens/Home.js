// import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { ref, onValue } from "firebase/database";
// import { database } from '../firebase';

// const Home = ({ navigation }) => {
//     const [users, setUsers] = useState([])
//     const [name, setName] = useState("")


//     useEffect(() => {
//         getData()
//     }, [])

//     const getData = async () => {
//         await AsyncStorage.getItem('newData').
//             then(value => {
//                 if (value != null) {
//                     setName(value)
//                 }
//             }

//             )

//         const starCountRef = ref(database, 'users');
//         onValue(starCountRef, (snapshot) => {
//             const data = snapshot.val();
//             // setName(data.name)
//             console.log("The data is ", data, typeof (data))
//             const ab = []
//             for (let k in data) {
//                 ab.push(data[k])

//             }


//             setUsers(ab)

//         });


//     }

//     const removeData = async () => {
//         await AsyncStorage.removeItem('newData')
//         navigation.navigate('Login')
//         Alert.alert("Successfully logged out")

//     }

//     // console.log("The users are ", users, typeof (users))

//     return (
//         <View>
//             <Text>Home</Text>

//             <Text style={styles.userText}>List of Users : </Text>
//             {users.map((u, i) => <Text key={i} style={styles.userList}> {u.email.substring(0, u.email.indexOf("@"))}</Text>)}


//             <TouchableOpacity
//                 onPress={removeData}
//                 style={styles.buttonStyle}>
//                 <Text style={styles.incText}>Logout</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default Home

// const styles = StyleSheet.create({
//     buttonStyle: {
//         borderRadius: 5,
//         paddingVertical: 10,
//         paddingHorizontal: 18,
//         marginVertical: 15,
//         alignItems: 'center',
//         justifyContent: 'center',

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
//     userText: {


//         color: 'green',
//         marginVertical: 15,
//         textAlign: 'center',
//         fontSize: 42,
//     },
//     userList: {


//         color: 'blue',
//         textAlign: 'center',
//         fontSize: 36,
//     }

// })



import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomListItem from '../components/CustomListItem'
import { Avatar } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { collection, getDocs, doc, onSnapshot, snapshotEqual, docs } from "firebase/firestore";
const Home = ({ navigation }) => {

    const [userChat, setUserChat] = useState([])
    // const [loader, setLoader] = useState(false)

    // const [user, setUser] = useState([])




    useEffect(() => {


        db.collection('chats').onSnapshot(docSnap => {
            // setLoader(true)

            setUserChat(docSnap.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()

            })))
        });

    }, [userChat])






    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")

        })
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Signal',
            headerStyle: { backgroundColor: '#fff' },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerRight: () =>
            (
                <View style={{
                    marginLeft: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',

                    margin: 15,
                }}>



                    <TouchableOpacity

                    >
                        <AntDesign name="camerao" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        marginLeft: 25,
                    }} onPress={() => navigation.navigate("AddChat")}>

                        <MaterialCommunityIcons name="pencil" size={24} color="black" />

                    </TouchableOpacity>

                    <TouchableOpacity onPress={signOutUser} style={{ marginLeft: 15 }}>
                        <Avatar
                            rounded
                            size={39}
                            source={{ uri: 'https://c8.alamy.com/comp/G3X2R0/logout-isolated-on-premium-black-round-button-abstract-illustration-G3X2R0.jpg' }}
                        />
                    </TouchableOpacity>

                    {/* <Text>{user.map((d) => console.log(d.chatName))}</Text> */}


                </View>

            )

        })

    }, [])


    const chatFunc = (id, data) => {
        navigation.navigate('ChatScreen', {
            id: id,
            chatValue: data
        })
    }


    return (
        // loader ? <ActivityIndicator size="large" color="#00ff00" style={styles.activityloader} /> : 

        <SafeAreaView >
            <ScrollView style={styles.container}>
                {/* {userChat.length == 0 ?  */}

                {/* <Text>Click on the pencil icon to create a chat</Text> : */}

                {userChat.map((data, mapid) => { return (<CustomListItem key={mapid} id={mapid} data={data} chatFunc={chatFunc} />) })}


            </ScrollView>

            {/* <Text key={mapid}>{d.data.chatName} : */}
            {/* {userChat.map((d) => console.log(d.data.chatName))} */}
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    activityloader: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 75,

    },
    container: {
        height: '100%'
    },
    text: {
        color: 'black'

    }

})