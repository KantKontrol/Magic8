import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ ...styles.container }}>
        <View style={{ ...styles.ball }}>
          <View style={{ ...styles.innerBall }}>
            
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ball: {
    backgroundColor: 'black',
    width: 400,
    height: 400,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerBall: {
    backgroundColor: 'gray',
    width: 175,
    height: 175,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
