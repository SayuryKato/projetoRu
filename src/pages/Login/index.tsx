import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Style from './style';
import Input from '../../components/CampInput';

export default function Login() {
  const [isSelected, setSelection] = useState(false);

  const toggleCheckbox = () => {
    setSelection(!isSelected);
  };
  return (
    <KeyboardAvoidingView style={Style.conteainer}>
      <View style={Style.containImg}>
        <Image
          source={require('../../assets/logoUea.png')}
          style={Style.imgLogo}
        />
        <Text style={Style.textSz}>Login RU</Text>
      </View>

      <View>
        <Text style={Style.label}>E-mail*</Text>
        <Input label="Digite seu e-mail" />

        <Text style={Style.label}>Senha*</Text>
        <Input label="********" />

        <View style={Style.textSeparado}>
          <View style={Style.textJunto}>
            <TouchableOpacity
              style={[Style.checkbox, isSelected && Style.checkboxSelected]}
              onPress={toggleCheckbox}
            />
            <Text style={Style.fontMin}> Lembre-se de mim</Text>
          </View>
        </View>

        <View>
          <View style={Style.textJunto}>
            <Text style={Style.fontNormal}>Não tem uma conta? </Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
