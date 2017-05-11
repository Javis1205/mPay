import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    TouchableOpacity, Text, View, Image, TextInput, Dimensions, Alert, ScrollView
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Communications from 'react-native-communications';

var {width, height} = Dimensions.get('window');
class Otp extends Component{
  constructor(props){
    super(props);
    this.state={
      code:''
    }
  }

  xacThuc(){
    if(this.state.code !== ''){
      alert('Succesfull !!!');
    }else{
      Alert.alert(
        'Thông báo',
        'Bạn vui lòng nhập đầy đủ các trường!',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <KeyboardAwareScrollView>

        <View style={styles.header}>
          <Image source={require('../Images/96.png')} />
          <Text style={styles.text01}>
          Agribank M-Plus
          </Text>
          <Text style={styles.text02}>
          Ngân hàng trong tầm tay
          </Text>
        </View>

        <View style={styles.text03}>
          <Text>
            Quý khách vui lòng chờ để nhận mã
          </Text>
          <Text>OTP qua SMS</Text>
        </View>

        <View style={styles.wrapinput}>
          <View style={styles.img}>
            <Image source={require('../Images/1x-otpcode.png')} />
          </View>

          <View style={styles.input}>
            <TextInput
              placeholder='Nhập mã OTP'
              secureTextEntry={true}
              style={styles.textinput}
              onChangeText={(code) => this.setState({code})}
              value={this.state.code}
              underlineColorAndroid='transparent'
            />
          </View>
        </View>

        <Text style={styles.time}>
          Thời gian chờ: <Text style={{color:'black'}}>90</Text> giây
        </Text>
        
      </KeyboardAwareScrollView>

      <View style={styles.btnext}>
        <TouchableOpacity style={styles.next}
          onPress={()=>{this.xacThuc()}}
        >
          <Text style={styles.textnext}>
            TIẾP TỤC
          </Text>
        </TouchableOpacity>
        </View>
      </View>   
    );
  }
}
const styles = {
  container:{
    flex:1, 
    paddingTop:(height*5)/100, 
    alignItems:'center'
  },
  header:{
    marginBottom:(height*5)/100, 
    alignItems:'center'
  },
  text01:{
    color:'#B2193F', 
    fontSize:18, 
    fontWeight:'bold', 
    margin:3
  },
  text02:{
    color:'gray', 
    fontSize:12
  },
  text03:{
    marginBottom:15, 
    alignItems:'center'
  },
  wrapinput:{
    flexDirection:'row', 
    borderColor: '#D5D5D5', 
    borderWidth:1, 
    borderRadius:15, 
    marginBottom:15
  },
  img:{
    justifyContent:'center', 
    alignItems:'center', 
    width:50
  },
  input:{
    borderColor:'#D5D5D5', 
    borderLeftWidth:1
  },
  textinput:{
    height: 40, 
    width:(width*65)/100, 
    padding:10, 
    fontSize:16
  },
  time:{
    color:'gray', 
    textAlign:'center'
  },
  btnext:{
    justifyContent:'flex-end', 
    marginBottom:(height*5)/100
  },
  next:{
    width:(78*width)/100, 
    backgroundColor:'#B2193F'
  },
  textnext:{
    padding:10, 
    color:'#fff', 
    fontSize:16, 
    fontWeight:'bold', 
    textAlign:'center'
  }
}
export default Otp;