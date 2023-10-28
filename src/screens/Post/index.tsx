import React, { useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ToastAndroid,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {FONTS} from '../../Theme/theme';
import {useDispatch, useSelector} from 'react-redux';
import {
  allPostRequest,
  createPostRequest,
} from '../../Redux/Reducers/PostReducer';

// create a component
const Post = ({navigation}: any) => {
  const [tags, setTags] = useState<string[]>([]);
  const [text1, setText1] = useState<string>('');
  const [text2, setText2] = useState<string>('');
  const Postreducer = useSelector((state: any) => state.PostReducer);
  const dispatch = useDispatch();
  const handleTag = () => {
    setTags(prevArray => [...prevArray, '#' + text2]);
    setText2('');
  };
  function handlePost() {
    // onPress={()=>props.navigation.navigate('TabNavigator')}
    if (text1 == '') {
      ToastAndroid.show('Please Enter Caption', ToastAndroid.SHORT);
    } else if (tags.length == 0) {
      ToastAndroid.show('Please Enter Atleast One Tag', ToastAndroid.SHORT);
    } else {
      let obj = {
        userName: 'Terece William1',
        caption: text1,
        tags: tags,
      };
      dispatch(createPostRequest(obj));
    }
  }
  useEffect(() => {
    if (Postreducer.status === 'Post/createPostSuccess') {
      console.log('here');

      dispatch(allPostRequest({}));
      navigation.goBack();
    }
  }, [Postreducer.status, dispatch]);

  return (
    <KeyboardAvoidingView
      style={styles.container1}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePost()}
            style={styles.postButton}>
            <Text style={styles.avatarText}>Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Create</Text>
            <TextInput
              value={text1}
              placeholderTextColor={'#3F4B63'}
              placeholder="What's on your mind?"
              style={styles.textInput}
              onChangeText={item => setText1(item)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Add Tags</Text>
            <TextInput
              value={text2}
              placeholderTextColor={'#3F4B63'}
              placeholder="Write tags"
              style={styles.textInput}
              onChangeText={item => setText2(item)}
            />
            {text2 != '' && (
              <TouchableOpacity
                onPress={() => handleTag()}
                style={styles.addTag}>
                <Text style={styles.addTagText}>Add</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.suggestionRow}>
            {tags.map((item: any, index: number) => (
              <View key={index} style={styles.suggestionVew}>
                <Text style={styles.suggestion}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    width: '100%',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#091224',
    paddingBottom: 40,
  },
  header: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addTag: {position: 'absolute', right: 0, bottom: 12},
  addTagText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: FONTS.inter_Bold,
  },
  avatarText: {
    fontSize: 16,
    fontFamily: FONTS.inter_Bold,
    color: '#fff',
  },
  body: {
    flex: 1,
    width: '100%',
    padding: 15,
    marginTop: 20,
  },

  postButton: {
    backgroundColor: '#E88607',
    borderRadius: 50,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#142340',
    marginBottom: 30,
  },
  label: {
    color: '#fff',
    fontSize: 20,
    fontFamily: FONTS.inter_Bold,
  },
  textInput: {
    color: '#A6B6D6',
    fontSize: 16,

    fontFamily: FONTS.inter_Light,
    marginTop: 10,
  },
  suggestionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 20,
    flexWrap: 'wrap',
  },
  suggestionVew: {
    backgroundColor: '#28395A',
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 12,
    marginBottom: 10,
  },
  suggestion: {
    color: '#CFD7E7',
    fontSize: 12,
    fontWeight: '300',
    fontFamily: FONTS.inter_Regular,
  },
});
export default Post;
