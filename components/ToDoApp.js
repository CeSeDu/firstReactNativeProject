import React, {useState} from 'react';
import {View,Text, ScrollView, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard} from 'react-native';
import Task from './ToDo App/Task';


const ToDoApp = () => {

const [task, setTask] = useState('');
const [taskItems, setTaskItems] = useState([]);

const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask('');
}

const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
}


return (
    <View style={styles.container}>
        <ScrollView
        contentContainerStyle={
       {     flexGrow: 1}
        }
        keyboardShouldPersistTaps='handled'
        >
            <View style={styles.tasksWrapper}>
                <Text>Today's Tasks</Text>
                <View>
                    {
                        taskItems.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                    <Task text={item} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView>

        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
        <TextInput 
        style={styles.input} 
        placeholder={'Write a task'} 
        value={task} 
        onChangeText={text => setTask(text)}/>
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
        </KeyboardAvoidingView>

    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#E8EAED',
    },
    tasksWrapper: {
        paddingTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {

    }
})
export default  ToDoApp;
