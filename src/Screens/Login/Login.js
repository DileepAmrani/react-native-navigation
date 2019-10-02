import React, { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet, Image, KeyboardAvoidingView, ScrollView, SafeAreaView } from 'react-native';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            age: '',
            password: '',
        };
    }

    onLogin() {
        const { username, email, age, password } = this.state;
        console.log('name', `${username} 'email' ${email} 'age' ${age} 'password' ${password}`);
        if(email === 'a@gmail.com' && password === '12345'){
            this.props.navigation.navigate('Home')
        }
    }
    

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <ScrollView style={styles.scrollView}>
                    <SafeAreaView style={styles.container}>

                        <View style={styles.container}>
                            <Image style={{ width: 300, height: 100 }}
                                source={{ uri: 'data:image/png;base64,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' }} />
                            <Text style={styles.Text}>Log In</Text>
         

                            <TextInput
                                value={this.state.email}
                                onChangeText={(email) => this.setState({ email })}
                                placeholder={'Email'}
                                style={styles.input}
                            />
                        

                            <TextInput
                                value={this.state.password}
                                onChangeText={(password) => this.setState({ password })}
                                placeholder={'Password'}
                                secureTextEntry={true}
                                style={styles.input}
                            />

                            <Button
                                title={'Login'}
                                style={{ width: '100%' }}
                                onPress={this.onLogin.bind(this)}
                            />
                        </View>
                        <Text onPress={()=> this.props.navigation.navigate('Signup')}>Don't have account Sign Up?</Text>
                    </SafeAreaView>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 340,
        height: 44,
        padding: 10,
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5
    },
    Text: {
    }
});