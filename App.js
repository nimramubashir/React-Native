import React, { useState, useEffect } from 'react';
import {View,Text,Button,Image,ImageBackground} from 'react-native';
import styles from './styles';

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


const HomeScreen = (props) => {
  console.log("articles: ", props.articles);
  return (
    <View>
      {
        props.articles.map((article, index)=>{
          return <Text key = {index}>
          { article.title }
          </Text>
        })
      }
    </View>
  );
}

const App = () => {
  const API_KEY = "f68807c4f5f04ac7bad3a936575a5e60";
  const URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading ] = useState(true);
  useEffect(()=>{
    //fetch(URL)
    fetch('./articles.json')
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
