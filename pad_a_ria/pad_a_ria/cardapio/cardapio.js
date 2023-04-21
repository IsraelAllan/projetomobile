import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const lista = [
    {
      id:'1', nome:'Pão   -',
      preco:'R$10,00 (Kg)'},

    {id:'2', nome:'Donuts  -',
    preco:'R$5,00'},
    
    {id:'3', nome:'Croissant  -',preco:'R$8,00 '},

    {id:'4', nome:'Coxinha  -',preco:'R$7,00'},

    {id:'5', nome:'Água  -',preco:'R$2,50'},

    {id:'6', nome:'Queijo  -', preco:'R$20,00 (Kg)'},

    {id:'7', nome:'Presunto  -', preco:'R$25,00 (Kg)'},

    {id:'8', nome:'Sonho  -',preco:'R$3,00'},

    {id:'9', nome:'Red Velvet  -',preco:'R$10,00'},

    {id:'10', nome:'Ovos  -',preco:'R$20,00'},

    {id:'11', nome:'Bolo  -',preco:'R$15,00'},

    {id:'12', nome:'Cuscuz  -',preco:'R$6,00'},



  ]



  return (


    <ScrollView>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <View style={styles.barra}>


            <View style={styles.pad}>
              <Text style={styles.titulo}>PAD A RIA</Text>
            </View>

            <View style={styles.icones}>
              <TouchableOpacity >
                <Ionicons name="person-outline" size={35} color="black" style={styles.ionicons} />
              </TouchableOpacity>
              <Ionicons name="cart-outline" size={35} color="black" style={styles.ionicons} />
              <Ionicons name="list-outline" size={35} color="black" style={styles.ionicons} />
            </View>

            <View style={styles.ou}>
              <View style={styles.linhas_laterais}></View>
              <View>
                <FontAwesome5 name="bread-slice" size={24} color="black" />
              </View>
              <View style={styles.linhas_laterais}></View>
            </View>

          <View style={styles.cardapio}>
           <Text style={styles.textcardapio}>Cardápio</Text>
           </View>
            
           <FlatList
         data={lista}
         keyExtractor={(item)=>item.id}
         showsVerticalScrollIndicator={false}
         renderItem={({item})=>
         <View style={styles.listagem}>
         <TouchableOpacity style={styles.caixalista}>
           
           <View style={styles.botaolista}>
         
             <Text style={styles.textolista}>{item.nome}</Text>
             <Text style={styles.textopreco}>{item.preco}</Text>
           </View>
         </TouchableOpacity>
              </View>
               }
         />


          </View>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </ScrollView>


  );
}

const styles = StyleSheet.create({

  safearea: {
    flex: 1
  },

  container: {
    flex: 1,
    backgroundColor: '#F9E1BD55',
    alignItems: 'center',
    paddingTop: '10%'
  },

  barra: {
    alignItems: 'center',
    width: '100%',
    paddingBottom: '3%',
    paddingTop: '5%'
  },

  pad: {
    display: 'flex',
    borderRadius: 40,
    borderColor: '#AD333C',
    borderBottomWidth: 3,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderStyle: 'solid',
    width: '80%',
    height: 76,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%'
  },

  titulo: {
    fontSize: 45,
    fontStyle: 'italic',
    fontWeight: '400',
   
    color: '#AD333C',
  },

  icones: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  ionicons: {
    marginLeft: 20,
    marginRight: 20

  },
  cardapio:{
    display: 'flex',
    borderRadius:100,
    borderColor: '#AD333C',
    borderBottomWidth: 3,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderStyle: 'solid',
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
   marginTop:'4%',
  },

  textcardapio:{
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#AD333C',
  },


  ou: {
    flexDirection: 'row',
    marginTop: '1%',
    marginBottom: '1%'

  },

  linhas_laterais: {
    justifyContent: 'center',
    height: 1,
    marginTop: '3%',
    borderWidth: 1,
    borderColor: '#000000',
    paddingLeft: '35%',
    margin: 7

  },
listagem: {
    width:'100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  
   caixalista: {
    width:'80%',
    padding: '3%',
    paddingLeft: '8%',
    paddingRight: '8%',
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D72145',
  },
 botaolista: {
    justifyContent: 'center',
    color: '#fff',
    marginLeft: 30,
    flexDirection:'row',
   
  },
  textolista: {
    color: 'black',
    fontSize: 20,
  },
  textopreco:{
    color: 'black',
    fontSize: 20,
    marginLeft: 15,
    
  }
});

