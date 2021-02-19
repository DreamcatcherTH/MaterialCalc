import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Material extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleMaterialChange = this.handleMaterialChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMaterialChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h1>Калькулятор цены конструкций</h1>
                        <p className="step">Шаг 3</p>
                    </label>
                    <table >
                        <tr><th>Материал стен</th></tr>
                        <tr><td>
                            <div class="radio">
                                <label><input type="radio" name="optradio" value="brick"  onChange={this.handleMaterialChange} />Кирпич</label>
                            </div>
                            <div class="radio">
                                <label><input type="radio" name="optradio" value="cinderBlock"  onChange={this.handleMaterialChange} />Шлакоблок</label>
                            </div>
                            <div class="radio">
                                <label><input type="radio" name="optradio" value="woodenBlock"  onChange={this.handleMaterialChange} />Деревянный брус</label>
                            </div>

                        </td></tr>
                    </table>

                    <Link to="/building"><button className="cancel-but">Отмена</button></Link>
                    <Link to="/wallLength"><button className="next-but" type="submit">Далее</button></Link>
                </form>
            </div>
        )
    }
}