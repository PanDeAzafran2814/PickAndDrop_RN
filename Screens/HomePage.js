import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const HomePage = ({navigation}) => {
    return ( 
        <View style={styles.maincontainer}>
            <View style={styles.LogoConainer}>
                <Image 
                    source={require("../assets/LogoDefault.png")}
                    style={{width:250,height:250}}
                />
            </View>
            <View style={styles.inputcontainermain}>
                <View style={styles.inputcontainer}>
                    <Text style={styles.inputText}>
                        Usuario
                    </Text>
                    <TextInput
                        style={styles.inputinput}
                        placeholder='correo@correo.com'
                    />
                </View>
                <View style={styles.inputcontainer}>
                    <Text style={styles.inputText}>
                        Usuario
                    </Text>
                    <TextInput
                        style={styles.inputinput}
                        placeholder='correo@correo.com'
                    />
                </View>
            </View>
            <View style={styles.btncontainer}>
                <View style={{width:'60%'}}>
                    <Button
                        title='Iniciar Sesion'
                        color={'#5BC5EB'}
                        onPress={()=>{
                            navigation.navigate("Menu")
                        }}
                    />
                </View>
                <View style={{display:'flex',flexDirection:'row',marginTop:10,marginBottom:10}}>
                    <Image
                        style={styles.ImgSocial}
                        source={{uri: 'https://www.seekpng.com/png/small/190-1905801_facebook-button-png-facebook-icon-blue-circle.png'}}
                    />
                    <Image
                        style={styles.ImgSocial}
                        source={{uri: 'https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png'}}
                    />
                </View>
                <View style={{alignItems:"center"}}>
                    <Text style={{color:'#09ACB0'}}>No tienes una cuenta?</Text>
                    <Text 
                        style={{color:'#09ACB0',fontWeight: "bold"}}
                        onPress={()=>{
                            navigation.navigate("Regsiter")
                        }}
                    >
                        Registrate aqui
                    </Text>
                </View>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    maincontainer:{
        width:'100%',
        height:'100%'
    },
    LogoConainer:{
        width:'100%',
        height:'40%',
        alignItems:'center',
        marginTop:20,
    },
    inputcontainer:{
        marginBottom:10
    },
    inputcontainermain:{
        width:'100%',
        marginTop:30,
        marginLeft:50,
        marginRight:50,
    },
    inputText:{
        color:'#09ACB0',
        marginBottom:10,
        paddingLeft:10
    },
    inputinput:{
        width:'80%',
        height:50,
        color:'#09ACB0',
        borderColor:'#09ACB0',
        borderWidth:1,
        borderRadius:50,
        paddingLeft:10
    },
    btncontainer:{
        alignItems:'center',
        marginTop:10
    },
    ImgSocial:{
        width:30,
        height:30,
        marginRight:10,
        marginLeft:10,
    },

})
 
export default HomePage;