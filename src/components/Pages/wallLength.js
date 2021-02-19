import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WallLength extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: '',
            height: ''
        };

        this.handleLengthChange = this.handleLengthChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLengthChange(event) {
        this.setState({
            value: event.target.length
        });
    }

    handleHeightChange(event) {
        this.setState({
            value: event.target.height
        });
    }

    handleSubmit(event) {
        console.log('Отправленное имя: ' + this.state.length + this.state.height);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Калькулятор цены конструкций</h1>
                    <p className="step">Шаг 4</p>
                </form>
                <table >
                    <tr><th>Длина стен (в метрах)</th></tr>
                    <tr><td>
                        <ul>
                            <form>
                                <label>
                                    <input type="number" min="0" placeholder="Длина" onChange={this.handleLengthChange} />
                                    <input type="number" min="0" placeholder="Высота" onChange={this.handleHeightChange} />
                                </label>
                            </form>
                        </ul>
                    </td></tr>
                </table>

                <Link to="/building"><button className="cancel-but">Отмена</button></Link>
                {/* <Link to="/"> */} <button className="next-but" type="submit"> Далее </button> {/* </Link> */}
            </div >
        )
    }
}