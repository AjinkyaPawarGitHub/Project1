import { ScrollView, StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

export default function ContactList() 
{
  
  const contacts = [
    {
      uid: '1',
      name: 'John Doe',
      statusDescription: 'Front-end Developer',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      uid: '2',
      name: 'Jane Smith',
      statusDescription: 'Graphic Designer',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      uid: '3',
      name: 'Alice Johnson',
      statusDescription: 'Product Manager',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      uid: '4',
      name: 'Michael Brown',
      statusDescription: 'Software Engineer',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      uid: '5',
      name: 'Emily Williams',
      statusDescription: 'UI/UX Designer',
      imageUrl:'https://picsum.photos/200/300',
    },
    {
      uid: '6',
      name: 'David Wilson',
      statusDescription: 'Marketing Specialist',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      uid: '7',
      name: 'Sophia Martinez',
      statusDescription: 'Data Analyst',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      uid: '8',
      name: 'Daniel Taylor',
      statusDescription: 'Content Writer',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      uid: '9',
      name: 'Olivia Johnson',
      statusDescription: 'HR Manager',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      uid: '10',
      name: 'William Anderson',
      statusDescription: 'Business Analyst',
      imageUrl: 'https://picsum.photos/200/300',
    },
  ];
  
  
  
  return (
    <View>
      <Text style={styles.headerText}>ContactList</Text>
      <ScrollView 
      style={styles.container} 
      scrollEnabled={false}>
       {contacts.map(({uid,name,statusDescription,imageUrl})=>(
        <View key={uid} style={styles.userCard}>

          <Image 
          source=
          {{
              uri:imageUrl
          }}

          style={styles.userImage}
          />
          <View>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userStatus}>{statusDescription}</Text>
          </View>

        </View>
       ))} 
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create
({
  headerText:
  {
     fontSize:24,
     fontWeight: 'bold',
     paddingHorizontal:8,
  },
  container:
  {
    paddingHorizontal:16,
    marginBottom:4

  },
  userCard:
  {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:3,
    backgroundColor: 'silver',
    padding:4,
    borderRadius:10
    
  },
  userImage:
  {
    width:60,
    height:60,
    borderRadius:60/2,
    marginRight:14,
    

  },
  userName:
  {

    fontSize:16,
    fontWeight:'600',
    color: 'maroon'

    

  },
  userStatus:
  {
    fontSize:12,
    //backgroundColor: 'black',
    color: 'darkgreen'

  },
})