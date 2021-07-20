import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../state/store';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default class Floors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFloor: 'floorsNum'
        };

        this.handleFloorsChange = this.handleFloorsChange.bind(this);
        this.handleFloorsSubmit = this.handleFloorsSubmit.bind(this);
    }


    handleFloorsChange(event) {
        store.dispatch({
            type: 'ADD_FLOORS',
            payload: +event.target.value
        });
        console.log(store.getState());
    }


    handleFloorsSubmit(submitEvent) {
        submitEvent.preventDefault();
        if (store.getState().floorsReducer !== 0) {
            return this.props.history.push('/material')
        } else
            return this.props.history.push('/error')

    }

    render() {
        return (
            <div>
                <form className="formStyle" onSubmit={this.handleFloorsSubmit}>
                    <label>
                        <h3 className="step"> Шаг 2 </h3>
                    </label>

                    <div className="container">
                        <header>Количество этажей (число)</header>
                        <div className="bodyContent inputContent">
                            <label>
                                <TextField type="number" min="1"
                                    placeholder="1"
                                    checked={this.state.selectedFloor === 'floorsNum'}
                                    onChange={this.handleFloorsChange} />
                            </label>
                        </div>
                    </div>

                    <div className="button">
                        <Link to="/building"><Button variant="contained" color="primary" className="btn cancel-btn">Отмена</Button></Link>
                        <Button variant="contained" color="primary" className="btn btn-default" type="submit">Далее</Button>
                    </div>
                </form>
            </div>
        )
    }
}