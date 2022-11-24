import {StyleSheet} from 'react-native'
const styles=StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems:'center',
        position:'absolute',
        
      },
      input: {
        height: 35,
        width:300,
        margin: 10,
        borderWidth: 2,
        padding: 10,
      },
      button1: {
        alignItems: "center",
        backgroundColor: "#AE327D",
        padding: 15,
        width:300,
        height:50,
        margin:30,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
      },
      button2: {
        alignItems: "center",
        padding: 10,
        width:300,
        height:50,
        borderWidth:2,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        margin:30,
    
      },
      img:{
        width:null,
        height:200,
        margin:10,
        borderRadius:20,
        resizeMode:'cover',

      },
      border:{
        borderWidth:2,
        borderColor:'black',
        margin:10,
        borderRadius:20,
        backgroundColor:'white',
      
      }
     

})
export default styles;