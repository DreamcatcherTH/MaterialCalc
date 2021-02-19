import React, { Component } from 'react';
import State from '../State/state';
import { Link } from 'react-router-dom';

export default class Building extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleBuildingChange = this.handleBuildingChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleBuildingChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        /* alert('Отправленное имя: ' + this.state.value); */
        event.preventDefault();
    }

    render() {
        return (
            <div>


                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h1>Калькулятор цены конструкций</h1>
                        <p className="step">Шаг 1</p>
                    </label>
                    <table >
                        <tr><th>Что будем строить?</th></tr>
                        <tr><td>
                            <ul>
                                <div class="radio">
                                    <label><input type="radio" name="house" value="house" onChange={this.handleBuildingChange} />Жилой дом</label>
                                </div>

                                <div class="radio">
                                    <label><input type="radio" name="garage" value="garage" onChange={this.handleBuildingChange} />Гараж</label>
                                </div>
                            </ul>
                        </td></tr>
                    </table>
                    <Link to="/floors"><button className="next-but" type="submit">Далее</button></Link>
                </form>
                {/* <button className="cancel-but">Отмена</button> */}

            </div>
        )
    }
}
