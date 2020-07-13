import React, { Component } from 'react'
import { DataContext } from '../Context/Context'
import Colors from '../Colors/Colors'
import '../Header/Header.scss'
class Cart extends Component {
    static contextType = DataContext

    componentDidMount(){
        this.context.getTotal()
    }

    render() {
        const { cart, reduction, incerease, removeProduct, total } = this.context
        if (cart.length === 0) {
            return <h2 style={{ textAlign: "center" }}>Nothing Products</h2>
        } else {
            return (
                <>
                    {
                        cart.map(item => (
                            <div className='details cart' key={item._id}>
                                <img src={item.src} alt='' />

                                <div className='box'>
                                    <div className='row'>
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    <p><Colors colors={item.colors} /></p>
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <div className='amount'>
                                        <button className='count' onClick={() => reduction(item._id)}>-</button>
                                        <span>{item.count}</span>
                                        <button className='count' onClick={() => incerease(item._id)} >+</button>
                                    </div>
                                </div>

                                <div className='delete' onClick={() => removeProduct(item._id)}>x</div>
                            </div>
                        ))
                    }

                    <div className='total'>
                        <h3>Total:${total}</h3>
                    </div>
                </>
            )
        }
    }

}

export default Cart