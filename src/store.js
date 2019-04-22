import {createStore} from 'redux'

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_AUTHOR_FIRST_NAME = 'UPDATE_AUTHOR_FIRST_NAME'
export const UPDATE_AUTHOR_LAST_NAME = 'UPDATE_AUTHOR_LAST_NAME'
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS'
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS'
export const UPDATE_RECIPE = 'UPDATE_RECIPE'

let initialState = {
    name: '',
    category: '',
    authorFirstName: '',
    authorLastName: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

function reducer(state = initialState, action){   // we pass in a state(or it defaults to an empty array) and an action object that contains type and payload
    const {type, payload} = action // get easy access to our parameters
    switch (type) {
        case UPDATE_NAME:
            return {...state, name: payload}
        case UPDATE_CATEGORY:
            return {...state, category: payload}
        case UPDATE_AUTHOR_FIRST_NAME:
            return {...state, authorFirstName: payload}
        case UPDATE_AUTHOR_LAST_NAME:
            return {...state, authorLastName: payload}
        case UPDATE_INGREDIENTS:
            const newIngredients = [...state.ingredients, payload]
            return {...state, ingredients: newIngredients}
        case UPDATE_INSTRUCTIONS:
            const newInstructions = [...state.instructions, payload]
            return {...state, instructions: newInstructions}
        case UPDATE_RECIPE:
            const {name, category, authorFirstName, authorLastName, ingredients, instructions} = state
            const recipe = {name, category, authorFirstName, authorLastName, ingredients, instructions}
            const newRecipes = [...state.recipes, recipe]
            return {...state, recipes: newRecipes}
        default:
            return {...state};
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // this allows us to debug w/ redux state
