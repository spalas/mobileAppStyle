import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Elovator from './compoment/Elovator';
import FancyCard from './compoment/FancyCard';
import { ScrollView } from 'react-native';
import ActionCard from './compoment/ActionCard';
import ContactList from './compoment/ContactList';
import Flatcard from './compoment/Flatcard';

export default function App() {
  
  return (
  
    <SafeAreaView>
      <ScrollView>
        <Flatcard/>
        <Elovator />
        <FancyCard/>
        <ActionCard />
        <ContactList />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
