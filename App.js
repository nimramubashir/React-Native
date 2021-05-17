import React, { useState, useEffect } from 'react';
import {View,Text,ImageBackground,FlatList,Button, Image, TouchableOpacity } from 'react-native';
import bookmarkIcon from './assets/bookmark.png';
import readIcon from './assets/read.png';
import styles from './styles';

const ArticleItem = ({article}) => {
  const { title, description, url, urlToImage } = article;
  return (
    <View style = { styles.articleContainer }>
      <Image style={ styles.articleImage } source={{ uri: urlToImage }} />
      <Text style= { styles.articleTitle }>
        { title }
      </Text>
      <Text style = { styles.articleDescription }>
        { description }
      </Text>
      <View style = { styles.articleBtns}>
        
      <ReadButton width= '50%' color="white" onPress = { () => { console.log("Button pressed!")} } title="Open" />
      
      <BookmarkButton width= '50%' title="Read later" color = "white" onPress = { () => { console.log("Button pressed!")} } />
      
      </View>
    </View>
  )
}

const BookmarkButton = ({title, color, onPress, width }) =>{
  return (
    <View style={ {width: width } }>
      <TouchableOpacity onPress = { onPress } style= { { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff5c5c'} }>
      <Image style = { { height: 27, width:27, margin : 5 } } source = {  bookmarkIcon }></Image>
      <Text style = { {color: color }} > { title } </Text>
      </TouchableOpacity>
    </View>
  );
};
const ReadButton = ({title, color, onPress, width }) =>{
  return (
    <View style={ {width: width } }>
      <TouchableOpacity onPress = { onPress } style= { { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff5c5c'} }>
      <Image style = { { height: 27, width:27, margin : 5 } } source = {  readIcon }></Image>
      <Text style = { {color: color }} > { title } </Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = (props) => {
  console.log("articles: ", props.articles);
  return (
    <View>
       <FlatList 
        data={ props.articles }
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ArticleItem article = { item }  />}
      />
    </View>
  );
}

const SplashScreen = (props) => {
  return (
    <View style = { styles.container } >
    <ImageBackground  style= { styles.backgroundImage } source={{uri: 'http://i.imgur.com/IGlBYaC.jpg'}} >
            
      <View style= { styles.logoContainer }>
        <Text style = { styles.logoText }>
          Newzzz
        </Text>
        <Text style = { styles.logoDescription }>
          Get your doze of daily news!
        </Text>
        
      </View>
      </ImageBackground>
    </View>
  );
} 

const App = () => {
  const URL = 'https://raw.githubusercontent.com/nimramubashir/React-Native/fetch/articles.json';
  const [articles, setArticles] = useState([]);
  const [loading, setLoading ] = useState(true);
  useEffect(()=>{
    fetch(URL)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.articles;
    })
    .then( articles  => {
      setArticles(articles);
      console.log(articles);
      setLoading(false);
    })
    .catch( error => {
      console.error(error);
    });
    
  } , []);
  
  if (loading){
      return <SplashScreen />
    } else {
      return <HomeScreen articles = { articles }/>
  }
};

export default App
