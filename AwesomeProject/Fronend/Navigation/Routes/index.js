import React, { Component } from 'react';  
import { Platform, StyleSheet, View } from 'react-native'; 
import SplashScreen from '../../Screens/Home';
import FirstScreen from '../../Screens/Home';

export default class Myapp extends Component 
{  
   constructor(){  
     super();  
     this.state={  
     isVisible : true,  
    }  
  }  
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 5000);  
   }  
   
    render() 
    {  
        let Splash_Screen = ( <SplashScreen /> )   
         return(  
             <View style = { styles.MainContainer }>  
               <FirstScreen />  
                 {  
                  (this.state.isVisible === true) ? Splash_Screen : null  
                }  
            </View>  
              );  
    }  
}  




 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
    },  
});  