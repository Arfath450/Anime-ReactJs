import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import APP from './APP'
import * as serviceWorker from './serviceWorker';
import AddToHomescreen from 'react-add-to-homescreen';

 const handleAddToHomescreenClick = () => {
  alert('Add Anime To Home Screen');
};

ReactDOM.render(
    <>
<APP/>
<AddToHomescreen onAddToHomescreenClick={handleAddToHomescreenClick} />
</>, 
    document.getElementById('root'));

serviceWorker.register();

