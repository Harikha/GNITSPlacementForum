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
      
      },
      roundImage:{
        width:150,
        height:150,
        borderRadius:150/2,
        margin:10,
        resizeMode:'cover',
      
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
       
        borderWidth:2,
        borderColor:'black',

      },
      GreenButton:{
        alignItems: "center",
        backgroundColor: "green",
        padding: 15,
        width:100,
        height:40,
        margin:6,
        borderRadius:20,
        color:'white',
        justifyContent:'center',
        alignItems:'center',
      },
      RedButton:{
        alignItems: "center",
        backgroundColor: "#FF0000",
        padding: 15,
        width:100,
        height:40,
        margin:6,
        borderRadius:20,
        color:'white',
        justifyContent:'center',
        alignItems:'center',

      },
      GrayButton:{
        alignItems: "center",
        backgroundColor: "#D3D3D3",
        padding: 10,
        width:70,
        height:30,
        margin:6,
        borderRadius:15,
        color:'white',
        justifyContent:'center',
        alignItems:'center',

      },
      textSeperator:{
        marginBottom:8,
        flexDirection:'row',
       justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20,
        
      }
      
     

})
export default styles;