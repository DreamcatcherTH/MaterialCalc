import React, { Component } from 'react';
import store from '../state/store';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
/* import { connect } from 'react-redux';
import actions from '../actions'; */

class Building extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBuilding: 'building1'
        };

        this.handleHouseChange = this.handleHouseChange.bind(this);
        this.handleGarageChange = this.handleGarageChange.bind(this);
        this.handleBuildingSubmit = this.handleBuildingSubmit.bind(this);
    }

    handleHouseChange(/* event */) {
        store.dispatch({
            type: 'ADD_BUILDING',
            payload: 'house'
        });
        console.log(store.getState());
    }

    handleGarageChange(/* event */) {
        store.dispatch({
            type: 'ADD_BUILDING',
            payload: 'garage',
        });

        console.log(store.getState());
    }

    handleBuildingSubmit(submitEvent) {
        submitEvent.preventDefault();
        if (store.getState().buildingReducer.payload === 'house') {
            return this.props.history.push('/floors')
        } else if (store.getState().buildingReducer.payload === 'garage') {
            return this.props.history.push('/material')
        } else
            return this.props.history.push('/error')
    }

    render() {
        return (
            <div>
                <form className="formStyle" onSubmit={this.handleBuildingSubmit}>
                    <label>

                        <h3 className="step">Шаг 1</h3>
                    </label>
                    <div className="container">
                        <header>Что будем строить?</header>

                        <div className="bodyContent">

                            <div className="radio">
                                <label>
                                    <Checkbox type="radio"
                                        value="house"
                                        onChange={this.handleHouseChange} />Жилой дом</label>
                            </div>

                            <div className="radio">
                                <label>
                                    <Checkbox type="radio"
                                        value="garage"
                                        onChange={this.handleGarageChange} />Гараж</label>
                            </div>

                        </div>
                    </div>
                    <div className="button">
                        <Button variant="contained" color="primary" className="btn btn-default" type="submit" /* onClick={inc} */>Далее</Button>
                    </div>
                </form>
                {/* <button className="btn cancel-btn">Отмена</button> */}
            </div>
        )
    }
}

/* const mapStateToProps = (state) => {
    return{
        counter: state
    }
}
 */
export default Building;/* connect(mapStateToProps, actions)(Building) */
