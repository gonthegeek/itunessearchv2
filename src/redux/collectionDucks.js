import axios from 'axios'

//consantes
const dataInicial = {
    array: []
}

//types
const GET_COLLECTION_SUCC = "GET_COLLECTION_SUCC"

//reducer
export default function collectionReducer(state= dataInicial, action){
    switch(action.type){
        case GET_COLLECTION_SUCC:
            return {...state, array:action.payload}
        default:
            return state
    }
}

//actions
export const obtainCollectionAction = () => async(dispatch, getState)=> {
    try {
        const res = await axios.get(`https://itunes.apple.com/lookup?id=487143&entity=album`)
        dispatch({
            type: GET_COLLECTION_SUCC,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}