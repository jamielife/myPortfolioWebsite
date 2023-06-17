import React, { useEffect, useState, useRef } from "react";
import { LogBox } from "react-native";
import { Text, FlatList, Pressable, View, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, VStack, Box, Column, ZStack} from "native-base";
import supabase from "../supabase";

const Work = () => {
    const [todos, setTodos] = useState([]);
    const componentMounted = useRef(true);

    useEffect(() => {
        const fetchTodos = async () => {
            const {data, error} = await supabase.from('work').select('*').order('id', {ascending: false});
            if (error) {
                console.log('error', error);
            } else {
                setTodos(data);
            }
        };
        if (componentMounted.current) {
            fetchTodos();
        }

        return () => {
            componentMounted.current = false; 
        };
    }, []);

    return ( 
        <View flex={1}> 
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={Object.keys(todos)}
                renderItem={({ item }) => <Box>{todos[item].name}</Box>}
                keyExtractor={(item) => todos[item].id}
            />
            <Box>{ console.log(todos) }</Box>
        </View>
    );
}
 
export default Work;