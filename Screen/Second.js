import React,{Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export default class Second extends Component{

    // 여기서 스타일을 주려면...

    render(){

        // 전달받은 파라미터 데이터의 값들을 간결하게 작성하기 위해
        // 구조분해할당문법 사용
        const {name,age}=this.props.route.params;

        return(
            <View style={styles.root}>
                <Text style={styles.text}>Second Screen</Text>
                <Button title="go back" onPress={()=>{this.props.navigation.navigate('home')}}></Button>
                <Button title="go back02" onPress={()=>{this.props.navigation.goBack()}}></Button>
                <Button title="go to Top Screen" color="indigo" onPress={()=>{this.props.navigation.popToTop()}}></Button>
                
                {/* <Text style={styles.text}>{this.props.route.params.name}, {this.props.route.params.age}</Text> */}
                <Text style={styles.text}>{name} , {age}</Text>

                {/* navigate()할때 전달된 데이터 객체는 자동으로  */}
                {/* 이 컴포넌트의 this.props변수 안에 route라는 이름의 멤버변수 안에 저장되어 있음 */}
                
            </View>
        );
    }

    // render()메소드 전에 자동 호출되는 라이프사이클 메소드
    componentDidMount(){
        this.props.navigation.setOptions({title:"Good!"});
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