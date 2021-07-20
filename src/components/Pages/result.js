import React, { Component } from 'react';
import store from '../state/store';
import Button from '@material-ui/core/Button';
/* import { connect } from 'react-redux'; */

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
    }

    render() {
        const result = store.getState().resultReducer.payload;
        console.log(result)
        return (
            <div>
                <form className="formStyle" /* onSubmit={this.handleResultSubmit} */>
                    <label>
                        <h3 className="step">Результат расчета</h3>
                    </label>
                    <div className="container">
                        <header>Успешно</header>
                        <div className="bodyContent inputContent">
                            <p>{result}</p>
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

/* const mapStateToProps = (store) => ({
    result: store.resultReducer.payload
  }); */

export default Result/* connect(mapStateToProps)(Result) */;