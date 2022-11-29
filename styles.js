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
        width:250,
        margin: 10,
        borderWidth: 2,
        padding: 10,
        borderColor: 'black',
        borderRadius: 10,
        
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
        width:120,
        height:120,
        borderRadius:120/2,
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
        width:90,
        height:50,
        margin:6,
        borderRadius:20,
        color:'white',
        justifyContent:'center',
      },
      RedButton:{
        alignItems: "center",
        backgroundColor: "#FF0000",
        padding: 15,
        width:90,
        height:50,
        margin:6,
        borderRadius:20,
        color:'white',
        justifyContent:'center',

      },
      GrayButton:{
        alignItems: "center",
        backgroundColor: "#D3D3D3",
        padding: 10,
        width:70,
        height:40,
        margin:6,
        borderRadius:15,
        color:'white',
        justifyContent:'center',
      },
      textSeperator:{
        marginBottom:8,
        flexDirection:'row',
       justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20,
        
      },
      container1: {
    flex: 1,
    height: "100%",
    backgroundColor: "#ccaf9b",
    padding: 20,
    alignItems: "center",
  },

  headerStyle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#312921",
    marginBottom: 10,
  },

  htmlBoxStyle: {
    height: 200,
    width: 330,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },

  richTextContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    width: "100%",
    marginBottom: 10,
  },

  richTextEditorStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: "#ccaf9b",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    fontSize: 20,
  },

  richTextToolbarStyle: {
    backgroundColor: "#c6c3b3",
    borderColor: "#c6c3b3",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
  },

  errorTextStyle: {
    color: "#FF0000",
    marginBottom: 10,
  },

  saveButtonStyle: {
    backgroundColor: "#c6c3b3",
    borderWidth: 1,
    borderColor: "#c6c3b3",
    borderRadius: 10,
    padding: 10,
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    fontSize: 20,
  },

  textButtonStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#312921",
  },
      
     

})
export default styles;
