import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button , TextInput, FlatList, Alert, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from "./components/addTodo";
import Sandbox from "./components/sandbox";

export default function App() {
  const [todos,setTodos] = useState([
    {text: 'buy coffee', key:'1'},
    {text: 'create an app', key:'2'},
    {text: 'play on the switch', key:'3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) =>{

    if(text.length > 3){
    setTodos((prevTodos) => {
      return [
          {text: text, key:Math.random().toString()},
          ...prevTodos
          ];
    });
    }
    else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress:() => console.log('alert closed')}
      ]);
    }
  }
  // const[name, setName] = useState('shaun');
  // const [person, setPerson] = useState({name:"mario", age: 40});
  // const [age, setAge] = useState('30');
  // const [people,setPeople] = useState([
  //   {name:'Shaun', id:'1'},
  //   {name:'Anita', id: '2'},
  //   {name:'Maria', id: '3'},
  //   {name:'Mama', id: '4'},
  //   {name:'Paps', id: '5'},
  //   {name:'Misel', id: '6'},
  //   {name:'Resho', id: '7'},
  //   {name:'JoseMary', id: '8'},
  //   {name:'Miki', id: '9'},
  //   {name:'MonaLisa', id: '10'},
  //   {name:'Paudez', id: '11'},
  // ]);

  // const presHandler = (id) => {
  //   console.log(id);
  //   setPeople((prevPeople) => {
  //     return prevPeople.filter(person => person.id != id);
  //   } )
  // }
  //
  // const clickHandler = () => {
  //   setName('chun-li')
  //   setPerson({name:'luigi', age: 45});
  // }

  return (
      // <Sandbox />
      <TouchableWithoutFeedback onPress={() =>{
        Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler}/>
            <View style={styles.list}>
              <FlatList
                  data={todos}
                  renderItem={({item}) => (
                      <TodoItem item={item} pressHandler={pressHandler} />
                  )}
                  />
            </View>
          </View>



       {/*<View style={styles.container2}>*/}
       {/*  <FlatList*/}
       {/*      numColumns={2}*/}
       {/*      keyExtractor={(item) => item.id}*/}
       {/*      data={people}*/}
       {/*      renderItem={({item}) => (*/}
       {/*          <TouchableOpacity onPress={() => presHandler(item.id)}>*/}
       {/*            <Text style={styles.item}>{item.name}</Text>*/}
       {/*          </TouchableOpacity>*/}
       {/*  )}/>*/}
         {/*<ScrollView>*/}
         {/*{people.map((item) => {*/}
         {/*  return(*/}
         {/*   <View key={item.key}>*/}
         {/*     <Text style={styles.item}>{item.name}</Text>*/}
         {/*   </View>*/}
         {/*  )*/}
         {/*})}*/}
         {/*</ScrollView>*/}
         {/*</View>*/}
       {/*<View style={styles.container}>*/}
       {/*  <Text>Enter Name:</Text>*/}
       {/*  <TextInput*/}
       {/*      style={styles.input}*/}
       {/*      placeholder={'e.g: John Doe'}*/}
       {/*      onChangeText={(val) => setName(val)}/>*/}

       {/*  <Text>Enter Age:</Text>*/}
       {/*  <TextInput*/}
       {/*      keyboardType={"numeric"}*/}
       {/*      style={styles.input}*/}
       {/*      placeholder={'e.g: 99'}*/}
       {/*      onChangeText={(val) => setAge(val)}/>*/}
       {/*  <Text>name:{name}, age:{age}</Text>*/}
       {/*</View>*/}

       {/*<View style={styles.header}>*/}
       {/*  <Text style={styles.boldText}> My name is {name}</Text>*/}
       {/*  <Text>His name is {person.name} and his age is {person.age}</Text>*/}
       {/*  <View style={styles.buttonContainer}>*/}
       {/*    <Button title={'update state'} onPress={clickHandler}/>*/}
       {/*  </View>*/}
       {/*</View>*/}

       {/*<View style={styles.body}>*/}
       {/*  <Text>Lorem Ipsum</Text>*/}
       {/*</View>*/}
      {/*<StatusBar style="auto" />*/}
        </View>
      </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header:{
    backgroundColor:'pink',
    padding:20,
  },
  boldText:{
    fontWeight: 'bold',
  },
  body:{
    backgroundColor:'yellow'
  },
  buttonContainer:{
    marginTop:20
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:30
  },
  item:{
    marginTop:24,
    padding:10,
    backgroundColor:'blue',
    fontSize:24,
    marginHorizontal:10
  },
  content:{
    padding:40,
    backgroundColor:'pink',
    flex:1,
  },
  list:{
    flex:1,
    marginTop:20
  }
});
