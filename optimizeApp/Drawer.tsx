import { createDrawerNavigator } from '@react-navigation/drawer';
import ValueNotOptmize from './pages/ValueNotOptmize';
import ValueOptmize from './pages/ValueOptmize';
import FormNotOptmize from './pages/FormNotOptmize';
import FormOptmize from './pages/FormOptmize';
import FlatListNotOptmize from './pages/FlatListNotOptmize';
import FlatListOptmize from './pages/FlatListOptmize';
import FlatListOptmize2 from './pages/FlatListOptmize2';
import FlatListNotOptmize2 from './pages/FlatListNotOptmize2';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName={'Feed'}>
      <Drawer.Screen name="Valores não otimizados" component={ValueNotOptmize} />
      <Drawer.Screen name="Valores otimizados" component={ValueOptmize} />
      <Drawer.Screen name="Formulário não otimizado" component={FormNotOptmize} />
      <Drawer.Screen name="Formulário otimizado" component={FormOptmize} />
      <Drawer.Screen name="Lista não otimizada" component={FlatListNotOptmize} />
      <Drawer.Screen name="Lista otimizada" component={FlatListOptmize} />
      <Drawer.Screen name="Lista Não otimizada 2" component={FlatListNotOptmize2} />
      <Drawer.Screen name="Lista otimizada 2" component={FlatListOptmize2} />
    </Drawer.Navigator>
  );
}