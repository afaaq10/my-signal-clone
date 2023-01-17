import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { Avatar, ListItem } from 'react-native-elements';

const CustomListItem = ({ id, data, chatFunc }) => {



    return (
        <ListItem key={id} onPress={() => chatFunc(id, data.data.chatName)} bottomDivider={true}>


            <Avatar

                rounded
                source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' }}

            />

            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    {data.data.chatName}


                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    Welcome to the Chat and i have used a very very nice mode and a feature
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({

})