import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Dimensions, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import cl from 'clsx';
import loginGraphic from '@/assets/images/login-graphic.png';
import { images } from '@/constants';

export default function _Layout() {
  return (
<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' :'height'}>
     <ScrollView className='bg-white h-full' keyboardShouldPersistTaps='handled'>
        <View className='w-full relative' style={{height:Dimensions.get('screen').height/2.5}}>
<ImageBackground source={images.loginGraphic} className='size-full rounded-b-lg ' resizeMode='stretch' />
<Image source={images.logo} className = "self-center size-48 absolute -bottom-16 z-10"/>
        </View>
     </ScrollView>
      <Slot />
    </KeyboardAvoidingView>
  )
}