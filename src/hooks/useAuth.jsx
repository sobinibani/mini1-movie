import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from "react-redux";
import {setLogin} from '../redux/actions'

export const useAuth = () => {
    const dispatch = useDispatch();
    const buttonClicked = useSelector(state => state.buttonClicked);

    console.log(buttonClicked);
    if(buttonClicked){
        console.log('true')
    }else {
        console.log('false')
    }
}