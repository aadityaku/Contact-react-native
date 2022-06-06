import React,{useState} from "react"
import {View,Text} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Alert, Modal, StyleSheet, Pressable } from "react-native";
// import {Button} from "native-base";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import phone from "./phone";
import {firebase} from "@react-native-firebase/database";
// import SaveContact from "./saveContact";
// import MobileMenu from "./MobileMenu";
// import onPress from "react-native"

export default function ContactName({navigation}){
    const db = firebase.app().database("https://contact-80abf-default-rtdb.firebaseio.com/");
    const [modalVisible, setModalVisible] = useState(false);
    const [addMore,setAddMore] = useState(false);
    const [name,setName] = useState("");
    const [phoneticName,setPhoneticName] = useState("");
    const [number,setNumber] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [birth,setBirth] = useState("");
    const [friend,setFriend] = useState("");
    const [im,setIm] = useState("");
    const [nickName,setNickname] = useState("");
    const [websites,setWebsites] = useState("");
    const [notes,setNotes] = useState("");

    const data={
        "name":name,
        "phoneticName":phoneticName,
        "number":number,
        "email":email,
        "address":address,
        "birth":birth,
        "friend":friend,
        "im":im,
        "nickName":nickName,
        "websites":websites,
        "notes":notes,
        
    }
    function store(data){
        const ref=db.ref("savecontact");
        const newRef=ref.push();
        newRef.set(data).then(()=>console.log("success"));
    }
    function handleSubmit(){
        store(data);
    }
    return(
        <View style={{padding:20}}>
            
            <View style={{flexDirection:"row"}}>
            
                <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"#e6e9ee",borderTopLeftRadius:8,borderBottomLeftRadius:8}}>
                    <EvilIcons name="search" size={19} color="black" style={{backgroundColor:"#e6e9ee"}}/>
                </View>
               <TextInput placeholder="Search here contact" style={{padding:5,fontSize:18,backgroundColor:"#e6e9ee",fontFamily:"sans-serif",borderTopRightRadius:8,borderBottomRightRadius:8,width:"95%"}}>

               </TextInput>
            </View>
            {/* Contact List */}
            <ScrollView>
            <View style={{flexDirection:"row",marginTop:5,alignItems:"center"}}>
                <Ionicons name="person-circle-sharp" size={47} />
                <Text style={{fontSize:17,color:"black",marginLeft:15}}>Aaditya kumar</Text>
            </View>
            <View style={{flexDirection:"row",marginTop:5,alignItems:"center"}}>
                <Ionicons name="person-circle-sharp" size={47} />
                <Text style={{fontSize:17,color:"black",marginLeft:15}}>Aaditya kumar</Text>
            </View>
            <View style={{flexDirection:"row",marginTop:5,alignItems:"center"}}>
                <Ionicons name="person-circle-sharp" size={47} />
                <Text style={{fontSize:17,color:"black",marginLeft:15}}>Aaditya kumar</Text>
            </View>
            
            
            </ScrollView>
            <View style={{justifyContent:"flex-end",alignItems:"flex-end"}}>
                <AntDesign name="plus" onPress={() => setModalVisible(true)} size={47} style={{width:"13%",backgroundColor:"#e6e9ee",borderRadius:50}} color="black"/>
            </View>
            <View style={styles.centeredView}>
                
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{flexDirection:"row",width:"100%"}}>
                            <Entypo name="cross" onPress={() => setModalVisible(!modalVisible)} size={30} color="black" style={{justifyContent:"flex-start",flex:3}}/><Text style={{color:"black",fontWeight:"bold",flex:6,marginTop:1,fontSize:19}}>New Contact</Text>
                            <AntDesign name="check" size={30} onPress={() => handleSubmit()} color="black" style={{flex:1,justifyContent:"flex-end"}} />
                        </View>
                        <ScrollView>
                        {
                            addMore && <View style={{marginTop:10,justifyContent:"center",alignItems:"center"}}>
                            <Ionicons name="person-outline" size={30} />
                        </View>
                        }
                        <View style={{flexDirection:"row",margin:15}}>
                            <View style={{marginTop:18}}>
                                <Ionicons name="person-outline" size={25} />
                            </View>
                            <View style={{flexDirection:"column",width:"100%"}}>
                            <View style={{width:"100%",borderBottomColor:"grey",borderBottomWidth:1,marginLeft:13}}>
                            
                                <TextInput style={styles.modalText} placeholder="Name" value={name} onChangeText={name => setName(name)}></TextInput>
                            </View>
                                {
                                    addMore && <View style={{width:"100%",borderBottomColor:"grey",borderBottomWidth:1,marginLeft:13}}>
                            
                                    <TextInput style={styles.modalText} placeholder="Phonetic name" value={phoneticName} onChangeText={phoneticName => setPhoneticName(phoneticName)}></TextInput>
                                </View>
                                }
                            </View> 
                            
                        </View>
                       
                            <View style={{flexDirection:"row",marginLeft:15,marginRight:15}}>
                            <View style={{marginTop:18}}>
                                <Ionicons name="call-outline" size={25} />
                            </View>
                            
                            <View style={{width:"100%",borderBottomColor:"grey",borderBottomWidth:1,marginLeft:13,flexDirection:"row"}}>
                               <Text style={{marginTop:15,marginLeft:5,fontWeight:"bold"}}>Mobile</Text>
                            <View style={{borderStartWidth:1,height:23,marginLeft:9,borderStartColor:"black",marginTop:12}}></View>
                               <TextInput  placeholder="Number" value={number} onChangeText={number => setNumber(number)}></TextInput>
                            
                                
                            </View>
                            
                        </View>
                       
                        {
                            !addMore && <Pressable onPress={() => setAddMore(true)}>
                           <Text style={{color:"blue",fontWeight:"bold",marginTop:5}} >Add more Info</Text>
                        </Pressable>
                        }
                        {
                            addMore &&  
                            <View>
                                <View style={{flexDirection:"row",marginLeft:15,marginRight:15,marginTop:10}}>
                                    <View style={{marginTop:18}}>
                                        <Ionicons name="call-outline" size={25} />
                                    </View>
                            
                                    <View style={{width:"100%",borderBottomColor:"grey",borderBottomWidth:1,marginLeft:13,flexDirection:"row"}}>
                                        <Text style={{marginTop:15,marginLeft:5,fontWeight:"bold"}}>Home</Text>
                                        <View style={{borderStartWidth:1,height:23,marginLeft:9,borderStartColor:"black",marginTop:12}}>

                                        </View>
                                        <TextInput  placeholder="Email" value={email} onChangeText={email => setEmail(email)}></TextInput>
                                    </View>
                            
                                </View>
                                <View style={{flexDirection:"row",marginLeft:15,marginRight:15,marginTop:10}}>
                                    <View style={{marginTop:18}}>
                                        <Fontisto name="email" size={25} />
                                    </View>
                            
                                    <View style={{width:"100%",borderBottomColor:"grey",borderBottomWidth:1,marginLeft:13,flexDirection:"row"}}>
                                        <Text style={{marginTop:15,marginLeft:5,fontWeight:"bold"}}>Home</Text>
                                        <View style={{borderStartWidth:1,height:23,marginLeft:9,borderStartColor:"black",marginTop:12}}>

                                        </View>
                                        <TextInput  placeholder="Address" value={address} onChangeText={address => setAddress(address)}></TextInput>
                                    </View>
                            
                                </View>
                                <View style={{flexDirection:"row",marginLeft:15,marginRight:15,marginTop:10}}>
                                    <View style={{marginTop:18}}>
                                        <Ionicons name="call-outline" size={25} />
                                    </View>
                            
                                    <View style={{width:"100%",borderBottomColor:"grey",borderBottomWidth:1,marginLeft:13,flexDirection:"row"}}>
                                        <Text style={{marginTop:15,marginLeft:5,fontWeight:"bold"}}>Birthday</Text>
                                        <View style={{borderStartWidth:1,height:23,marginLeft:9,borderStartColor:"black",marginTop:12}}>

                                        </View>
                                        <TextInput  placeholder="Date" value={birth} onChangeText={birth => setBirth(birth)}></TextInput>
                                    </View>
                            
                                </View>
                                <View style={{flexDirection:"row",marginLeft:15,marginRight:15,marginTop:10}}>
                                    <View style={{marginTop:18}}>
                                        <Ionicons name="call-outline" size={25} />
                                    </View>
                            
                                    <View style={{width:"100%",borderBottomColor:"grey",borderBottomWidth:1,marginLeft:13,flexDirection:"row"}}>
                                        <Text style={{marginTop:15,marginLeft:5,fontWeight:"bold"}}>Friend</Text>
                                        <View style={{borderStartWidth:1,height:23,marginLeft:9,borderStartColor:"black",marginTop:12}}>

                                        </View>
                                        <TextInput  placeholder="Related persons" value={friend} onChangeText={friend => setFriend(friend)}></TextInput>
                                    </View>
                            
                                </View>
                                <View style={{flexDirection:"row",marginLeft:15,marginRight:15,marginTop:10}}>
                                    <View style={{marginTop:18}}>
                                        <Ionicons name="call-outline" size={25} />
                                    </View>
                            
                                    <View style={{width:"100%",borderBottomColor:"grey",borderBottomWidth:1,marginLeft:13,flexDirection:"row"}}>
                                        <Text style={{marginTop:15,marginLeft:5,fontWeight:"bold"}}>QQ</Text>
                                        <View style={{borderStartWidth:1,height:23,marginLeft:9,borderStartColor:"black",marginTop:12}}>

                                        </View>
                                        <TextInput  placeholder="IM" value={im} onChangeText={im => setIm(im)}></TextInput>
                                    </View>
                            
                                </View>
                                <View style={{flexDirection:"row",marginLeft:15,marginRight:15,marginTop:10}}>
                                    <View style={{marginTop:18}}>
                                        <Ionicons name="call-outline" size={25} />
                                    </View>
                            
                                    <View style={{width:"100%",borderBottomColor:"grey",borderBottomWidth:1,marginLeft:13,flexDirection:"row"}}>
                                        <TextInput  placeholder="Nickname" value={nickName} onChangeText={nickName => setNickname(nickName)}></TextInput>
                                    </View>
                            
                                </View>
                                <View style={{flexDirection:"row",marginLeft:15,marginRight:15,marginTop:10}}>
                                    <View style={{marginTop:18}}>
                                        <Ionicons name="call-outline" size={25} />
                                    </View>
                            
                                    <View style={{width:"100%",borderBottomColor:"grey",borderBottomWidth:1,marginLeft:13,flexDirection:"row"}}>
                                        <TextInput  placeholder="Websites" value={websites} onChangeText={websites => setWebsites(websites)}></TextInput>
                                    </View>
                            
                                </View>
                                <View style={{flexDirection:"row",marginLeft:15,marginRight:15,marginTop:10}}>
                                    <View style={{marginTop:18}}>
                                        <Ionicons name="call-outline" size={25} />
                                    </View>
                            
                                    <View style={{width:"100%",borderBottomColor:"grey",borderBottomWidth:1,marginLeft:13,flexDirection:"row"}}>
                                        <TextInput  placeholder="Notes" value={notes} onChangeText={notes => setNotes(notes)}></TextInput>
                                    </View>
                            
                                </View>
                            
                            </View>
                        }
                        {/* <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable> */}
                        </ScrollView>
                    </View>
                    
                </View>
            </Modal>
            
            {/* <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable> */}
            </View>
           
        </View>
    )
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    
    marginTop: 22
  },
  modalView: {
    
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {

  }
});

