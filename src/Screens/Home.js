import React from 'react'
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import DrawerExample from '../Components/Drawer/Drawer'
import { ScrollView } from 'react-native-gesture-handler'
import Slider from '../Components/Slider/Slider'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            Product: [
                {
                    img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Saraiki_Topi_%28Sindhi_Cap%29.jpg",
                    name: 'Cap',
                    prize: 250,
                },
                {
                    img:  "https://images-na.ssl-images-amazon.com/images/I/615q4ly6-mL._UX425_.jpg" ,
                    name: 'Sindhi Cap',
                    prize: 4500
                },
                {
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzsHQj4EajZXuhwKO5L6nx7M3VhR4RWbWNKPhg6PiIXjnj83e" ,
                    name: 'Stylish Cap',
                    prize: 700
                },
                {
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsXOXZCfIGK_a3AcnSuYk0S_Ux6qr1txLWpfzz_t56vAsZkbq",
                    name: 'Bad Cap',
                    prize: 150
                }


            ]
        }
    }
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <DrawerExample />
                </View>
                <View style={{ marginTop: 60 }}>
                    <Slider />
                </View>

                <View style={styles.ProductContainer}>
                  
                  
                    <ScrollView horizontal={true}>
                        {
                            this.state.Product.map((v, i)=> {
                                return  <TouchableOpacity onPress={() => this.props.navigation.navigate('Product',v)} key={i}>
                            <View style={styles.Product} >
                                <Image style={styles.Image}
                                    source={{ uri: v.img }}
                                    />
                                <Text>Name: {v.name}</Text>
                                <Text>Prize: Rs: {v.prize}</Text>
                            </View>
                        </TouchableOpacity>
                    
                })
                    }

                    </ScrollView>

                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    },
    ProductContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    Image: {
        width: 165,
        height: 150,
    },
    Product: {
        borderWidth: 2,
        borderColor: 'black',
        height: 200,
        width: 170,
        margin: 5,
        marginTop: 20,

    }
});

export default Home