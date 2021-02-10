import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WallLength extends Component {

    render() {
        return (
            <div>
                <h1>Калькулятор цены конструкций</h1>
                <p class="step">Шаг 4</p>

                <table >
                    <tr><th>Длина стен (в метрах)</th></tr>
                    <tr><td>
                        <ul>
                            <form>
                                <input type="number" min="0"/> <input type="number" min="0"/>
                            </form>
                        </ul>
                    </td></tr>
                </table>

                <Link to="/building"><button className="cancel-but">Отмена</button></Link>
                {/* <Link to="/"> */}<button className="next-but" type="submit"> Далее </button> {/* </Link> */}
            </div>
        )
    }
}