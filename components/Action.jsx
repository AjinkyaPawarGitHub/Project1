import { Linking, StyleSheet, Text, View , Image , TouchableOpacity} from 'react-native'
import React from 'react'

const Action = () => {

  function openWebsites(websiteLink) 
  {
     Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>

      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text  style={styles.headerText}>Whats New in Javascript 21 = ES12</Text>
        </View>
          <Image
          source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
          style={styles.cardImage}
          /> 

          <View style={styles.cardBody}>
            <Text numberOfLines={3}>JavaScript is a versatile and widely-used programming language that powers the interactive and dynamic behavior of websites and web applications. Developed in the mid-1990s, JavaScript has grown to become one of the foundational technologies of the modern web. It is an essential tool for front-end development, enabling developers to create rich user experiences, interactive forms, animations, and more.

            </Text>
          </View>

          <View style={styles.cardFooter}>

            <TouchableOpacity onPress={()=>openWebsites('https://www.youtube.com/watch?v=eL5qYJ7y68k&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=16')}>
              <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={()=>openWebsites('https://www.instagram.com/ajinkyaa____')}>
              <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
            
          </View>
          

      </View>
    </View>

  )
}

export default Action

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
    height:460,
    weight:350,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16,


    
    

  },
  elevatedCard:
  {
    backgroundColor:'#DDBB99',
    elevation:6,
    shadowOffset:
    {
      height:1,
      width:1,
    },
    shadowColor:'#333',
    shadowOpacity:0.4,
    

  },
  headingContainer:
  {
    height:40,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  headerText:
  {
    color:'black',
    fontSize:16,
    fontWeight:'600'

  },
  cardImage:
  {
    height:300,

  },
  cardBody:
  {
    padding:10,

  },
  cardFooter:
  {
    padding:8,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-evenly'

  },
  socialLinks:
  {
    fontSize:16,
    color:'blue',
    backgroundColor:'silver',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6,


  },
  
})