import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../state/store';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default class WallLength extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLength: '',
            selectedHeight: ''
        };

        this.handleLengthChange = this.handleLengthChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLengthChange(event) {
        store.dispatch({
            type: 'ADD_LENGTH',
            payload: +event.target.value,
        });
        console.log(store.getState());
    }

    handleHeightChange(event) {
        store.dispatch({
            type: 'ADD_HEIGHT',
            payload: +event.target.value,
        });
        console.log(store.getState());
    }


    handleSubmit(submitEvent) {
        submitEvent.preventDefault();
        console.log(store.getState().wallHeightReducer.payload)
        console.log(store.getState().wallLengthReducer.payload)
        if (!!store.getState().wallHeightReducer.payload && !!store.getState().wallLengthReducer.payload) {
            return this.props.history.push('/result')
        } else {
            return this.props.history.push('/error')
        }
    }

    buildingConvert(buildingConv) {
        if (buildingConv === 'house') {
            return 1;
        } else if (buildingConv === 'garage') {
            return 2;
        } else {
            return 0
        }
    }

    materialConvert(materialConv) {
        if (materialConv === 'brick') {
            return 1;
        } else if (materialConv === 'cinderBlock') {
            return 2;
        } else if (materialConv === 'woodenBlock') {
            return 3;
        } else if (materialConv === 'metal') {
            return 4;
        } else if (materialConv === 'sandwichPanels') {
            return 5;
        } else {
            return 0
        }
    }

    fetching = async () => {
        const response = await fetch("https://data.techart.ru/lab/json/?building="
            + this.buildingConvert(store.getState().buildingReducer.payload)
            + "&height=" + store.getState().floorsReducer.payload
            + "&material=" + this.materialConvert(store.getState().materialReducer.payload)
            + "&sizex=" + store.getState().wallLengthReducer.payload
            + "&sizey=" + store.getState().wallHeightReducer.payload)
            .then(res => res.json());
        store.dispatch({
            type: 'result',
            payload: response.message,
        });
        console.log(store.getState().resultReducer.payload)
    }



    render() {
        return (
            <div>
                <form className="formStyle" onSubmit={this.handleSubmit}>

                    <h3 className="step">Шаг 4</h3>
                    <div className="container">
                        <header>Длина стен (в метрах)</header>
                        <div className="bodyContent inputContent">
                            <label>
                                <TextField type="number"
                                    min="1"
                                    placeholder="Длина"
                                    onClick={() => this.state.selectedLength === 'length'}
                                    onChange={this.handleLengthChange} />
                                <TextField type="number"
                                    min="1"
                                    placeholder="Высота"
                                    onClick={() => this.state.selectedHeight === 'height'}
                                    onChange={this.handleHeightChange} />
                            </label>
                        </div>
                    </div>

                    <div className="button">
                        <Link to="/building"><Button variant="contained" color="primary" className="btn cancel-btn">Отмена</Button></Link>
                        <Button variant="contained" color="primary" className="btn btn-default" type="submit">Рассчитать</Button>
                    </div>
                </form >
            </div >
        )
    }
}