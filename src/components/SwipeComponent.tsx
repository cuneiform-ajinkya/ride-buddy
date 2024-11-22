import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Linking,
    Dimensions,
    Animated,
} from 'react-native';
import {
    GestureHandlerRootView,
    PanGestureHandler,
} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign'

const SCREEN_WIDTH = Dimensions.get('window').width;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SwipeComponent = () => {
    const translateX = new Animated.Value(0);

    const onGestureEvent = Animated.event(
        [{ nativeEvent: { translationX: translateX } }],
        { useNativeDriver: false }
    );

    const onSwipeEnd = (event: any) => {
        const { translationX } = event.nativeEvent;

        if (translationX > SCREEN_WIDTH * 0.6) {

            Linking.openURL('tel:100');
        }


        Animated.timing(translateX, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    return (
        <GestureHandlerRootView style={styles.root}>
            <View style={styles.swipeArea}>
                <PanGestureHandler
                    onGestureEvent={onGestureEvent}
                    onEnded={onSwipeEnd}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Animated.View
                            style={[
                                styles.sosButton,
                                { transform: [{ translateX }] },
                            ]}>
                            <Text style={styles.buttonText}>SOS</Text>

                        </Animated.View>
                        <Text style={styles.title}>Swipe Right to Call Emergency</Text>
                        <View style={styles.icon}>
                            <AntDesign name='right' color="#FFFFFF" size={16} />
                            <AntDesign name='right' color="#FFFFFF" size={16} />
                        </View>


                    </View>
                </PanGestureHandler>
            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 20,
        marginLeft: windowWidth * 0.02,
        marginTop: windowHeight * 0.02,
        color: '#FFFFFF'
    },
    swipeArea: {
        width: windowWidth * 0.95,
        height: windowHeight * 0.07,
        backgroundColor: 'red',
        borderRadius: 35,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    sosButton: {
        width: windowWidth * 0.2,
        height: windowHeight * 0.05,
        backgroundColor: '#FFFFFF',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    buttonText: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        flexDirection: 'row',
        marginLeft: windowWidth * 0.03
    }
});

export default SwipeComponent;
