import { Text, View, StyleSheet, FlatList, TextInput, Button, ActivityIndicator } from "react-native";
import FoodListItem from "@/components/FoodListItem";
import { useState } from "react";
import {gql, useLazyQuery, useQuery} from '@apollo/client';


const query = gql`
query MyQuery($ingr: String) {
  search(
    app_id: "app_id"
    app_key: "app_key"
    ingr: $ingr
  ) {
 text
    hints {
      food {
        brand
        label
        foodId
        nutrients {
            CHOCDF
            ENERC_KCAL
            FAT
            FIBTG
            PROCNT
        }
      }
    }
  }
}
`

/* const GET_QUERY = gql`
  query MyQuery   {
    search(
      app_id: "app_id"
      app_key: "app_key"
    ) {
      text
      hints {
        food {
          brand
          label
          nutrients {
            ENERC_KCAL
          }
        }
      }
    }
  }
`; */



export default function SearchScreen() {
  const [search, setSearch] = useState('');

  const [runSearch ,{data, loading, error}] = useLazyQuery(query);

/*   if (loading) {
    return <ActivityIndicator/>
  } */

/*   if (error) {
    return <Text>Błąd w wyszukiwaniu</Text>
  } */

    if (loading) return <Text>Loading ...</Text>;

    if (error) return (
      <pre>{JSON.stringify(error, null, 2)}</pre>
    );

  

const items = data?.search?.hints || [];

  const performSearch = () => {
    runSearch({variables: { ingr: search }});
    setSearch('');
  }

  return (
    <View style={styles.container}>
      <TextInput 
        value={search} 
        onChangeText={setSearch} 
        placeholder="Szukaj..." 
        style={styles.input}
    />
    {search && <Button title="Search" onPress={performSearch}/>}

      {loading && <ActivityIndicator/>}
      <FlatList
        data = {items}
        renderItem={({item}) => <FoodListItem item={item}/>} 
        ListEmptyComponent={() => <Text>Search food</Text>}
        contentContainerStyle={{gap: 5}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    gap: 10,
  },
  input: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 20,
  }
})
