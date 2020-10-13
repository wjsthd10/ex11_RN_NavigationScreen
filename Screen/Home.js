import React,{Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.text}>Home Screen</Text>
                <Button title="Go to Second" onPress={this.clickBtn}></Button>
            </View>
        );
    }
    clickBtn=()=>{
        // react-navigation에서 네비게이팅하는 코드
        // [Navigator에 의해 보여지는 컴포넌트들은 자동으로 props변수안에 navigation이라는 객체가 전달되어 있음]
        // this.props.navigation.navigate('second');
        // 전달받은 navigation안에 .navigate()에 'name값'을 지정하여 .js문서를 열어준다.

        // 현재 컴포넌트를 화면전환하면서 finish()하고 싶다면 navigate()사용하면 안된다.
        // this.props.navigation.replace('second');// .replace()사용하면 finish와 같은 문법처럼 사용할 수 있음

        // 화면전환시 데이터 넘겨주기 [android Extra Data와 같음]
        this.props.navigation.navigate('second',{name:'sam',age:20});
    }
}
const styles=StyleSheet.create({
    
    root:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:30,
        fontWeight:"bold",
        padding:8
    }
})