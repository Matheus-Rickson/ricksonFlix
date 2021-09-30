import react from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
import { DrawerActions } from '@react-navigation/routers';

const drawer = createDrawerNavigator();

function Routes() {
    return (
        <drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Movies" component={Movies} />
        </drawer.Navigator>
    )
}

export default Routes;