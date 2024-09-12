import {View, Text, StyleSheet} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'expo-router';


const FoodLogListItem = ({ item }) => {
    return (
      <View style={styles.container}>
          <View style={{flex: 1, gap: 5}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.label}</Text>
            <Text style={{color: 'dimgray'}}>
              kcal: {item.kcal} {"   "}</Text>
              <Text>Węglowodany: {item.carbs}g  {"   "} </Text>
              Tłuszcze: {item.fat}g {"   "}
              Błonnik: {item.fiber}g {"   "}
              Białko: {item.protein}g  {"   "}
          </View>
        </View>
    )
  };

  const styles = StyleSheet.create({
    container: {
        padding: 10,
            gap: 5,
            flexDirection: 'row',
            backgroundColor: '#F6F6F8',
            borderRadius: 15,
            justifyContent: 'space-between',
            alignItems: 'center',
    }
    })

export default FoodLogListItem;