import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'


const CURRENCY = 'USD'
const fromUsdToCent = amount => amount * 100

const successPayment = data => {alert('Payment Successful') }
const errorPayment = data => { alert('Payment Error') }

const onToken = (amount, description) => token =>{
  const body = {
    description,
    source: token.id,
    currency: CURRENCY,
    amount: fromUsdToCent(amount)
  }
    axios.post('/api/checkout', body)
         .then(successPayment)
         .catch(errorPayment)
  }

  function Checkout({ name, description, amount }){
    return (
      
      <StripeCheckout
            name={name}
            description={description}
            amount={fromUsdToCent(amount)}
            token={onToken(amount, description)}
            currency={CURRENCY}
            stripeKey={'pk_test_8RC6uYNzpxJ8IqF4u6oDdDjW'}
          />
          )
        }
  
export default Checkout









  


