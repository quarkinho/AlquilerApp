import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Alert, CheckBox } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthContext} from './Context';
import AsyncStorage from '@react-native-community/async-storage';


const DetallesDelAuto = ({ navigation, auto}) => {
    const Stack = createStackNavigator();
    const { devolverUsuario } = useContext(AuthContext);
   // const [checkBoxState, setCheckBoxState] = useState(false) ;
    const user = devolverUsuario();

    async function alquilarAuto() {
    const token = await AsyncStorage.getItem('token');
    console.log("el usuario es" + user._id);
    const requestOptions = {
      method: 'put',
      headers: {
          'Content-Type': 'application/json',
           Accept: '*',
          Authorization: token},
      body: JSON.stringify({auto: auto.id})
    };
    console.log(auto._id);
    console.log(" el auto " + auto.id )
    try{
    (fetch(`http://localhost:3000/api/users/alquilarAuto/${user._id}`, requestOptions)
    .then(res => res.json())
    .then(json => alert(json)));
    //console.log(user.token);
    }catch(error){console.log(error.message);}
  }



    return (
        <View>
            
            <Text style={styles.title}> Revise los datos antes de concretar el alquiler: </Text>
     {/* 
            <Text> DATOS DE USUARIO: </Text>
            <Text> {user.firstName} </Text>
            <Text> {user.lastName} </Text>
            <Text> {user.document} </Text>
            <Text> {user.mail} </Text>
            <Text> {user.username} </Text>

            <Text> DATOS DEL AUTO: </Text>
            <Text> {user.firstName} </Text>
            <Text> {user.lastName} </Text>
            <Text> {user.document} </Text>
            <Text> {user.mail} </Text>
            <Text> {user.username} </Text>
            <CheckBox> jejejejeje </CheckBox>
            <CheckBox checked={checkBoxState} onClick={setCheckBoxState(!checkBoxState)}> jejejejeje </CheckBox>
            <CheckBox> popo </CheckBox>
     */}       


            <Text> </Text>
            {/*{console.log(user._id)} */}
            <Button onPress={()=>{
                alquilarAuto();
                navigation.navigate('ScreenAutoAlquilado')
                }} title="Alquilar Ahora!"/>

        </View >
    );
};


const styles = StyleSheet.create({
    
    title: { fontSize: 30 },
    subtitle: { fontSize: 10 },

    borde: {
        borderWidth: 2,
        borderRadius: 30,

    },

})

export default DetallesDelAuto;
