import React from 'react';
import store from '../../state/store'
import Checkbox from '@material-ui/core/Checkbox';


function RenderGarageItem() {

    const handleMaterialChange = (event) => {
        store.dispatch({
            type: 'ADD_MATERIAL',
            payload: event.target.value,
        });
        console.log(store.getState());
    }

    return (
        <div className="container">
            <header>Материал стен</header>
            <div className="bodyContent">
                <div className="radio">
                    <label>
                        <Checkbox type="radio"
                            value="cinderBlock"
                            onChange={handleMaterialChange} />Шлакоблок</label>
                </div>
                <div className="radio">
                    <label>
                        <Checkbox type="radio"
                            value="metal"
                            onChange={handleMaterialChange} />Металл</label>
                </div>
                <div className="radio">
                    <label>
                        <Checkbox type="radio"
                            value="sandwichPanels"
                            onChange={handleMaterialChange} />Cендвич-панели</label>
                </div>
            </div>
        </div>
    )
}

export default RenderGarageItem;