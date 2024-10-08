import React, { useState } from 'react'
import { TextInput, View, StyleSheet, useWindowDimensions } from 'react-native'

function Search() {
    interface SearchInput {
        search: string
    }
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    const styles = StyleSheet.create({
      search: {
        width: "100%",
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#fff7ed',
        color: '#333',
      },
    })

    const [search, setSearch] = useState<SearchInput>({search: ''})
    
    const handleInput = (text: string) => {
        setSearch({ search: text });
    };
  return (
    <View>
        <TextInput 
            placeholder="Search..."
            value={search.search}
            onChangeText={handleInput}
            style={styles.search}
        />
    </View>
  )
}

export default Search