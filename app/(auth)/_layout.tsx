import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

export default function _Layout() {
  return (
    <SafeAreaView>
      <Text>Auth_layout</Text>
      <Slot />
    </SafeAreaView>
  )
}