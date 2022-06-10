import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./HomePage";
import Menu from './Menu';
import Register from './Register';

const stack= createNativeStackNavigator()

const MainStack = () => {
    return ( 
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen
                    name="Home"
                    component={HomePage}
                    options={{ headerShown: false }} 
                />
                <stack.Screen
                    name="Menu"
                    options={{ headerShown: false }} 
                    component={Menu}
                />
                <stack.Screen
                    name="Regsiter"
                    options={{ headerShown: false }} 
                    component={Register}
                />
                
            </stack.Navigator>
        </NavigationContainer>
     );
}

 
export default MainStack;