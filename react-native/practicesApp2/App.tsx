import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Post {
  id: number;
  userId?: number;
  title: string;
  body: string;
}

function App() {
  const [post, setPost] = React.useState<Post[]>([]);
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const [userID, setUserID] = React.useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then((json: Post[]) => setPost(json))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = () => {
    if (!title || !text || !userID) {
      return;
    }

    fetch('https://jsonplaceholder.typicode.com/posts/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        body: text,
        userId: userID,
      }),
    })
      .then(response => response.json())
      .then((json: Post) => setPost([json, ...post]))
      .then(() => console.warn('post submitted'))
      .then(() => setTitle(''))
      .then(() => setText(''))
      .then(() => setUserID(''))

      .catch(error => console.error(error));
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.sectionContainer]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <Text style={styles.text}>Body Title</Text>
        <TextInput
          placeholder="Body Title"
          style={styles.textInput}
          onChange={e => setTitle(e.nativeEvent.text)}
          value={title}
        />
        <Text style={styles.text}>Body Text</Text>
        <TextInput
          placeholder="Body Text"
          style={styles.textInput}
          onChange={e => setText(e.nativeEvent.text)}
          value={text}
        />
        <Text style={styles.text}>User ID</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="User ID"
          style={styles.textInput}
          onChange={e => setUserID(e.nativeEvent.text)}
          value={userID}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle, {marginTop: 16}]}>
        {post.map(postItem => (
          <View key={postItem.id} style={styles.listContainer}>
            <Text style={styles.listTitle}>{postItem.title}</Text>
            <Text style={styles.listDescription}>{postItem.body}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: 32,
    paddingHorizontal: 24,
    width: '100%',
  },
  textInput: {
    marginTop: 8,
    fontSize: 15,
    padding: 18,
    fontWeight: '400',
    borderWidth: 3,
    borderRadius: 8,
  },
  text: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  button: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 16,
    backgroundColor: '#999',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  listContainer: {
    marginTop: 8,
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  listTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  listDescription: {color: 'black', fontSize: 18, textAlign: 'left'},
});

export default App;
