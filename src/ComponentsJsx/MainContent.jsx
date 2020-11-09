import React from 'react';

// массив данных
import RecipeArray from "./ComponentsForComponents/RecipeArray";


import ComponentsForRecipe from "./ComponentsForComponents/ComponentsForRecipe";

// компонент css
import "./ComponentsCss/MainCintent.css"

export default function MainContent() {
    const Array = RecipeArray.map(item =>
        <div key={item.id}>
            <ComponentsForRecipe key={item.id} item={item}/>
        </div>
    );
    return (
        <div>
            {Array}
        </div>
    );
}
