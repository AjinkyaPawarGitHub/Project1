import React from 'react';
import { StyleSheet, Text, View , SafeAreaView ,ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import Elevted from './components/Elevted';
import FancyCards from './components/FancyCards';
import Action from './components/Action';
import ContactList from './components/ContactList';



export default function App()
 {
  return(
   
      <SafeAreaView>

        <ScrollView >

         <FlatCards/>

         <Elevted/>

         <FancyCards/>
         
         <ContactList/>

         <Action/>

         

        </ScrollView>
      </SafeAreaView>

   )
}