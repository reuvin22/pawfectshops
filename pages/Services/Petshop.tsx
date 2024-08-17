import { TouchableOpacity, View, Text, StyleSheet, useWindowDimensions, ScrollView, Image, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../../components/Search'
import Title from '../../components/Title'
import Checkbox from 'expo-checkbox'
import Food1 from '../../assets/foods/acc.png'
import Food2 from '../../assets/foods/df1.jpg'
import Food3 from '../../assets/foods/df2.jpeg'
import Food4 from '../../assets/foods/df2.jpeg'
import CustomButton from '../../components/CustomButton'
    type Props = {
        navigation:any
    }
const Petshop = (props: Props) => {
    const windowHeight = useWindowDimensions().height;
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
    const [productWidth, setProductWidth] = useState(2);
    const [subcategory, setSubCategory] = useState('catFoods')
    const [isChecked, setIsChecked] = useState({
        catfood: false,
        dogfood: false,
        catAccessories: false,
        dogAccessories: false
    })
    const sampleImages = [
        {img: Food1, name:'Test'},
        {img: Food2, name:'Test2'},
        {img: Food3, name:'Test3'},
        {img: Food4, name:'Test4'},
        {img: Food1, name:'Test1'},
        {img: Food2, name:'Test2'},
    ]
    const handleResponsive = () => {
        if (windowWidth > 500) {
            setProductWidth(3);
        } else {
            setProductWidth(2);
        }
    };

    useEffect(() => {
        handleResponsive();
    }, [windowWidth]);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginVertical: 10,
            width: windowWidth > 500 ? "70%" : "95%",
            alignSelf: 'center',
          },
        filterContainer: {
            flexDirection: 'row',
            gap: 15,
            marginTop: 10,
            justifyContent: 'center'
        },
        text: {
            fontSize: windowWidth > 500 ? 18 : 15,
        },
        imageContainer: {
            borderWidth: 2,
            flexDirection: 'row',
            flexWrap: 'wrap',
          },
        products: {
            maxHeight: 120,
            maxWidth: "90%",
            minHeight: 120,
            minWidth: "90%",
            marginRight: 20,
            marginTop: 10,
            borderRadius: 15,
        },
        itemContainer: {
            flex: 1,
            margin: 5,
            width: '100%'
        },
        productView: {
            flexWrap: 'wrap',
            borderWidth: 2,
            borderRadius: 15,
            height: 250,
            alignItems: 'center',
        },
        productName: {
            fontSize: 15,
            marginTop: 10,
            fontWeight: 'bold'
        },
        cardDescription: {
            flexDirection: 'column'
        },
        productPrice: {
            fontSize: 10
        }
    })

    const handleSubCategories= (data) => {
        switch(data){
            case 'catFoods':
                setSubCategory('catFoods')
            break;
            case 'dogFoods':
                setSubCategory('dogFoods')
            break;
            case 'Accessories':
                setSubCategory('accessories')
            break;
        }
    }
  return (
    <View style={styles.container}>
        <Title 
            mainTitle='PET SHOP'
            navigateLeft='Home'
            titleLeft='Back'
        />
        <Search />
        <View style={styles.filterContainer}>
            <TouchableOpacity onPress={() => handleSubCategories('catFoods')}>
                <Text style={styles.text}>Cat Food</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSubCategories('dogFoods')}>
                <Text style={styles.text}>Dog Food</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSubCategories('Accessories')}>
                <Text style={styles.text}>Accessories</Text>
            </TouchableOpacity>
        </View>
        {subcategory === 'catFoods' && (
            <FlatList
                data={sampleImages}
                numColumns={productWidth}
                key={productWidth}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => console.log(index)}
                        key={index}
                    >
                        <View style={styles.productView}>
                            <Image source={item.img} style={styles.products} />
                            <Text style={styles.productName}>{item.name}</Text>
                            <View style={styles.cardDescription}>
                            <CustomButton btnTitle='Add to Card' color='addToCart'/>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        )}

        {subcategory === 'dogFoods' && (
            <FlatList
                data={sampleImages}
                numColumns={productWidth}
                key={productWidth}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => console.log(index)}
                        key={index}
                    >
                        <View style={styles.productView}>
                            <Image source={item.img} style={styles.products} />
                            <Text style={styles.productName}>{item.name}</Text>
                            <View style={styles.cardDescription}>
                            <CustomButton btnTitle='Add to Card' color='addToCart'/>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        )}

        {subcategory === 'accessories' && (
            <FlatList
                data={sampleImages}
                numColumns={productWidth}
                key={productWidth}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => console.log(index)}
                        key={index}
                    >
                        <View style={styles.productView}>
                            <Image source={item.img} style={styles.products} />
                            <Text style={styles.productName}>{item.name}</Text>
                            <View style={styles.cardDescription}>
                            <CustomButton btnTitle='Add to Card' color='addToCart'/>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        )}
    </View>
  )
}

export default Petshop