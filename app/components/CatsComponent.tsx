"use client"
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCatsFetch} from "@/store/catSlice";
import {CatState} from "@/types/CatsTypes";

const CatComponent = () => {
    const dispatch = useDispatch();
    const cats = useSelector((state: CatState) => state?.cats);

    useEffect(() => {
        dispatch(getCatsFetch());
    }, [dispatch])

    return (
        <div>
            {cats.isLoading ? <p>Loading...</p> :
                <ul>{cats.cats.map((cat) => <li key={cat.id}>{cat.name}</li>)} </ul>}
        </div>
    );
};

export default CatComponent;
