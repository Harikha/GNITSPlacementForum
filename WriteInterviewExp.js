
import { useRef, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import ImagePickerExample from "./ImagePicker";
import styles from "./styles";
export default function App() {
  const richText = useRef();
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [ExpPackage, setPackage] = useState("");
  const [tenentiveMonth, setTenentiveMonth] = useState("");
 


  const [descHTML, setDescHTML] = useState("");
  const [showDescError, setShowDescError] = useState(false);
  const video = require("./assets/video.webp");
  // const richTextHandle = (descriptionText) => {
  //   if (descriptionText) {
  //     setShowDescError(false);
  //     setDescHTML(descriptionText);
  //   } else {
  //     setShowDescError(true);
  //     setDescHTML("");
  //   }
  // };
  

  const submitContentHandle = () => {
    const replaceHTML = descHTML.replace(/<(.|\n)*?>/g, "").trim();
    const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, "").trim();

    if (replaceWhiteSpace.length <= 0) {
      setShowDescError(true);
    } else {
      // send data to your server!
    }
  };

  return (
    <ScrollView>
      <View style={Inlinestyles.container}>
        <Pressable onPress={() => richText.current?.dismissKeyboard()}>
          <ImagePickerExample/>
          <View style={{ flex:1,alignItems:'center',justifyContent:'center'}}>
          <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Enter your Name "
      />
      <TextInput
        style={styles.input}
        onChangeText={setCompanyName}
        value={companyName}
        placeholder="Enter your Company Name "
      />
      <TextInput
        style={styles.input}
        onChangeText={setPosition}
        value={position}
        placeholder="Enter your Position "
      />
      <TextInput
        style={styles.input}
        onChangeText={setLocation}
        value={location}
        placeholder="Enter your Location "
      />
      <TextInput
        style={styles.input}
        onChangeText={setPackage}
        value={ExpPackage}
        placeholder="Enter your Package "
      />
      <TextInput
        style={styles.input}
        onChangeText={setTenentiveMonth}
        value={tenentiveMonth}
        placeholder="Enter your Tenentive Month "
      />  
          </View>
      
          
          
        </Pressable>
        <View style={Inlinestyles.richTextContainer}>
          <RichEditor
            ref={richText}
            // onChange={richTextHandle}
            placeholder="Write your cool content here :)"
            androidHardwareAccelerationDisabled={true}
            style={Inlinestyles.richTextEditorStyle}
            initialHeight={250}
          />
          <RichToolbar
            editor={richText}
            selectedIconTint="blue"
            iconTint="black"
            actions={[
              actions.insertImage,
              actions.setBold,
              actions.setItalic,
              actions.insertBulletsList,
              actions.insertOrderedList,
              actions.insertLink,
              actions.setStrikethrough,
              actions.setUnderline,
            ]}
            style={Inlinestyles.richTextToolbarStyle}
          />
        </View>
        {showDescError && (
          <Text style={Inlinestyles.errorTextStyle}>
            Your content shouldn't be empty 🤔
          </Text>
        )}

        <TouchableOpacity
          style={Inlinestyles.saveButtonStyle}
          onPress={submitContentHandle}>
          <Text style={Inlinestyles.textButtonStyle}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const Inlinestyles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
  },

//   headerStyle: {
//     fontSize: 20,
//     fontWeight: "600",
//     color: "#312921",
//     marginBottom: 10,
//   },

//   htmlBoxStyle: {
//     height: 200,
//     width: 330,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 10,
//   },

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
});

