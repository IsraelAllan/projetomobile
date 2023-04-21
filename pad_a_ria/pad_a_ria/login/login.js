import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.pad}>
        <Text style={styles.titulo}>PAD A RIA</Text>
        
      </View>

      <View style={styles.caixa}>
        <Text style={styles.login}>Login</Text>

        <View style={styles.icone}>
          <Ionicons name="mail" size={22} color="black" />
          <TextInput style={styles.place}
            placeholder='Coloque o seu e-mail'
          />
        </View>

        <View style={styles.icone}>
          <Ionicons name="key-outline" size={22} color="black" />
          <TextInput style={styles.place}
            placeholder='Coloque a sua senha'
          />
        </View>

        <View style={styles.Botao}>
          <View style={styles.entrar}>
            <TouchableOpacity style={styles.botao_entrar}>
              <Text style={styles.title}> Entrar </Text>
            </TouchableOpacity>
          </View>


          <View style={styles.googlefacebook}>
            <TouchableOpacity style={styles.botaogf}>
              <View style={styles.gf_conteudo}>
                <Ionicons name="logo-google" size={22} color="black" />
              </View>
              <Text style={styles.texto_botao_gf}> Entrar com Google </Text>
            </TouchableOpacity>
          </View>



          <View style={styles.googlefacebook}>
            <TouchableOpacity style={styles.botaogf}>
              <View styles={styles.gf_conteudo}>
                <Ionicons name="logo-facebook" size={22} color="black" />

              </View>
              <Text style={styles.texto_botao_gf}> Entrar com Facebook </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.criarconta}>
            <TouchableOpacity>
              <Text style={styles.textocriarconta}> Crie a sua conta!</Text>
            </TouchableOpacity>
          </View>

        </View>


      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FADFB9',
    alignItems: 'center',
    justifyContent: 'center',


  },

  pad: {
    borderRadius: 40,
    borderColor: '#AD333C99',
    borderBottomWidth: 4,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    width: 300,
    height: 76,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:'10%'
  },

  titulo: {
    fontSize: 38,
    color:'#AD333C',
    fontWeight:'500',
    fontStyle:'italic',
   

  },

  icone: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#d3d3d3 ',
    borderRadius: 10,
    borderWidth: 1,
    width: 300,
    height: 50,
    margin: 10,
    backgroundColor: '#FFFFFF',
    paddingLeft:10
  },

  login: {
    fontSize: 40,
    margin: 10,
    fontWeight:'400'
    

  },
  Botao: {
    width: '100%',
    alignItems: 'center',

  },

  entrar: {
    width: '100%',
    alignItems: 'center',
  },
  botao_entrar: {
    padding: 20,
    backgroundColor: "#E9606A",
    alignContent: "center",
    width: '70%',
    borderRadius: 10,
  },

  title: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "center",
  },

  googlefacebook: {
    padding: 16,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "#D9D9D9",
    width: '50%',
    borderRadius: 10,
    marginTop: '3%',

  },

  botaogf: {
    flexDirection: 'row'
  },

  texto_botao_gf: {
    textAlignVertical: 'center'
  },
  gf_conteudo: {
    flexDirection: 'row'
  },


  place: {
    margin: 10,
  },

  caixa: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 40,
    width: '90%',
    height: 500,
    

  },
  criarconta:{
    margin:15,
    
  },

  textocriarconta:{
    fontSize:17,
    color:'#AD333C'
  }


});