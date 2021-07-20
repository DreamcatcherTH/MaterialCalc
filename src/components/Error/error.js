import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class Error extends Component {



    render() {
        return (
            <div>
                <form className="formStyle">
                    <label>
                        <p className="step">Результат расчета</p>
                    </label>
                    <div className="container">
                        <header>Ошибка</header>
                        <div className="bodyContent">
                            <p>Некорректные размеры здания</p>
                        </div>
                    </div>
                    <div className="button">
                        <Button variant="contained" color="primary" className="btn btn-default" type="submit">Новый расчет</Button>
                    </div>
                </form>
            </div>
        )
    }

}