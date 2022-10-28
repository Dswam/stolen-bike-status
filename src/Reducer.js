const reducer = (state, action) => {

    switch (action.type) {
        case "set_loading":
            return {
                ...state,
                isLoading: true,
            }

        case "GET_stolenData":
            return {
                ...state,
                isLoading: false,
                bikes: action.payload.bikes
            }
        case "remove_post":
            return {
                ...state,
                bikes: state.bikes.filter((currpostid) =>

                    currpostid.id !== action.payload

                )
            };
        case "SEARCH_QUERY":
            return {
                ...state,
                status: action.payload,



            }
        case 'Next_Page': {
            let pageNumInc = state.page + 1;
            if (pageNumInc >= state.bikes.length) {
                pageNumInc = 0
            }
            return {
                ...state,
                page: pageNumInc


            }
        }
        case 'prev_Page': {
            let pageNum = state.page;
            if (pageNum <= 0) {
                pageNum = 0
                break;
            }
            else {
                pageNum = pageNum + 1
            }
            return {
                ...state,
                page: state.page - 1


            }
        }


    }

    return state;
}
export default reducer;