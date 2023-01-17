import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import React from 'react'
import { Image } from 'react-native';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`h-full bg-white`}>
            <View style={tw`p-4`}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: 'contain' }}
                    source={{ uri: 'http://links.papareact.com/gzs' }}

                />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})


