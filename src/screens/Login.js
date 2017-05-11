import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    TouchableOpacity, Text, View, Image, TextInput, Dimensions, Alert, ScrollView
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Communications from 'react-native-communications';
import { gotootp } from '../actions/AnotherActions';
import { connect } from 'react-redux';

var {width, height} = Dimensions.get('window');
class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      phone:'',
      password:'',
      cmnd:''
    }
  }

  Login(){
    if(this.state.phone && this.state.password && this.state.cmnd !== ''){
        this.props.gotootp();
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
      <View style={{flex:1}}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>

            <View style={styles.header}>
              <Image source={require('../Images/96.png')} />
              <Text style={styles.text01}>
              Agribank M-Plus
              </Text>
              <Text style={styles.text02}>
              Ngân hàng di động
              </Text>
            </View>

            <View style={styles.wrapinput}>
              <View style={styles.img}>
                <Image source={require('../Images/1x-sdt.png')} />
              </View>
              <View style={styles.input}>
                <TextInput
                  style={styles.textinput}
                  placeholder='Nhập số điện thoại'
                  onChangeText={(phone) => this.setState({phone})}
                  value={this.state.phone}
                  underlineColorAndroid='transparent'
                />
              </View>
            </View>

            <View style={styles.wrapinput}>
              <View style={styles.img}>
                <Image source={require('../Images/1x-password.png')} />
              </View>
              <View style={styles.input}>
                <TextInput
                  style={styles.textinput}
                  placeholder='Nhập mật khẩu'
                  secureTextEntry={true}
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                  underlineColorAndroid='transparent'
                />
              </View>
            </View>

            <View style={styles.wrapinput}>
              <View style={styles.img}>
                <Image source={require('../Images/1x-cmnd.png')} />
              </View>
              <View style={styles.input}>
                <TextInput
                  style={styles.textinput}
                  placeholder='Nhập số CMND/Hộ chiếu'
                  onChangeText={(cmnd) => this.setState({cmnd})}
                  value={this.state.cmnd}
                  underlineColorAndroid='transparent'
                />
              </View>
            </View>

            <TouchableOpacity style={styles.btlogin} onPress={()=>{this.Login()}} >
              <Text style={styles.textlogin}>
                ĐĂNG NHẬP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:15}}>
              <Text style={{}}>
                Quên mật khẩu?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{}} >
              <Text style={{}}>
                Chưa đăng ký tại Agribank?<Text style={{color:'#B2193F'}}> Đăng ký</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      
        <View style={{justifyContent:'flex-end'}}>
                <TouchableOpacity style={styles.cal} onPress={() => Communications.phonecall('1900545527', true)}>
                <Image source={require('../Images/1x-hotline.png')} />
                <View style={styles.phone}>
                    <Text style={styles.textphone}>
                    Hotline 1900 54 55 27
                    </Text>
                </View>
                </TouchableOpacity>
        </View> 
      </View>   
    );
  }
}
const styles = {
  container:{
    paddingTop:(height*5)/100,
    alignItems:'center'
  },
  header:{
    marginBottom:(height*3)/100, 
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
  btlogin:{
    width:(78*width)/100, 
    backgroundColor:'#B2193F'
  },
  textlogin:{
    padding:10, 
    color:'#fff', 
    fontSize:16, 
    fontWeight:'bold', 
    textAlign:'center'
  },
  cal:{
    flexDirection:'row',
  },
  phone:{
    justifyContent:'center', 
  },
  textphone:{
    color:'#B2193F', 
    fontSize:13
  }
}
export default connect(null,{ gotootp})(Login);;