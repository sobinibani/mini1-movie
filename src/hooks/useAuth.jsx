import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from "react-redux";

export const useAuth = () => {

    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const dispatch = useDispatch();

    if(isLoggedIn){
        // console.log('true')
        return true;
    }else {
        // console.log('false')
        return false;
    }
}