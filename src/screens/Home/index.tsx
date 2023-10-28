import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {allPostRequest} from '../../Redux/Reducers/PostReducer';
import {FONTS} from '../../Theme/theme';
import PostCard from '../../components/PostCard';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const Postreducer = useSelector((state: any) => state.PostReducer);
  console.log('---', Postreducer);
  useEffect(() => {
    dispatch(allPostRequest({}));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/image/ProfilePicture.png')}
          style={styles.avatarImage}
        />
        <Text style={styles.avatarText}>Chirpz</Text>
        <View />
      </View>
      <View style={styles.body}>
        <FlatList
          contentContainerStyle={styles.scrollContainer}
          data={Postreducer.postList}
          keyExtractor={(item: any) => item.id}
          renderItem={({item}: any) => (
            <PostCard
              name={item.userName}
              caption={item.caption}
              verified={item.isVerified}
              tags={item.tags}
            />
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.addPostButton1}
        onPress={() => {
          navigation.navigate('Post');
        }}>
        <LinearGradient
          colors={['#FFC701', '#FF6B00']}
          style={styles.addPostButton}>
          <Ionicons name="add" size={40} color="black" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#091224',
  },
  header: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#1C3059',
    padding: 15,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    height: 38,
    width: 38,
    borderRadius: 80,
    position: 'absolute',
    left: 15,
    top: 15,
  },
  avatarText: {
    fontSize: 20,

    color: '#fff',
    fontFamily: FONTS.inter_Bold,
  },
  body: {
    flex: 1,
    width: '100%',
  },
  scrollContainer: {
    paddingVertical: 24,
  },

  addPostButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPostButton1: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    borderRadius: 50,
  },
});

export default Home;
