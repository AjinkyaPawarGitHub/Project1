import { StyleSheet, Text, View ,ScrollView } from 'react-native'
import React from 'react'

export default function Elevted() {
  return (
    <View>
      <Text style={styles.headerText}>Elevted</Text>

      <ScrollView style={styles.container} horizontal={true} >
        
        <View>
            <Text style={[styles.card, styles.cardElevted]}>Tap</Text>
        </View>

        <View>
            <Text style={[styles.card, styles.cardElevted]}>Me</Text>
        </View>

        <View>
            <Text style={[styles.card, styles.cardElevted]}>To</Text>
        </View>

        <View>
            <Text style={[styles.card, styles.cardElevted]}>Scroll</Text>
        </View>

        <View>
            <Text style={[styles.card, styles.cardElevted]}>More</Text>
        </View>

        <View>
            <Text style={[styles.card, styles.cardElevted]}>EMOJI</Text>
        </View>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create
({ 
    container: 
    {
        padding:7,


    },

    headerText: 
    {
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal:8,
        paddingTop:33,
    },

    card: 
    { 
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        margin:8,
        borderRadius:8,
        

    },
    cardElevted: 
    {
        backgroundColor:'#CAD5E2',
        color:'black',
        paddingTop:40,
        paddingHorizontal:29,
        elevation:4


    },
})