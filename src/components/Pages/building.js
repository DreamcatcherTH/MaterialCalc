import React, { Component } from 'react';
import State from '../State/state';
import { Link } from 'react-router-dom';

export default class Building extends Component {
    /* let house = ""; */

    render() {
        return (
            <div>
                <h1>Калькулятор цены конструкций</h1>
                <p class="step">Шаг 1</p>

                <form onSubmit={this.formSubmit}>
                    <table >
                        <tr><th>Что будем строить?</th></tr>
                        <tr><td>
                            <ul>
                                <div class="radio">
                                    <label><input type="radio" name="house" value="house" onChange={this.onValueChange} />Жилой дом</label>
                                </div>

                                <div class="radio">
                                    <label><input type="radio" name="garage" value="garage" onChange={this.onValueChange} />Гараж</label>
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
