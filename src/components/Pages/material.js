import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Material extends Component {

    render() {
        return (
            <div>
                <h1>Калькулятор цены конструкций</h1>
                <p class="step">Шаг 3</p>

                <table >
                    <tr><th>Материал стен</th></tr>
                    <tr><td>
                        <div class="radio">
                            <label><input type="radio" name="optradio" /* value="brick" *//>Кирпич</label>
                        </div>
                        <div class="radio">
                            <label><input type="radio" name="optradio" /* value="cinderBlock" *//>Шлакоблок</label>
                        </div>
                        <div class="radio">
                            <label><input type="radio" name="optradio" /* value="woodenBlock" *//>Деревянный брус</label>
                        </div>

                    </td></tr>
                </table>

                <Link to="/building"><button className="cancel-but">Отмена</button></Link>
                <Link to="/wallLength"><button className="next-but" type="submit">Далее</button></Link>
            </div>
        )
    }
}