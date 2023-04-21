import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {

  const [nome, setNome] = useState('')
  const [cardapio, setCardapio] = useState(true)
  const [ligar, setLigar] = useState(true)
  const [usuario, setUsuario] = useState(true)

  const clicarBotao = () => {
    setLigar(!ligar)
  }
  const bemVindo = () => {
    setUsuario(!usuario)
  }
  const cardapioAparece = ()=>{
    setCardapio(!cardapio)
  }


  return (


    <ScrollView>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <View style={styles.barra}>


            <View style={styles.pad}>
              <Text style={styles.titulo}>PAD A RIA</Text>
            </View>


            <View style={styles.icones}>
              <TouchableOpacity onPress={clicarBotao}>
                <Ionicons name="person-outline" size={35} color="black" style={styles.ionicons} />
              </TouchableOpacity>
              <Ionicons name="cart-outline" size={35} color="black" style={styles.ionicons} />
              <Ionicons name="list-outline" size={35} color="black" style={styles.ionicons} />
            </View>

            {
              ligar ?
                <Text> </Text>
                :
                <View style={styles.usuario}>
                  <View style={styles.inputusuario}>
                    <TextInput
                      placeholder='Digite seu nome'
                      style={styles.textousuario}
                      onChangeText={setNome}
                    />
                  </View>
                  <View style={styles.divbotao}>
                    <Button
                      style={styles.botao}
                      title='Bem Vindo'
                      color={'#AD333C'}
                      onPress={bemVindo}
                    />
                  </View>

                </View>

            }

            <View style={styles.ou}>
              <View style={styles.linhas_laterais}></View>
              <View>
                <FontAwesome5 name="bread-slice" size={24} color="black" />
              </View>
              <View style={styles.linhas_laterais}></View>
            </View>

            {
              usuario ?
                <Text> </Text>
                :
                <View style={styles.divbemvindo}>
                  <View style={styles.linhas_bemvindo}></View>
                  <View>
                    <Text style={styles.bem_vindo_usuario}>Bem Vindo, {nome}!</Text>
                  </View>
                  <View style={styles.linhas_bemvindo}></View>
                </View>

            }

          </View>
          <View style={styles.descricao}>
            <Text style={styles.textopadaria}>Somos a PAD A RIA!</Text>
            <Text style={styles.qualidade}>“Qualidade e Tradição Pernambucana.”</Text>
          </View>


          <View style={styles.imagem}>
            <Image style={styles.principal} source={require('./assets/principl.jpeg')} />
          </View>
          <View style={styles.descricao}>
          <Text style={styles.textopadaria}>Conheça o nosso maravilhoso cardápio</Text>
          </View>

          <View style={styles.conteinerCardapio}>
         <TouchableOpacity style={styles.botaoCardapio}>
           <View style={styles.div_texto_cardapio}>
             <Text style={styles.texto_cardapio}>CARDÁPIO</Text>
           </View>
         </TouchableOpacity>
              </View>



          <View style={styles.horarios}>
            <Text style={styles.funcionamento}>Horário de Funcionamento</Text>
            <Text style={styles.diashorario}>Segunda a sexta: 6:00 - 21:00</Text>
            <Text style={styles.diashorario}>Sábado e domingo: 8:00 - 19:00</Text>
          </View>


          <View style={styles.local_contato}>
            <View style={styles.imagem2}>
              <Image style={styles.imglocal} source={require('./assets/localizacao.jpeg')} />
            </View>



            <View style={styles.textolocal}>
              <Text style={styles.localizacao_contato}>Localização</Text>
              <Text style={styles.localinfo}>Rua um, nº2 - Recife- PE</Text>
              <Text style={styles.localinfo}>CEP: 101110-11</Text>
              <Text style={styles.localinfo}>Ponto de referência: Ao lado da rua dois</Text>
              <Text style={styles.localizacao_contato}>Contato</Text>
              <Text style={styles.localinfo}>pad_a_ria@hotmail.com</Text>
              <Text style={styles.localinfo}>Fone: 81 99988-1803</Text>
            </View>
          </View>

          <View style={styles.equipe}>
            <View style={styles.imagem3}>
              <Image style={styles.padeiroimg} source={require('./assets/padeir.jpeg')} />
            </View>



            <View style={styles.equipe_padeiro}>
              <Text style={styles.padeiro}>Conheça nosso padeiro</Text>
              <Text style={styles.infopadeiro}>Um especialista na cozinha na arte da Panificação com grande habilidade na fabricação de roquinhas e donuts.Trabalha conosco desde a abertura em 1987 Especialista em carbonara.</Text>

            </View>

          </View>
          <View style={styles.marcos}>
            <Text style={styles.padeiro_nome}>Marcos,2022</Text>
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
    fontFamily: '',
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
  usuario: {
    width: '80%',
    alignItems: 'center'
  },
  inputusuario: {
    width: '100%',
    alignItems: 'center',
    marginBottom: '5%'
  },

  textousuario: {
    display: 'flex',
    borderColor: '#D72145',
    borderWidth: 1,
    width: '80%',
    fontSize: 20,
    height: 50,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
    justifyContent: 'center'

  },
  divbotao: {
    width: '40%',
  },

  botao: {
    fontSize: 20
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
  divbemvindo: {
    flexDirection: 'row',
    marginTop: '1%',
    marginBottom: '1%'

  },
  linhas_bemvindo: {
    justifyContent: 'center',
    height: 1,
    marginTop: '6%',
    borderWidth: 1,
    borderColor: '#AD333C',
    paddingLeft: '6%',
    margin: 7

  },

  bem_vindo_usuario: {
    fontSize: 35,
    color: '#AD333C',
    fontStyle: 'italic',
  },

  descricao: {
    alignItems: 'center',
  },

  textopadaria: {
    fontSize: 40,
    color: '#AD333C',
    fontStyle: 'italic',
    textAlign:'center'

  },

  qualidade: {
    fontSize: 30,
    paddingTop: 20,
    textAlign: 'center',
    color: '#AD333C',
    fontStyle: 'italic',
  },

  imagem: {
    width: '100%',
    marginBottom: 5,
    marginTop: 5,

  },

  principal: {
    width: '100%',
    height: 500

  },
  conteinerCardapio: {
    width:'100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginBottom:'10%',
    marginTop:'5%'
  },
  
  botaoCardapio: {
    width:'50%',
    padding: '4%',
    alignItems:'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D72145',
    backgroundColor:'#fff'
  },

  div_texto_cardapio: {
    
    color: '#fff',
    
  },
  texto_cardapio : {
    
    color: '#AD333C',
    fontSize: 30,
  },
  horarios: {
    alignItems: 'center',
    width: '100%',
    marginBottom: '7%',
    marginTop: '5%'
  },

  funcionamento: {
    fontSize: 35,
    color: '#AD333C',
    fontStyle: 'italic',
    textAlign: 'center',
    width: '80%'
  },

  diashorario: {
    width: '50%',
    fontSize: 25,
    paddingTop: 20,
    textAlign: 'center',
    color: '#AD333C',
    fontStyle: 'italic',
  },

  local_contato: {
    width: '100%',
    alignItems: 'center'
  },
  imagem2: {
    width: '100%',
    marginBottom: 5,
    marginTop: 5,

  },
  imglocal: {
    width: '100%',
    height: 500

  },
  textolocal: {
    position: 'absolute',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#AD333C',
    backgroundColor: '#FCF1E0',
    alignItems: 'center',
    width: '80%',
    marginBottom: '1%',
    marginTop: '5%',
    bottom: '20%'
  },
  localizacao_contato: {
    fontSize: 30,
    color: '#AD333C',
    fontStyle: 'italic',
    textAlign: 'center',
    width: '80%',

  },
  localinfo: {
    width: '75%',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    color: '#AD333C',
    fontStyle: 'italic',
  },

  equipe: {
    flexDirection: 'row',
    width: '100%',
    margin: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  equipe_padeiro: {
    alignItems: 'center',
    width: '55%',
    marginBottom: '1%',


  },
  padeiro: {
    fontSize: 25,
    color: '#AD333C',
    fontStyle: 'italic',
    textAlign: 'center',
    width: '100%',
  },
  infopadeiro: {
    width: '100%',
    fontSize: 18,
    paddingBottom: 10,
    textAlign: 'center',
    color: '#AD333C',
    fontStyle: 'italic',
  },
  marcos: {
    position: 'absolute',
    bottom: '0.8%',
    left: '10%',
  },
  padeiro_nome: {

    fontSize: 18,
    paddingBottom: 10,
    textAlign: 'center',
    color: '#AD333C',
    fontStyle: 'italic',

  },

});

