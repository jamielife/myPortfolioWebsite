import React, { useEffect, useState, useRef } from "react";
import { LogBox } from "react-native";
import { Text, FlatList, Pressable, View, Link, Box } from "native-base";
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
        <View> 
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={Object.keys(todos)}
                renderItem={({ item }) => 
                    <Pressable _hover={{ bg: "primary.50" }} >
                        <Box w={[64, 72, 96]} bg="primary.300" p={4} m={4}>
                            <Text bold>{todos[item].name}</Text>
                            <Text>{todos[item].blurb}</Text>
                        </Box>
                    </Pressable>}
                keyExtractor={(item) => todos[item].id}
            />
            {/* <Box>{ console.log(todos) }</Box> *extendTheme* */}
        </View>
    );
}
 
export default Work;