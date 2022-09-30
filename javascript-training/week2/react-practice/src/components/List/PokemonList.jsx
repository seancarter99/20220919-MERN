import { useState, useEffect } from 'react';
import axios from 'axios';
import { PokemonForm } from '../Form/PokemonForm';

// Axios allows us to fire off HTTP requests to some API
// Before axios/fetch devs had to rely on XMLHttpRequest

    /**
     * For UPDATE AND DELETE operations:
     * 
     * PUT: 
     *      Have two modes to your table row, update mode and not updating (isEdit) state
     *      Use conditional rendering to render the table as normal if !isEdit
     *      If isEdit is true, instead, display a altered table where each data is an input
     *      Or create a form/modal that updates a given pokemon when you click on the edit button
     * 
     * DELETE:
     *      Add a delete button to the table row and clicking on it extract the _id from the pokemon object
     *      and shoots off a DELETE http request using axios. From there, manually the remove the pokemon
     *      from the list OR refetch data 
     */

const Pokemon = ({pokemon: {name, pokedex, types, imageUrl}}) => {

    // const [isEdit, toggleIsEdit] = useState(false);

    // This would be altered row that's in edit mode
    // if (isEdit) {
    //     return (<></>)
    // }
    return (
        <tr>
            <td className="row-item">{name}</td>
            <td className="row-item">{pokedex?.number}</td>
            <td className="row-item">{types[0]}</td>
            <td className="row-item">{types[1]}</td>
            <td className="row-item"><img height="100" src={imageUrl} alt={name}/></td>
        </tr>
    );
}

export const PokemonList = () => {
    
    // It will initialize to an empty array rather than undefined
    const [pokemonList, setPokemonList] = useState([]);
    
    // React does NOT support making this callback asynchronous
    // So you MUST use .then()/.catch() OR have it call another async function to use await
    useEffect(() => {
        // Axios returns a fulfilled promise if the status code is < 400
        // and a rejected promise when >= to 400 
        
        // Move this to store. Get the res.data and use dispatch(setPokemonList(res.data))
        axios.get('http://localhost:9000/pokemon')
            .then(res => { setPokemonList(res.data); console.log(res.data) })
            .catch(err => console.error(err)); // This could easily be to render an error display
    }, []);

    return (
        <>
            <PokemonForm setPokemonList={setPokemonList}/>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Pokedex Number</th>
                        <th>Type 1</th>
                        <th>Type 2</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemonList.map(pokemon => <Pokemon key={pokemon._id} pokemon={pokemon}/>)}
                </tbody>
                
            </table>
        </>
    );
}