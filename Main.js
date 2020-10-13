import React,{Component} from 'react';
import {View, Text, StyleSheet, Button, Alert, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screen/Home';
import Second from './Screen/Second';

// Stack Navigator 객체 생성
const Stack=createStackNavigator();


export default class Main extends Component{

    render(){
        return(
            <NavigationContainer>
                {/* Stack Navigator 컴포넌트 및 화면들 지정 */}
                <Stack.Navigator screenOptions={{
                    headerTintColor:'red',
                    headerTitleStyle:{
                        fontWeight:"bold",
                        fontSize:20
                    },
                    headerStyle:{
                        backgroundColor:'yellow',
                    },
                    headerTitleAlign:"center",
                }}>
                    {/* name : 구분할 별명, component : 보여질 .js문서(import 해서 문서 찾아와야함) */}
                    <Stack.Screen name="home" component={Home} options={{headerTitle:'홈 화면', headerShown:false}}></Stack.Screen>
                    <Stack.Screen 
                        name="second" 
                        component={Second} 
                        options={{
                            title:'두번쨰',
                            headerTintColor:'green',
                            headerRight:()=>{return (<Button title="menu" onPress={()=>{Alert.alert('menu')}}></Button>);},
                            // headerTitle:()=>{return (<LogoHeader></LogoHeader>)},// 이게 가장 우선시 된다.
                        }}>
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }


}
const styles=StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'#55226688',
        padding:16
    },
    logo:{
        flexDirection:"row",
        paddingRight:8,
        alignItems:"center"
    },
    img:{
        width:30,
        height:30,

    },
    text:{
        color:'blue',
        fontWeight:"bold",
        fontSize:24,
        marginLeft:16
    }
});

class LogoHeader extends Component{
    render(){
        return(
            <View style={styles.logo}>
                <Image style={styles.img} source={require('./images/RN_logo.png')}></Image>
                <Text style={styles.text}> SECOND </Text>
            </View>
        );
    }
}