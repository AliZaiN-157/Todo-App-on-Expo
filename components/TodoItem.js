import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


const TodoItem = ({ item, pressHandler }) => {
    return (
        <View style={styles.item}>
            <Text>{item.text}</Text>
            <TouchableOpacity>
                <MaterialIcons
                    name="remove-circle"
                    size={32}
                    color="#D70F64"
                    onPress={() => pressHandler(item.key)}
                />
            </TouchableOpacity>
        </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginTop: 16,
        borderColor: 'lightgrey',
        borderRadius: 10,
        backgroundColor: 'lightgrey'
    }
})
