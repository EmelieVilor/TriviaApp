import { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Colors } from '../constants/colors';
import { Typography } from '../constants/typography';
import { useRouter } from "expo-router";


export function Category() {
    // const [category, setCategory] = useState(''); 
     const router = useRouter();

    return (

        <View>
        {/* <View style={styles.container}>
            <Text style={styles.category}>Choose Difficulty Level</Text>
        <View style={styles.categoryList}>
            <Pressable style={styles.categoryBtn}>
                <Text style={styles.categoryText} onPress={() => router.push('/game')}>Category</Text>
            </Pressable>
        </View>
        </View> */}
        
        <View style={styles.container}>
            <Text style={styles.category}>Which category do you want to play?</Text>
        <View style={styles.categoryList}>
            <Pressable style={styles.categoryBtn}>
                <Text style={styles.categoryText} onPress={() => router.push('/game')}>Science</Text>
            </Pressable>
            <Pressable style={styles.categoryBtn}>
                <Text style={styles.categoryText} onPress={() => router.push('/game')}>Mixed Categories</Text>
            </Pressable>
        </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: Colors.purple,
    borderRadius: 20,
    padding: 20,
    width: '95%',
  },
  category: {
    fontSize: Typography.fsSubtitle,
    color: Colors.light,
    textAlign: 'center',
    marginBottom: 25,
  },
  categoryList: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  categoryBtn: {
    backgroundColor: Colors.secondary,
    borderRadius: 50,
    padding: 15,
    width: 200,
  },
    categoryText: {
    color: Colors.primary,
    fontSize: Typography.fsBody,
    textAlign: 'center',
  }
});