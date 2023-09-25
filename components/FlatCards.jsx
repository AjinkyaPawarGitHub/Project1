import { Text, View , StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class FlatCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headerText}>FlatCards</Text>


        <View style={styles.container} >
           <View style={[styles.card , styles.cardOne]}>
             <Text>Red</Text>
             
           </View>

           <View style={[styles.card , styles.cardTwo]}>
             <Text>Blue</Text>
             
           </View>

           <View style={[styles.card , styles.cardThree]}>
             <Text>Green</Text>
             
           </View>

           
           <View style={[styles.card , styles.cardFour]}>
             <Text>Yellow</Text>
             
           </View>

           

           
        </View>


      </View>
    )
  }
}

const styles = StyleSheet.create
({

    headerText: 
    {
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal:8,
        paddingTop:33,
    },

    container:
    {
        flex:1,
        flexDirection:'row',
        padding:7,

    },

    card: 
    {   flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius:4,
        margin:8,

    },

    cardOne: 
    {
        backgroundColor:'#EF5354',

    },

    cardTwo: 
    {
        backgroundColor:'#000080',

    },

    cardThree: 
    {
        backgroundColor:'#228B22',

    },

    cardFour: 
    {
        backgroundColor:'#FFFF00',

    },


})

export default FlatCards