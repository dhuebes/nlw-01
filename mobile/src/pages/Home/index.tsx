import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Image, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

const Home = () => {
  const navigation = useNavigation();
  const [keyBoardOpened, setKeyBoardOpened] = useState(false);
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf,
      city
    });
  }
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ImageBackground 
        source={require('../../assets/home-background.png')} 
        style={styles.container} 
        imageStyle={{width: 274, height: 368}}
      >
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          { !keyBoardOpened && (
            <>
              <Text style={styles.title}>Seu marketplace de coleta de resídos</Text>
              <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
            </>  
          )}
        </View>

        <TextInput 
          style={styles.input}
          onFocus = { () => setKeyBoardOpened(true)}
          onBlur = { () => setKeyBoardOpened(false)} 
          placeholder="Digite a UF"
          maxLength={2}
          autoCapitalize="characters"
          autoCorrect={false}
          value={uf}
          onChangeText={setUf}       
        ></TextInput>
        <TextInput 
          style={styles.input}
          onFocus = { () => setKeyBoardOpened(true)}
          onBlur = { () => setKeyBoardOpened(false)} 
          placeholder="Digite a cidade"
          autoCorrect={false}
          value={city}
          onChangeText={setCity}       
        ></TextInput>

        <RectButton style={styles.button} onPress={handleNavigateToPoints}>
          <View style={styles.buttonIcon}>
            <Feather name="arrow-right" color="#FFF" size={24} />
          </View>
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </RectButton>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Home;

/*


        <RNPickerSelect
          placeholder={{
            label: 'Selecione a UF',
            value: null,
            color: '#9EA0A4',
          }}
          onValueChange={(value) => console.log(value)}
          items={[
              { label: 'Football', value: 'football' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
          ]}
          style={pickerSelectStyles}
        />

        <RNPickerSelect
          placeholder={{
            label: 'Selecione a Cidade',
            value: null,
            color: '#9EA0A4',
          }}
          onValueChange={ setCity }
          onOpen = { () => setKeyBoardOpened(true)}
          onClose = { () => setKeyBoardOpened(false)} 
          items={[
              { label: 'Football', value: 'football' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
          ]}
          style={pickerSelectStyles}
        />
        

*/