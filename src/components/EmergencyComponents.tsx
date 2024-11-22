import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import SwipeComponent from './SwipeComponent'
import { initialData } from '../utils/Data'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const EmergencyComponents = () => {
    const [data, setData] = useState(initialData);
    const removeItem = (id: any) => {
        setData(data.filter(item => item.id !== id));
    };
    const renderItem = ({ item }: any) => (
        <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.profileImage} />
            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                {item.verified && <AntDesign name="checkcircle" size={14} color="#007BFF" style={styles.icon} />}
            </View>
            <TouchableOpacity onPress={() => removeItem(item.id)}>
                <AntDesign name="close" size={20} color="gray" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <View style={styles.driverInfo}>
                    <View style={styles.imgBg}>
                        <Image source={{ uri: 'https://randomuser.me/api/portraits/women/4.jpg' }} style={styles.imgBg} />
                    </View>
                    <View style={styles.driverDetails}>
                        <View style={styles.driverName}>
                            <Text style={styles.driverNameInfo}>Ajay Sharma</Text>
                            <AntDesign name='checkcircle' color='#007BFF' size={12} style={styles.driverDetails} />
                        </View>
                        <View style={styles.carDetails}>
                            <Text>Tata Nexon -</Text>
                            <Text>AXX 370</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.ratingsCon}>
                    <Text style={styles.ratingIcon}>⭐</Text>
                    <Text style={styles.ratings}>4.5</Text>
                </View>
            </View>




            <View style={styles.contactCon}>

                <TouchableOpacity style={styles.contact}>
                    <Feather name='phone-call' size={20} color="#007BFF" />
                    <Text style={styles.contactText}>Contact</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>

                <TouchableOpacity style={styles.location}>
                    <Entypo name='location-pin' size={20} color="red" />
                    <Text style={styles.locationText}>Live Location</Text>
                </TouchableOpacity>


            </View>

            <View>
                <View style={styles.contactsTitle}>
                    <Text style={styles.emergencyContact}>Emergency Contacts</Text>
                    <TouchableOpacity>
                        <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={styles.flatlist}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <SwipeComponent />
            <View style={styles.descBox}>
                <Text style={styles.descText}>
                    If you call 100 in an emergency, the notification message will be shared with your emergency contact
                </Text>
            </View>

        </View>
    )
}

export default EmergencyComponents

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        padding: windowHeight * 0.02,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        // marginHorizontal: windowWidth * 0.05,
        marginVertical: windowHeight * 0.0,
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    driverInfo: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    imgBg: {
        height: windowHeight * 0.07,
        width: windowWidth * 0.14,
        backgroundColor: 'gray',
        borderRadius: 100,
        borderColor: 'red',
        borderWidth: 1

    },
    driverName: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    carDetails: {
        flexDirection: 'row'
    },
    ratingsCon: {
        flexDirection: 'row'
    },
    driverDetails: {
        marginLeft: windowWidth * 0.02
    },
    contactCon: {
        width: windowWidth * 0.9,
        padding: windowHeight * 0.005,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 12,
        marginTop: windowHeight * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: windowHeight * 0.02
    },
    line: {
        height: windowHeight * 0.08,
        borderWidth: 0.5,
        borderColor: 'lightgray',
    },
    contactsTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    editText: {
        textDecorationLine: 'underline',
        color: '#007BFF',
        fontWeight: 'bold'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    flatlist: {
        height: windowHeight * 0.15,
        marginBottom: windowHeight * 0.02,
        marginTop: windowHeight * 0.02

    },
    driverNameInfo: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    vehicleNameInfo: {
        fontSize: 14,
        color: 'gray',
        fontWeight: 'bold'
    },
    ratingIcon: {
        marginRight: windowWidth * 0.01
    },
    ratings: {
        color: 'gray',
        fontSize: 14,
        fontWeight: 'bold'
    },
    contactText: {
        color: '#007BFF',
        fontSize: 14,
        fontWeight: '600'
    },
    locationText: {
        color: 'red',
        fontSize: 14,
        fontWeight: '600'
    },
    contact: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    location: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: windowWidth * - 0.06
    },
    emergencyContact: {
        fontWeight: 'bold',
        fontSize: 16
    },
    icon: {
        marginLeft: windowWidth * 0.02
    },
    descBox: {
        marginTop: windowHeight * 0.01

    },
    descText: {
        color: 'gray',
        fontSize: 12,
        fontWeight: '400'
    }
})