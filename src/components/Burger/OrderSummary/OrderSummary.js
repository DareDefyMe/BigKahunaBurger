import React , {useEffect} from 'react';
import Auxil from '../../../hoc/Auxil';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
                                    .map(igKey => {
                                        return (<li key={igKey}><span style={{textTransform:"capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}</li>);
                                    });


    return (
        <Auxil>
            <h3>Your Order</h3>
            <p>A delicious burger with followiing ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : </strong>{props.price.toFixed(2)}</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Check Out</Button>
        </Auxil>
    )
};

export default OrderSummary;