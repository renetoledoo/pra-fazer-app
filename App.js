import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
       <View style={styles.formLogo}>
       <Image style={styles.logo} source={require('./assets/logo-pra-fazer.png')}/>
       </View>
      
      <TextInput style={styles.btnEntrada} placeholder='E-mail'>
      </TextInput>
      
      <TextInput style={styles.btnEntrada} placeholder='Senha'>
      </TextInput>

      <TouchableOpacity style={styles.btnEntrar} >
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>
        
         <Text style={styles.btnTextSecundario}>Criar Usuário</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6600',
    alignItems: 'center',
    justifyContent: 'center',
  },

  form: {
    padding: 20,
    width: '97%'
  },

  btnEntrada: {
    backgroundColor: '#FFF',
    padding: 15,
    marginTop: 20,
    borderRadius: 10
  },
  formLogo: {
    alignItems: 'center',
    marginBottom: 20
   },

   btnEntrar: {
    backgroundColor: '#070A52',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
   },
   btnText: {
     color: '#FFF',
     fontSize: 20,
     textAlign: 'center'
   },

   btnTextSecundario: {
    marginTop: 20,
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
   }
});
