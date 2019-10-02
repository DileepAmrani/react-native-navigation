import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'


class Product extends React.Component {
    render() {
        console.log(this.product)
        return (
            <View>
                <TouchableOpacity >
                    <View style={styles.Product} >
                        <Image style={styles.image}
                           source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzsHQj4EajZXuhwKO5L6nx7M3VhR4RWbWNKPhg6PiIXjnj83e" }}
                        />
                        <Text>Name: Cap</Text>
                        <Text>Prize: Rs: 370</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Image: {
        width: 300,
        height: 150,
    },
    Product: {
        borderWidth: 2,
        borderColor: 'black',
        height: 200,
        width: 170,
        margin: 10,
        marginTop: 20,

    }
});

export default Product