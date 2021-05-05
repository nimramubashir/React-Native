import React, { useState, useEffect } from 'react';
import {View,Text,ImageBackground} from 'react-native';
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
