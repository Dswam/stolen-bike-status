import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../Reducer";



let api = "https://bikeindex.org/api/v3/search?";
const initialState = {
    isLoading: true,
    manufacturer_name: '',
    status: '',
    stolenness: " ",
    page: 0,
    bikes: []

}
const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)



    const fetchApi = async (url) => {
        dispatch({ type: 'set_loading' })

        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({
                type: 'GET_stolenData',
                payload: {
                    bikes: data.bikes,
                }
            })
            console.log(data)

        } catch (error) {


            console.log(error)
        }


    }

    const removePost = (delet_id) => {

        dispatch({
            type: "remove_post", payload: delet_id

        })


    }

    const searchPost = (searchQuery) => {

        dispatch({
            type: 'SEARCH_QUERY',
            payload: searchQuery,
        });
        console.log(searchQuery)
    }

    const getNext = () => {

        dispatch({
            type: 'Next_Page'
        })

    }

    const getPrev = () => {

        dispatch({
            type: 'prev_Page'
        })

    }




    useEffect(() => {

        fetchApi(`${api} stolenness=${state.stolenness}&& status=${state.status}&&page=${state.page}`);

    }, [state.status,state.page])

    return (
        <AppContext.Provider value={{ ...state, removePost, searchPost,getNext,getPrev }}>{children}</AppContext.Provider>
    )

}


const useGlobalContext = () => {

    return useContext(AppContext)
}


export { AppContext, AppProvider, useGlobalContext };