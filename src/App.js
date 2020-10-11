import React, {useState} from 'react'
import Filter from "./components/Filter";
import {DigitHeader, DigitProviders, DigitLayout} from "@cthit/react-digit-components";
import Menu from "./components/Menu";
import {groupTitles, options, pref, testMenu, testFood, nonPizzaGroups, pizzaGroups} from "./mockData";

const App = () => {
    const [maxPrice, setMaxPrice] = useState();

    const [wantedIngredients, setWantedIngredients] = useState([]);
    const [unwantedIngredients, setUnwantedIngredients] = useState([]);

    const [foodGroups, setFoodGroups] = useState([])
    const [foodPref, setFoodPref] = useState([]);

    console.log(nonPizzaGroups)
    console.log(testMenu)

    return <DigitProviders>
        <DigitHeader
            title="Sannes"
            renderMain={() => (
                <DigitLayout.Column alignItems='center'>
                    <Filter groupNames={groupTitles} chosenFoodGroups={{value: foodGroups, setter: setFoodGroups}} prefNames={pref}
                            chosenFoodPref={{value: foodPref, setter: setFoodPref}} ingredients={testFood.ingredients}
                            maxPrice={{value: maxPrice, setter: setMaxPrice}}
                            wantedIngredients={{value: wantedIngredients, setter: setWantedIngredients}}
                            unwantedIngredients={{value: unwantedIngredients, setter: setUnwantedIngredients}}/>
                    <Menu foodGroups={pizzaGroups}/>
                    <Menu foodGroups={nonPizzaGroups}/>
                </DigitLayout.Column>
            )}
        />
    </DigitProviders>
}

export default App