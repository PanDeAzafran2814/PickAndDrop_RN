import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

const Register = ({navigation}) => {
    return ( 
        <View style={styles.maincontainer}>

            <View style={styles.inputcontainermain}>
                <View style={styles.inputcontainer}>
                    <Text style={styles.inputText}>
                        Nombre
                    </Text>
                    <TextInput
                        style={styles.inputinput}
                        placeholder='correo@correo.com'
                    />
                </View>
                <View style={styles.inputcontainer}>
                    <Text style={styles.inputText}>
                        Apellidos
                    </Text>
                    <TextInput
                        style={styles.inputinput}
                        placeholder='correo@correo.com'
                    />
                </View>
                <View style={styles.inputcontainer}>
                    <Text style={styles.inputText}>
                        Correo
                    </Text>
                    <TextInput
                        style={styles.inputinput}
                        placeholder='correo@correo.com'
                    />
                </View>
                <View style={styles.inputcontainer}>
                    <Text style={styles.inputText}>
                        Telefono
                    </Text>
                    <TextInput
                        style={styles.inputinput}
                        placeholder='correo@correo.com'
                    />
                </View>
                <View style={styles.inputcontainer}>
                    <Text style={styles.inputText}>
                        Contraseña
                    </Text>
                    <TextInput
                        style={styles.inputinput}
                        placeholder='correo@correo.com'
                    />
                </View>
            </View>
            <View style={styles.btncontainer}>
                <View style={{width:'60%',marginBottom:20}}>
                    <Button
                        title='Registrar'
                        color={'#5BC5EB'}
                    />
                </View>
                <View style={{width:'60%'}}>
                    <Button
                        title='Regresar'
                        color={'#5BC5EB'}
                        onPress={()=>{
                            navigation.navigate("Home")
                        }}
                    />
                </View>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    maincontainer:{
        width:'100%',
        height:'100%',
        justifyContent:'center'
    },
    LogoConainer:{
        width:'100%',
        height:'30%',
        alignItems:'center',
        marginTop:20,
    },
    inputcontainer:{
        marginBottom:10
    },
    inputcontainermain:{
        width:'100%',
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
 
export default Register;