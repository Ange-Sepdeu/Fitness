import { ScrollView, SafeAreaView, StyleSheet, Text, View, Image, } from 'react-native'
import React, { useContext } from 'react'
import FitnessCards from '../components/FitnessCards'
import { FitnessItems } from '../Context'
import { FontAwesome5 } from '@expo/vector-icons';
import { auth } from "../firebase"
import { FontAwesome } from '@expo/vector-icons';
import {
    signOut
  } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Home = (props) => {
    const { workout, calories, minutes, } = useContext(FitnessItems);
    // const navigation = useNavigation()
    // const handleSignOut = async () => {
    //         auth
    //         signOut(auth)
    //         .then(() =>{
    //             navigation.replace("Login")
    //         })
    //       .catch (error => alert(error.message)) 
    //     };
    return (
        <ScrollView style={{ marginTop: 55 }}>
            <View style={{ backgroundColor: "#191970", padding: 10, height: 200, width: "100%" }}>
                <FontAwesome5 style={{ marginTop: 5 }} 
           onPress={() => props.navigation.navigate('UserProfile')}
                    name="user" size={24} color="white" />
                    <FontAwesome name="sign-out" style={{ marginLeft:350,marginTop:-20 }}  size={24} color="white" />
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 20 }}>STAYFIT</Text>
                <Text></Text>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 17 }}>Welcome, {auth.currentUser?.email} </Text>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20, }}>
                    <View>
                        <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 18, }}>{workout}</Text>
                        <Text style={{ marginTop: 6, color: "#D0D0D0", fontSize: 17, }}>WORKOUTS</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 18, }}>{calories}</Text>
                        <Text style={{ marginTop: 6, color: "#D0D0D0", fontSize: 17, }}>KCAL</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 18, }}>{minutes}</Text>
                        <Text style={{ marginTop: 6, color: "#D0D0D0", fontSize: 17, }}>MINS</Text>
                    </View>


                </View>
                <View style={styles.container}>
                    <Image
                        style={{ width: "90%", height: 120, marginTop: 20, borderRadius: 7 }}
                        source={{
                            uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png'
                        }}
                    />
                </View>
                <FitnessCards />
            </View>
        </ScrollView>

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    }
})