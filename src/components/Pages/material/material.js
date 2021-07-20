import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../../state/store';
import RenderHouseItem from './houseMaterials';
import RenderGarageItem from './garageMaterials';
import Button from '@material-ui/core/Button';


export default class Material extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMaterial: 'material1',
            material: ''
        };

        /*                     this.handleBrickChange = this.handleBrickChange.bind(this);
                            this.handleCinderBlockChange = this.handleCinderBlockChange.bind(this);
                            this.handleWoodenBlockChange = this.handleWoodenBlockChange.bind(this);
                            this.handleMetalChange = this.handleMetalChange.bind(this);
                            this.handleSandwichPanelsChange = this.handleSandwichPanelsChange.bind(this); */
    }

    handleHouseChange = () => {
        this.state({ material: 'house' })
    }

    handleGarageChange = () => {
        this.state({ material: 'garage' })
    }

    /*     handleMaterialSubmit = (submitEvent) => {
            submitEvent.preventDefault();
        } */

    handleMaterialSubmit = (submitEvent) => {
        submitEvent.preventDefault();
        console.log(store.getState().materialReducer.payload)
        if (store.getState().materialReducer.payload !== undefined) {
            return this.props.history.push('/wallLength')
        } else {
            return this.props.history.push('/error')
        }
    }


    render() {
        let materialRender

        if (store.getState().buildingReducer.payload === 'house') {
            materialRender = <RenderHouseItem />
        }
        else {
            materialRender = <RenderGarageItem />
        }

        var count = 1;
        return (
            <div>
                <form className="formStyle" onSubmit={this.handleMaterialSubmit}>
                    <label>
                        <h3 className="step">Шаг 3{/* {count} */}</h3>
                    </label>

                    {materialRender}

                    <div className="button">
                        <Link to="/building"><Button variant="contained" color="primary" className="btn cancel-btn">Отмена</Button></Link>
                        <Button variant="contained" color="primary" className="btn btn-default" type="submit" onClick={() => count++} > Далее </Button>
                    </div>
                </form >
            </div >
        )
    }

}