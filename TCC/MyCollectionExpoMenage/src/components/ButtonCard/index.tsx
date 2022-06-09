import style, {Container, ImageCard, ContainerCard, ItemTitle, ItemTitleBold} from './styles';
import {DefaultButton} from "../DefaultButton";
import {Alert, NativeModules, TouchableWithoutFeedback, LayoutAnimation} from "react-native";
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);


interface ItensProps {
    id: number;
    img: string;
    name: string;
    description: string;
    value: number;
    type: string;
}
interface ButtonCardProps {
    item: ItensProps;
    addCart: (id:number)=>void;
    goDetail: (id:number)=>void;
    setActive: (id?:number)=>void;
    activeId?: number;
}

export const ButtonCard: React.FC<ButtonCardProps> = ({item, goDetail, addCart, activeId, setActive}) => {
    const changeActive = ()=>{
        LayoutAnimation.linear()
        if(activeId===item.id)
            setActive()
        else setActive(item.id)
    }

    return (
        <TouchableWithoutFeedback onPress={changeActive}>
            <ImageCard source={{uri: item.img}} >
                {activeId===item.id&&(
                    <TouchableWithoutFeedback onPress={changeActive}>
                        <ContainerCard>
                            <ItemTitle ellipsizeMode={'clip'} numberOfLines={2}>{item.name}</ItemTitle>
                            <ItemTitleBold>R$ {item.value.toFixed(2).toString().replace('.', ',')}</ItemTitleBold>
                            <DefaultButton title={'DETALHES'}  onPress={goDetail as any}/>
                            <DefaultButton title={'ADD CART'}  onPress={addCart as any}/>
                        </ContainerCard>
                    </TouchableWithoutFeedback>
                )}
            </ImageCard>
        </TouchableWithoutFeedback>

    )
}
