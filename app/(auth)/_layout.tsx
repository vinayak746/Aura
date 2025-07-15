import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import cl from 'clsx';

export default function _Layout() {
  return (
<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' :'height'}>
     <ScrollView className='bg-white h-full' keyboardShouldPersistTaps='handled'>
        <View className='w-full relative' style={{height:Dimensions.get('screen').height/2.5}}>

        </View>
     </ScrollView>
      <Slot />
    </KeyboardAvoidingView>
  )
}