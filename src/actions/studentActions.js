import {
    ADD_STUDENT,
    ADD_STUDENT_SUCCESS,
    DELETE_STUDENT,
    DELETE_STUDENT_SUCCESS
} from '../types';


//add new student 
export function addStudentAction(student){
    return async(dispatch) => {
        dispatch( addStudent() );
        dispatch( addStudentSuccess(student.studentsInfo) );
    }
}

const addStudent = () => ({
    type: ADD_STUDENT,
    payload: true
})

const addStudentSuccess = student => ({
    type: ADD_STUDENT_SUCCESS,
    payload: student
})

//delete student
export function deleteStudentAction(student){
    return async(dispatch) => {
        dispatch( deleteStudent() );
        const students = student.students;
        students.find( (element, index) => {
            if(element?.uuid === student?.uuid){
                students.splice(index,1);
                return element;
            }
        });

        dispatch( deleteStudentSuccess(students) );
    }
}

const deleteStudent = () => ({
    type: DELETE_STUDENT,
    payload: true
})

const deleteStudentSuccess = student => ({
    type: DELETE_STUDENT_SUCCESS,
    payload: student
})

