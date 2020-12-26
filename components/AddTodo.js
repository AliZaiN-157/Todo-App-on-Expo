import React, { useState } from 'react'
import { StyleSheet, Button, TextInput, Modal, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function AddTodo({ submitHandler }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState('');

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.addIcon}>

                <Ionicons
                    name="ios-add-circle-outline"
                    size={50} color="#D70F64"
                    onPress={() => setModalVisible(true)}

                />
            </View>
            <View style={{ height: 365, width: '100%', margin: 0 }}>
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
                        <Text style={styles.title}>Add Todo</Text>
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
    addIcon: {
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
        position: "absolute",
        bottom: 0,
    },
    title: {
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
