import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Floors extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleFloorsChange = this.handleFloorsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFloorsChange(event) {
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
                        <p className="step">Шаг 2</p>
                    </label>

                    <table >
                        <tr><th>Количество этажей (число)</th></tr>
                        <tr><td>
                            <ul>
                                <form>
                                    <label>
                                        <input type="number" min="0" onChange={this.handleFloorsChange} />
                                    </label>
                                </form>
                            </ul>
                        </td></tr>
                    </table>

                    <Link to="/building"><button className="cancel-but">Отмена</button></Link>
                    <Link to="/material"><button className="next-but" type="submit"> Далее </button> </Link>
                </form>
            </div>
        )
    }
}