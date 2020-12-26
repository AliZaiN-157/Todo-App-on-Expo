import React, { useState } from 'react'
import { View, Button, Modal, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



export default function Header({ submitHandler }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState('');

    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos
            </Text>
            <View style={styles.addIcon}>

                <Ionicons
                    name="ios-add"
                    size={40} color="white"
                    onPress={() => setModalVisible(true)}

                />
            </View>
            <View>
                <Modal
                    animationType="fade"
                    visible={modalVisible}>
                    <TouchableOpacity style={styles.closeBtn}>
                        <Entypo
                            name="cross"
                            size={40}
                            color="black"
                            onPress={() => setModalVisible(false)} />
                    </TouchableOpacity>
                    <View style={styles.textContainer}>
                        <Text style={styles.todotitle}>Add Todo</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Add New Todo"
                            onChangeText={text => setText(text)}
                        />
                        <Button
                            title="Add Todo"
                            color="#D70F64"
                            onPress={() => submitHandler(text)}
                        />
                    </View>

                </Modal>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        height: 80,
        paddingTop: 35,
        backgroundColor: '#D70F64',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        paddingLeft: 20,
        flex: 1,
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    addIcon: {
        paddingRight: 20,
    },
    todotitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        padding: 10,

    },
    textContainer: {
        display: 'flex',
        height: 700,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderColor: 'gray', borderWidth: 1,
        width: "80%", padding: 15, margin: 20,
    },
    closeBtn: {
        alignItems: "center",
        position: "absolute",
        top: 10,
        right: 10,
    }
})
