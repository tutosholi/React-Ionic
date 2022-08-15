import './Home.css';
import Prediction from './Prediction';
import { Provider } from 'react-redux';
import store from '../reducers/store';

const Home = () => {

    return (

    <div>
    <Provider store={store}>
    <Prediction/>
    </Provider>
    </div>


  );
};

export default Home;
