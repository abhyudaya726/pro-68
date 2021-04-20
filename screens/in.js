import * as React from 'react';
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native';

export default class InstagramScreen extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Instagram</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    button:{
        alignSelf:'center',
        alignContent:'center',
        alignItems:'center',
        marginTop:'200',
    },
    buttonText:{
        fontSize:25,
    }
});