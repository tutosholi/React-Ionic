import {useDispatch} from 'react-redux';
import { GetByCity } from '../reducers/PredictionReducer';
import Search from '../components/Search';
import { useState } from 'react';




const Prediction = () => {
    
    const dispatch = useDispatch();
    const [Searched, setSearched] = useState([]);

    const handleSearch = (city,country) => { 
        const c = city[0].toUpperCase() + city.slice(1);    
        setSearched([...Searched,c]);
        localStorage.setItem('Searched', JSON.stringify({List:Searched}));
        dispatch(GetByCity(c,country));
    }


    return(                           
        <Search search={handleSearch}/>                                         
    );
    
}
 
export default Prediction;