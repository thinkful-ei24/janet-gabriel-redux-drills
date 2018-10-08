import React from 'react';
import {connect} from 'react-redux';

// Connect this component
 function InterestCalculator(props) {
    return (
        <form className="interest-calculator"
            onSubmit={e => e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="principal">Principal ($)</label>
                <input type="number" id="principal" value={props.principal}
                    min="0" />
            </div>
            <div className="form-group">
                <label htmlFor="interest">Interest rate (%)</label>
                <input type="number" id="interest" value={props.interest}
                    min="0" max="100" step="0.1" />
            </div>
            <div className="form-group">
                <label htmlFor="years">Years</label>
                <input type="number" id="years" value={props.years}
                    min="0" max="100" />
            </div>
            <div className="form-group">
                <label htmlFor="total">Total</label>
                <output type="number" id="total">${props.total.toFixed(2)}</output>
            </div>
        </form>
    );
}

InterestCalculator.defaultProps = {
    principal: 0,
    interest: 0,
    years: 0,
    total: 0
};

function mapStatetoProps(state){

    return {
    total: state.principal * Math.pow(1 + state.interest / 100, state.years),
    principal: state.principal,
    years: state.years,
    interest: state.interest
    }


}

export default connect(mapStatetoProps)(InterestCalculator);
