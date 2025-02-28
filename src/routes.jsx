import { StatusBar, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { theme, options } from "./config";
import { stackScreen } from "./screens";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer theme={theme}>
            <StatusBar
                barStyle={
                    Platform.OS === "ios" ? "dark-content" : "light-content"
                }
                backgroundColor="black"
            />
            <Stack.Navigator
                screenOptions={options.stack}
                initialRouteName="LogIn">
                {[...Object.keys(stackScreen)].map((e, _i) => (
                    <Stack.Screen
                        key={`stack-${e}`}
                        name={e}
                        component={stackScreen[e]}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
