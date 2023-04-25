import { Pressable, Text, TextInput, TouchableOpacity, View,KeyboardAvoidingView, Image, ScrollView } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"
import tw from "twrnc"

function Register() {
    const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmpassword, setConfirmPassword] = React.useState('')
  const [gender, setGender] = React.useState('Male');
  const [age, setAge] = React.useState('')
  const [goal, setGoal] = React.useState('')
  const [weight, setWeight] = React.useState('')
  const [height, setHeight] = React.useState('')
  const [error, setError] = React.useState(null);

  const handleSignup = async () => {
    try {
      if (password === confirmpassword) {
        await createUserWithEmailAndPassword(auth, email, password, name, confirmpassword, gender, age, height, weight, goal)
          .then((userCredentials) => {
            const user = userCredentials.user;
            alert("Dear" +"" +"" +""+ name + "" +"" + "your account creation was successful.")
            props.navigation.navigate("Login")
            console.log(user.goal)
          })
          .catch(error =>
            setError(error.code, error.message))
      } else {
        setError("Passwords don't match");
      }
    } catch (e) {
      setError('There was a problem creating your account');
    }

  }
  return (
    <ScrollView>
    <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={tw`flex-1 bg-gray-200 p-2`}>
    <Image source={require("../assets/register.png")} resizeMode='contain' style={tw`w-100 h-100 self-center mt-[-15%]`} />
      <View style={tw`p-5 bg-white rounded-10 mt-[-20%] h-full`}>
      <Text style={tw`text-blue-950 font-bold text-7`}>Create Account</Text>
        {error && <Text style={styles.error}>{error}</Text>}
        <TextInput onChangeText={setName}
          value={name} 
          placeholder='Full Name' 
          placeholderTextColor={'grey'} 
          keyboardType={"default"} 
          style={tw`text-black text-lg rounded-xl mt-7 w-full p-4 bg-gray-200`}></TextInput>
        <TextInput onChangeText={setEmail}
          value={email} keyboardType="email-address"
          placeholder="Email address"
          autoCapitalize="none"
          placeholderTextColor={'grey'} 
          style={tw`text-black text-lg rounded-xl mt-7 w-full p-4 bg-gray-200`}></TextInput>
        <TextInput onChangeText={setPassword} value={password} autoCapitalize="none" placeholder='Password' 
        placeholderTextColor={'grey'} 
        secureTextEntry 
        style={tw`text-black text-lg rounded-xl mt-7 w-full p-4 bg-gray-200`}>

        </TextInput>
        <TextInput 
        onChangeText={setConfirmPassword} 
        value={confirmpassword} 
        autoCapitalize="none" 
        placeholder='Confirm Password' 
        placeholderTextColor={'grey'} 
        secureTextEntry 
        style={tw`text-black text-lg rounded-xl mt-7 w-full p-4 bg-gray-200`}>

        </TextInput>
        <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender} >
          <View style={tw `flex flex-row mt-7`}>
            <RadioButton value="Male" />
            <Text style={tw`text-xl text-gray-400 mr-7`}>Male</Text>
              <RadioButton value="Female" />
              <Text style={tw`text-xl text-gray-400`}>Female</Text>
          </View>
        </RadioButton.Group>
        <TextInput onChangeText={setAge}
          value={age} placeholder='Age' placeholderTextColor={'grey'} keyboardType={"number"} 
          style={tw`text-black text-lg rounded-xl mt-7 w-full p-4 bg-gray-200`}></TextInput>
        <TextInput onChangeText={setWeight}
          value={weight} placeholder='weight in kg' placeholderTextColor={'grey'} keyboardType={"number"} style={tw`text-black text-lg rounded-xl mt-7 w-full p-4 bg-gray-200`}></TextInput>

        <TextInput onChangeText={setHeight}
          value={height} placeholder='height in cm' placeholderTextColor={'grey'} keyboardType={"number"} 
          style={tw`text-black text-lg rounded-xl mt-7 w-full p-4 bg-gray-200`}></TextInput>

        <TextInput onChangeText={setGoal}
          value={goal} placeholder='What is your Goal' placeholderTextColor={'grey'} keyboardType={"default"} style={tw`text-black text-lg rounded-xl mt-7 w-full p-4 bg-gray-200`}></TextInput>
        <View style={tw`flex flex-col p-5 mt-5 items-center`}>
          <Text style={tw `text-gray-400 font-bold text-lg`}> By signing up,you agree to our</Text>
          <Text style={tw`text-[#191970] font-bold text-lg`}> Terms & Conditions</Text>

        </View>
        <View style={tw`flex flex-row items-center`}>
          <Text style={tw` text-sm text-gray-400 font-bold `} >Already have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={tw`text-sm text-[#191970] font-bold`}> Login</Text>
          </TouchableOpacity>
          </View>
          <View style={{ }}>
            <Pressable style={tw`bg-[#191970] w-full p-4 rounded-15 mt-7` }
              onPress={handleSignup} disabled={!email || !password || !confirmpassword}>
              <Text style={tw` text-white  text-xl font-bold text-center`}>Sign Up</Text>
            </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default Register