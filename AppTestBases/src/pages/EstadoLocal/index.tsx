import React, {useState} from "react";
import {Text, TextInput} from "react-native";

export const EstadoLocal: React.FC = () => {

    /*
     useState é um hook que retorna um array com primeiro elemento o estado e o segundo
     é uma funçao para alterar o estado, pois o estado nao pode ser mudado diretamente.
    * */
    const [texto, setTexto] = useState<string>('')

    /*
    * o React precisa  retornar sempre um nó, para que isso seja possivel nós podemos envolver por um elemento como View
    * No exemplo Abaixo temos um fragment representado por <></> que seria uma forma de retornar um nó sem precisar envolver o JSX com outro elemento
    * Estamos utilizando o conceito de componente controlado, isso ocorre quando controlamos o que setamos e visualizamos no componente, ao colcoar o valor do estado
    * no value o TextInput e a funcao de alterar o estado no onchangeText, estamos controlando o valor do componente
    * o um lado legal desse metodo é que temos um feedback instantaneo da alteracao do estado, porem cada alteracao a tela é renderizada novamente.
    * */
    return (
        <>
            <Text>seu texto: {texto}</Text>
            <TextInput value={texto} style={{backgroundColor: '#f4f4f4', padding: 10, width: '100%'}}
                       onChangeText={setTexto}></TextInput>
        </>
    )
}
