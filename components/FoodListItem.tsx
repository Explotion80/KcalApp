import {View, Text, StyleSheet} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'expo-router';


const mutation = gql`
  mutation MyMutation(
    $food_id: String!
    $user_id: String!
    $kcal: Int!
    $label: String!
    $carbs: Int!
    $fat: Int!
    $fiber: Int!
    $protein: Int!
    ) {
  insertFood_log(
    food_id: $food_id
    user_id: $user_id
    kcal: $kcal
    label: $label
    carbs: $carbs
    fat: $fat
    fiber: $fiber
    protein: $protein
  ) {
    food_id
    user_id
    kcal
    label
    carbs
    fat
    fiber
    protein
    created_at
  }
}`


const FoodListItem = ({ item }) => {
  const [logFood] = useMutation(mutation, {
    refetchQueries: ['foodLogsForDate'],
  });
  const router = useRouter();

  const onPlusPressed = async () => {
    await logFood({
      variables:
      {
        "food_id": item.food.foodId,
        "user_id": "quent",
        "kcal": item.food.nutrients.ENERC_KCAL,
        "label": item.food.label,
        "carbs": item.food.nutrients.CHOCDF,
        "fat": item.food.nutrients.FAT,
        "fiber": item.food.nutrients.FIBTG,
        "protein": item.food.nutrients.PROCNT,
    },
    });
    router.back();
  };

    return (
      <View style={styles.container}>
          <View style={{flex: 1, gap: 5}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.food.label}</Text>
            <Text style={{color: 'dimgray'}}>
              <Text>kcal: {item.kcal} {"   "}</Text>
              <Text>Węglowodany: {item.carbs}g  {"   "}</Text>
              <Text>Tłuszcze: {item.fat}g {"   "}</Text> 
              <Text>Błonnik: {item.fiber}g {"   "}</Text>
              <Text>Białko: {item.protein}g  {"   "}</Text>
            </Text>
          </View>
          <AntDesign onPress={onPlusPressed} name="pluscircleo" size={24} color='royalblue' />
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

export default FoodListItem;