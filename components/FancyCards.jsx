import { Text, StyleSheet, View , Image, TextInput} from 'react-native'
import React, { Component } from 'react'

export default class FancyCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Trending Places !!!!</Text>
        <View style={[styles.card , styles.cardElevated]}>
            <Image
             source={{uri: 'https://reactjs.org/logo-og.png'}}

             style={styles.cardImage}
            
            />

            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>React Native</Text>
                <Text style={styles.cardLabel}>Mobile Application Development</Text>
                <Text style={styles.cardDes}>React Native is an open-source framework developed by Facebook that allows you to build mobile applications using JavaScript and React, the popular web library. </Text>
                <Text style={styles.cardFooter}>More Information</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create
({
    headingText:
    {
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal:8,


    },

    card:
    {
        height:360,
        weight:350,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,

    },
    cardElevated:
    {
        backgroundColor:'#DDBB99',
        borderRadius:6,
        color:'#2E2723',
        elevation:6,
        shadowOffset:
        {
            width:1,
            height:1

        }

    },
    cardImage:
    {
        height: 180,
        marginBottom:8,
        borderRadius:6,
        borderTopLeftRadius:0,
        borderTopRightRadius:60
        
    },
    cardBody:
    {
        flex:1,
        flexGrow:1,
        paddingHorizontal:12

    },
    cardTitle:
    {
        color:'#800000',
        fontSize:26,
        fontWeight:'bold',
        marginBottom:6,


    },
    
    cardLabel:
    {
        color:'#800000',
        fontSize:20,

        

    },
    cardDes:
    {
        color:'#800000',
        fontSize:12,
        marginTop:4,

    },
    cardFooter:
    {
        color:'#800000',
        fontSize:22,
        marginTop:10,

    }
})