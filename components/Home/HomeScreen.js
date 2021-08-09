import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, Dimensions, Button, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Neomorph } from 'react-native-neomorph-shadows';


const window = Dimensions.get('screen').width;

const numcolumns = 2;

const DataList = [
    {key:"1",title:"this is 1"},
    {key:"2",title:"this is 2"},
    {key:"3",title:"this is 3"},
    {key:"4",title:"this is 4"},
    {key:"5",title:"this is 5"},
    {key:"6",title:"this is 6"},
];

const Item = ({ title}) => (
    <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
);

const formatData = (data, numcolumns) => {
        let abc = () => console.log('ok');
        abc();
        const totalrows = Math.floor(DataList.length / numcolumns); // 5 / 2 = 2
        let totalLastRows = data.length - (totalrows * numcolumns); // 5 - (2 * 2) = 1

        while(totalLastRows !== 0 && totalLastRows!== numcolumns){ // 1!==0 && 1 !== 2
            DataList.push({key:"blank",empty: true});
            totalLastRows++;
        }
        return DataList;
    }

const renderItem = ({item, index}) => (
    <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
);

const renderFlatlist = () => (
    <FlatList 
        showsVerticalScrollIndicator={false}
        data={DataList}
        renderItem={renderItem}
        keyExtractor={(item,index) => index.toString()}
        numColumns={numcolumns}
        initialNumToRender={DataList.length} />
)


export default function HomeScreen({navigation}) {
    const [search, setSearch] = useState('');



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={{color: 'white',fontSize: 18}}>Explore</Text>
                    <Text style={{color: 'rgb(94,96,102)'}}>Let's find your favorite movie</Text>
                </View>
                <View style={styles.toolbar}>
                        <View style={styles.searchbarContainer}>
                            <FontAwesome style={{marginRight:10,}} name="search" size={16} color="#4A494C" />
                            <TextInput
                                style={styles.searchbar}
                                placeholder="Search.."
                                onChangeText={setSearch}
                                placeholderTextColor={'#4A494C'}
                                value={search}
                                />
                        </View>
                    <View style={styles.sort}>
                        <FontAwesome name="sort-alpha-asc" size={16} color="#fff" />
                        <FontAwesome name="sort-alpha-desc" size={16} color="#fff" />
                    </View>
                </View>
            </View>
            <View style={styles.main}>
            {/* <Button title="Go to details" onPress={() => navigation.navigate('Details', {itemId: Math.floor(Math.random() * 100)+1,test:search,})} /> */}
                {renderFlatlist()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        // backgroundColor:'orange',
        marginHorizontal: 15,
    },
    main: {
        flex: 2,
    },
    title: {
        flex:3,
        justifyContent: 'center',
    },
    toolbar: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchbar: {
        flex:4,
        color: '#fff',
        textDecorationLine: 'none',
    },
    searchbarContainer: {
        flex: 4,
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 15,
        backgroundColor: 'rgba(16,16,18,0.8)',
        paddingVertical: 10,
        paddingHorizontal: 15,
        
    },
    sort:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    item: {
        flex: 1,
        backgroundColor: 'orange',
        height: window / numcolumns,
    },
    itemTitle: {
        color: '#000',
        fontSize: 50,
    }
});
