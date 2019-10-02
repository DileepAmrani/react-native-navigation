import React from 'react'
import { Drawer } from 'native-base';
import SlideBar from '../SlideBar/SlideBar'
import Header from '../Header/Header'

export default class DrawerExample extends React.Component {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => { 
        this.drawer._root.open() 
    };
    render() { 
        return ( 
        <Drawer ref={(ref) => { this.drawer = ref; }} content={<SlideBar navigator={this.navigator} />}
         onClose={() => this.closeDrawer()} >
             <Header onclick={this.openDrawer}/>
    </Drawer> ); 
    } 
}