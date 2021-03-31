import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MovieBox from './components/MovieBox';

export default function App() {

  const [movies, setMovies] = useState([]);

  const getMovies = useCallback(async () => {
    const response = await fetch('https://academy-video-api.herokuapp.com/content/free-items/');
    const json = await response.json();
    setMovies(json)
  }, [])

  useEffect(() => {
    getMovies();
  }, [])
  return (
    <>
      <View style={styles.topLine}></View>
      <ScrollView style={styles.container}>
        {movies.map(({ title, image, description, id }, index) => (
          <>
            <MovieBox title={title} image={image} description={description} id={id}
              lastChild={index === movies.length - 1 ? true : false} />
          </>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  topLine: {
    height: 30,
    backgroundColor: '#fff'
  }

});
