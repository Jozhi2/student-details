import {
    ADD_STUDENT,
    ADD_STUDENT_SUCCESS,
    DELETE_STUDENT,
    DELETE_STUDENT_SUCCESS
} from '../types'

//every reducer has his own state
const initialState = {
    students: [],
    error: null,
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case DELETE_STUDENT:
        case ADD_STUDENT:
            return{
                ...state,
                loading: action.payload
            }
        case DELETE_STUDENT_SUCCESS:
            return{
                ...state,
                students: action.payload,
                loading: false,
                error: null
            }
        case ADD_STUDENT_SUCCESS:
            return{
                ...state,
                students: [...state.students, action.payload],
                loading: false,
                error: null
            }
        default:
            return state;
    }
}