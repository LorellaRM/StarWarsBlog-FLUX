import React from "react"

export function CharacterCard(props) {
    return (
        <div className="card" style="width: 18rem;">
            <img src="#" className="card-img-top" alt="#"></img>
            <div className="card-body">
                <h5 className="card-title">{props.characterName}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.characterHeight}</li>
                    <li className="list-group-item">{props.characterHairColor}</li>
                    <li className="list-group-item">{props.characterSkinColor}</li>
                    <li className="list-group-item">{props.characterBirthYear}</li>
                </ul>                
            </div>
            <div className="card-body">
                <link href="#" className="btn btn-primary">Go somewhere</link>
                <link href="#" className="btn btn-primary">Go somewhere</link>
            </div>
        </div>
    );

}

CharacterCard.propTypes= {
    characterName = PropsTypes.string,
    characterHeight = PropsTypes.string, 
    characterHairColor = PropsTypes.string,
    characterSkinColor = PropsTypes.string,
    characterEyeColor = PropsTypes.string,
    characterBirthYear = PropsTypes.string
};