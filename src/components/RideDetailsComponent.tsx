import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Linking } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const RideDetailsComponent = () => {
    const handleCustomerCarePress = () => {
        const phoneNumber = '1234567890';
        Linking.openURL(`tel:${phoneNumber}`).catch((err: any) => console.error('Failed to open dialer:', err));
    };
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.arrivalText}>Arriving in 45 Minutes</Text>
                <TouchableOpacity style={styles.customerCareButton} onPress={handleCustomerCarePress}>
                    <Text style={styles.customerCareText}>Customer Care</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.locationSection}>
                <View style={styles.locationRow}>
                    <Text style={styles.timeText}>15:00</Text>
                    <View style={styles.dotLineContainer}>
                        <View style={styles.dot} />
                        <View style={styles.dashedLine} />
                    </View>
                    <Text style={styles.locationText}>1205,Appolo DB Hostel Indore,MP</Text>
                </View>

                <View style={styles.locationRow}>
                    <Text style={styles.timeText}>22:00</Text>
                    <View style={styles.dotLineContainer}>
                        <View style={styles.dot} />
                    </View>
                    <Text style={styles.locationText}>Raja Bhoj Bhopal, MP</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        padding: windowHeight * 0.012,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginTop: windowHeight * - 0.05,


    },
    arrivalText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    customerCareButton: {

        paddingVertical: windowHeight * 0.007,
        borderWidth: 1,
        borderColor: '#007BFF',
        borderRadius: 12,
        alignItems: 'center',
        width: windowWidth * 0.35,
        backgroundColor: "#007BFF"
    },
    customerCareText: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: '600',
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    locationSection: {
        marginVertical: 10,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: windowHeight * 0.02

    },
    dotLineContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        position: 'relative',
        marginTop: windowHeight * 0.0
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'gray',
        zIndex: 1,
    },
    dashedLine: {
        width: 2,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderStyle: 'dashed',
        position: 'absolute',
        top: 10,
    },

    timeText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    locationText: {
        fontSize: 14,
        color: '#555',
    },

});

export default RideDetailsComponent;