import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { MaterialIcons } from '@expo/vector-icons';


const BlogPage = ({ navigation }) => {
    const [blog, setBlog] = useState([])
    // const [loader, setLoader] = useState(true)



    useEffect(() => {
        const getBlog = async () => {
            const blogCollection = collection(db, 'blog')
            const querySnapshot = await getDocs(blogCollection);
            // setLoader(!loader)
            // console.log("The data read back to the user is", querySnapshot)
            setBlog(querySnapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),

                }

            )))


        }

        getBlog()


    }, [blog])


    const deleteBlog = async (id) => {

        await deleteDoc(doc(db, "blog", id));
        console.log('Blog deleted')

    }



    return (

        <View>
            <Text>BlogPage</Text>
            <ScrollView >
                {blog.map((doc, mapid) => (

                    <View key={mapid} >
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => deleteBlog(doc.id)} >
                                <MaterialIcons name="delete" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.Container}>


                            <Text>{doc.data.title}</Text>
                            <Text>{doc.data.text}</Text>
                            <Text>{doc.data.author.name}</Text>



                        </View>
                    </View>

                ))}
            </ScrollView>


        </View>
    )
}

export default BlogPage

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        margin: 15,
        backgroundColor: 'gray',
        borderRadius: 8,
        paddingBottom: 5,

    },
    button: {
        alignItems: 'flex-end',


    }
})