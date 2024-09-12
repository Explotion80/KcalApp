import {View, Text, Button, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import {Link} from 'expo-router';
import {gql, useQuery} from '@apollo/client';
import dayjs from 'dayjs';
import FoodLogListItem from '@/components/FoodLogListItem';


const query = gql`
query foodLogsForDate($date: Date!, $user_id: String!) {
  foodLogsForDate(date: $date, user_id: $user_id) {
    carbs
    created_at
    fat
    fiber
    food_id
    id
    kcal
    label
    protein
    user_id
  }
}`

export default function HomeScreen() {
    const user_id = 'quent';
    const {data, loading, error} = useQuery(query, {variables: {
        date: dayjs().format('YYYY-MM-DD'),
        user_id,
    },
})
if (loading) {
    return <ActivityIndicator />
}
if(error) {
    return <Text>Błąd w przesyle danych</Text>
}

    return (
    <View style={styles.container}>
        <View style={styles.headerRow}>
            <Text style={styles.subTitle}>Kalorie</Text>
            <Text> 1770 - 370 = 1400</Text>
        </View>

         <View 
                style={styles.headerRow}
            >
            <Text style={styles.subTitle}>
                Produkty zapisane dnia dzisiejszego
            </Text>
            <Link href="/search" asChild>
                <Button title="DODAJ PRODUKT"></Button>
            </Link>
        </View>
            <FlatList 
                data={data.foodLogsForDate}
                contentContainerStyle={{gap: 5}}
                renderItem={({item}) => <FoodLogListItem item={item} />}
            />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whire', 
        flex: 1, 
        padding: 10, 
        gap: 10,
    },
    headerRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
    },
    subTitle: {
        fontSize: 18, 
        fontWeight: '500', 
        flex: 1, 
        color: 'dimgray',
    }
})