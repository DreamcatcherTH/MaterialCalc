import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Floors extends Component {

    render() {
        return (
            <div>
                <h1>Калькулятор цены конструкций</h1>
                <p class="step">Шаг 2</p>

                <table >
                    <tr><th>Количество этажей (число)</th></tr>
                    <tr><td>
                        <ul>
                            <form>
                                <label>
                                    <input type="number" min="0"/>
                                </label>
                            </form>
                        </ul>
                    </td></tr>
                </table>

                <Link to="/building"><button className="cancel-but">Отмена</button></Link>
                <Link to="/material"><button className="next-but" type="submit"> Далее </button> </Link>
            </div>
        )
    }
}