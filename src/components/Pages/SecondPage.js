import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SecondPage extends Component {

    render() {
        return (
            <div>
                    <Link to="/"><h1>Калькулятор цены конструкций</h1></Link>
                <p class="step">Шаг 1</p>

                <table >
                    <tr><th>Что будем строить?</th></tr>
                    <tr><td>
                        <ul>
                            <li>
                                Первый пункт
                            </li>
                            <li>
                                Второй пункт
                            </li>
                        </ul>
                    </td></tr>
                </table>

                <button class="cancel-but">Отмена</button>
                <button class="next-but">Далее</button>
            </div>
        )
    }
}