import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const field = (props) => {
    return (
        <TextInput {...props} style={{ fontSize:18,borderRadius: 100,width:"58%", color: "black", paddingHorizontal: 10, width: "78%",backgroundColor:"rgb(220,220,220",marginVertical:15 ,marginTop:30}}
         placeholderTextColor="grey"></TextInput>
  );
};

export default field

const styles = StyleSheet.create({})