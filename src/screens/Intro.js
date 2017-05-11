import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import {connect} from 'react-redux';
import { gotomainscreen } from '../actions/AnotherActions';
var { height, width } = Dimensions.get('window');
class Intro extends Component {
    gotoMainScreen(){
        this.props.gotomainscreen();
    }
    static navigationOptions = {
        headerVisible: false,
    };
    render() {
        return (
            <Swiper style={styles.container} dot={<View style={styles.dot} />}
                activeDotStyle={{backgroundColor:'#AE1C3F'}}
                paginationStyle={styles.pagination}
                autoplay
                autoplayTimeout={4}
            >
                <View style={styles.slide1}>
                    <Image source={require('../Images/welcome.png')}
                        style={{ width, height }}
                    >
                        <View style={styles.wrap}>
                            <Text style={styles.text01}>
                                Chào mừng
                            </Text>
                            <Text style={styles.text02}>
                                Chào mừng bạn đã đến với
                            </Text>
                            <Text style={styles.text02}>dịch vụ tiện ích Agribank - Mplus.</Text>
                            <Text style={styles.text02}>Hãy khám phá !</Text>
                        </View>
                        <View style={styles.bt01}>
                            <TouchableOpacity style={styles.bt02} onPress={()=>this.gotoMainScreen()}>
                                <Text style={styles.bt03}>BẮT ĐẦU</Text>
                            </TouchableOpacity>
                        </View>
                    </Image>
                </View>
                
                <View style={styles.slide2}>
                    <Image source={require('../Images/muavemaybay.png')}
                        style={{ width, height }}>
                        <View style={styles.wrap}>
                            <Text style={styles.text01}>
                                Mua vé máy bay
                            </Text>
                            <Text style={styles.text02}>
                                Dễ dàngdàng đặt mua vé máy bay 
                            </Text>
                            <Text style={styles.text02}>cho chuyến đi của Bạn và người thân.</Text>
                            <Text style={styles.text02}>Hãy trải nghiệm !</Text>
                        </View>
                        <View style={styles.bt01}>
                            <TouchableOpacity style={styles.bt02} onPress={()=>this.gotoMainScreen()}>
                                <Text style={styles.bt03}>BẮT ĐẦU</Text>
                            </TouchableOpacity>
                        </View>
                    </Image>
                </View>
                <View style={styles.slide3}>
                    <Image source={require('../Images/muahangtructuyen.png')}
                        style={{ width, height }}>
                        <View style={styles.wrap}>
                            <Text style={styles.text01}>
                                Mua hàng trực tuyến
                            </Text>
                            <Text style={styles.text02}>
                                Mua sắm online mọi lúc, mọi nơi
                            </Text>
                            <Text style={styles.text02}>thật dễ dàng và thảnh thơi.</Text>
                            <Text style={styles.text02}>Hãy thử ngay !</Text>
                        </View>
                        <View style={styles.bt01}>
                            <TouchableOpacity style={styles.bt02} onPress={()=>this.gotoMainScreen()}>
                                <Text style={styles.bt03}>BẮT ĐẦU</Text>
                            </TouchableOpacity>
                        </View>
                    </Image>
                </View>
                <View style={styles.slide3}>
                    <Image source={require('../Images/thanhtoanhoadon.png')}
                        style={{ width, height }}>
                        <View style={styles.wrap}>
                            <Text style={styles.text01}>
                                Thanh toán hoá đơn
                            </Text>
                            <Text style={styles.text02}>
                                Thanh toán hoá đơn hàng tháng
                            </Text>
                            <Text style={styles.text02}>một cách nhanh chóng, tiện lợi nhất.</Text>
                            <Text style={styles.text02}>Hãy tận dụng !</Text>
                        </View>
                        <View style={styles.bt01}>
                            <TouchableOpacity style={styles.bt02} onPress={()=>this.gotoMainScreen()}>
                                <Text style={styles.bt03}>BẮT ĐẦU</Text>
                            </TouchableOpacity>
                        </View>
                    </Image>
                </View>
                <View style={styles.slide3}>
                    <Image source={require('../Images/naptiendienthoai.png')}
                        style={{ width, height }}>
                        <View style={styles.wrap}>
                            <Text style={styles.text01}>
                                Nạp tiền điện thoại
                            </Text>
                            <Text style={styles.text02}>
                                Nạp tiền cho dế yêu của Bạn mọi lúc,
                            </Text>
                            <Text style={styles.text02}>mọi nơi, không bỏ lỡ ngày khuyến mại.</Text>
                            <Text style={styles.text02}>Hãy bắt đầu !</Text>
                        </View>
                        <View style={styles.bt01}>
                            <TouchableOpacity style={styles.bt02} onPress={()=>this.gotoMainScreen()}>
                                <Text style={styles.bt03}>BẮT ĐẦU</Text>
                            </TouchableOpacity>
                        </View>
                    </Image>
                </View>
                
            </Swiper>
        );
    }
}
const styles = {
    container: {
    },
    dot:{
        backgroundColor:'#dddddd', 
        width: 8, 
        height: 8,
        borderRadius: 4, 
        marginLeft: 3, 
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 3
    },
    pagination:{
        position:'absolute', 
        bottom:(height*25)/100
    },
    wrap:{
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 170 
    },
    text01:{
        color: '#fff', 
        fontSize: 20, 
        fontWeight: 'bold',
        marginBottom: 15
    },
    text02:{
        color: '#fff', 
        fontSize: 16
    },
    bt01:{
        alignItems:'center', 
        marginBottom:(height*10)/100
    },
    bt02:{
        backgroundColor:'#AE1C3F', 
        width:(width*70)/100
    },
    bt03:{
        padding:10, 
        fontSize:16, 
        color:'#fff', 
        textAlign:'center'
    }
};
export default connect(null,{gotomainscreen})(Intro);