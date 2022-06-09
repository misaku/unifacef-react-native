import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {EstadoLocal} from "./src/pages/EstadoLocal";
import {useState} from "react";
import {CicloDeVida} from "./src/pages/CicloDeVida";
import {ToDoList} from "./src/pages/ToDoList";
import {EstadoGlonbal} from "./src/pages/EstadoGlonbal";
import {TesteContextApiProvider} from "./src/pages/EstadoGlonbal/hooks/ContexApi";
import ProviderContexZustend from "./src/pages/EstadoGlonbal/hooks/ContextZuztandStore";

export default function App() {
    const [mount, setMount] = useState<boolean>(false)
    const invertMount = () => setMount(current => !current)
    return (
        <ProviderContexZustend initialNumber={5}>
            <TesteContextApiProvider>
                <View style={styles.container}>
                    {/*<Text>Open up App.tsx to start working on your app!</Text>*/}
                    {/*<StatusBar style="light" backgroundColor={'#f00'}/>*/}
                    {/*<EstadoLocal/>*/}
                    {/*<Text>Montar Pagina Ciclo de Vida</Text>*/}
                    {/*<Switch value={mount} onChange={invertMount}/>*/}
                    {/*{mount && (<CicloDeVida/>)}*/}
                    {/*<ToDoList titulo={'teste'}/>*/}
                    <EstadoGlonbal />
                </View>
            </TesteContextApiProvider>
        </ProviderContexZustend>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
