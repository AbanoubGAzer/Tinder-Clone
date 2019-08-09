import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';

export default createAppContainer(
  createSwitchNavigator({
    //carregado na ordem que é colocada
    //createStackNavigation cria o proprio voltar nativo do sistema
    //createBottoomTabNavigation criar um tab de navegação
    //createDrawerNavigation criar um menu lateral arrastavel
    Login,
    Main,
  })
)
