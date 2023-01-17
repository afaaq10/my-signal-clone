import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'


const data = [

    {
        id: '12',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },

    {
        id: '13',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatScreen'
    }

]



const NavOptions = () => {
    const navigation = useNavigation()
    return (
        <FlatList

            data={data}
            horizontal
            renderItem={({ item }) =>
            (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                    <View >
                        <Image
                            style={{ width: 100, height: 100, resizeMode: 'contain' }}
                            source={{ uri: item.image }}

                        />
                        <Text style={tw`m-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon style={tw`p-2 bg-black w-10 mt-4 rounded-full `}
                            color='white'
                            name='arrowright'
                            type='antdesign'
                        />
                    </View>
                </TouchableOpacity>
            )
            }
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({})