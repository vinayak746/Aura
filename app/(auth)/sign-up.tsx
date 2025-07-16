import { View, Text, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import CustomInput from '@/components/CustomInput'
import CustomButton from '@/components/CustomButton'
import { createUser } from '@/lib/appwrite'



const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const submit = async()=>{
    const { name, email, password } = form;
    if(!form.name || !form.email || !form.password)
      return Alert.alert("Error","Please enter valid email and password");
    setIsSubmitting(true);
    try{
      //Call Appwrite Sign Up Function
      await createUser({
        email,
        password,
        name,

      })

      router.replace('/')
    }catch(error){
      Alert.alert('Error',error.message)
    }finally{
      setIsSubmitting(false);
    }
    }
  return (
    <View className='gap-10 bg-white rounded-lg p-5 mt-5'>


         <CustomInput
          placeholder="Enter your Name"
          value={form.name}
          onChangeText={(text) => setForm((prev)=>({...prev, name: text}))}
          label="Full Name"
          
        
        />
         <CustomInput
          placeholder="Enter your email"
          value={form.email}
          onChangeText={(text) => setForm((prev)=>({...prev, email: text}))}
          label="Email"
          keyboardType="email-address"
        
        />
         <CustomInput
          placeholder="Enter your password"
          value={form.password}
          onChangeText={(text) => setForm((prev)=>({...prev, password: text}))}
          label="Password"
          secureTextEntry={true}        
        />
        <CustomButton
        title='Sign Up'
        isLoading={isSubmitting}
        onPress={submit}
        />
        <View className='flex justify-center mt-5 flex-row gap-2'>
          <Text className='base-regular text-gray-100'>Already have an account?</Text>
        <Link href='/sign-in' className='base-bold text-primary' >Sign In</Link>
        </View>
        

    </View>
  )
}

export default SignUp