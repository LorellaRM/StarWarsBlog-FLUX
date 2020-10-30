import React, { useEffect } from "react"
import {CharacterCard} from "./characterCard"
import { Context } from "../store/appContext"

export function Character(props) {
    useEffect(()=>{
        actions.getPeople()
    },[])
    return(
       store.person.map((person,index)=>(
        <div>
            <Context
                {characterName} = "state.store.person.name"
                {characterHeight} = "state.store.person.height"
                {characterHairColor} = "state.store.person.hair_color"
                {characterSkinColor} = "state.store.person.skin_color"
                {characterEyeColor} = "state.store.person.eye_color"
                {characterBirthYear} = "state.store.person.birth_year"
            />
        </div>
       
       ))
    );
}