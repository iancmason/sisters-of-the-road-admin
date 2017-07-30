import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


class BuyMealPage extends Component {
    constructor () {
        super();
    }

    buyMeal (account, amount) {
        const {
            updateCredit,
            switchView
         } = this.props;
         amount = Number(amount);
         axios.post('/account/1/subtract', {amount: amount}).then(function(response) {
             if (response.data && response.data.result === 'ok') {
                updateCredit(account.currentCredit - amount);
                switchView('accountpage', account);
             } else {
                 // the account ID was not found - what to do?
                 console.log('no account!')
             }
         });
    }

    render () {
        const {
            account
        } = this.props;

        var amount;

        return (
            <div className="BuyMealPage">
                <div className="header col-sm-12 centered">
                    <h3>{account.name}</h3>
                    <h5>Last worked: {account.lastCredit}</h5>
                    <h5>Last meal: {account.lastMeal}</h5>
                </div>
                <div id="calculate" className="jumbotron row center-block">
                    <div className="total">
                        <h3 className="text-center">Meal Total:</h3>
                        <input id="total"
                               className="input-lg col-sm-offset-3 text-center center-block"
                               type="number"
                               min="0.00"
                               step="0.25"
                               max="2500"
                               onChange={(event) => amount = event.target.value} />
                    </div>
                </div>
                <div>
                    <button className="btn btn-success col-sm-offset-5 center-block" onClick={() => this.buyMeal(account, amount)}>
                        Spend amount
                    </button>
                </div>
                <button className="btn btn-info col-sm-offset-5 center-block" onClick={() => this.props.switchView('accountpage', account)}>
                    Cancel
                </button>
            </div>
         );
    }
}

export default BuyMealPage;