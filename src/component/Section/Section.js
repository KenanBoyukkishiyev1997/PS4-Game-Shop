import React from 'react';
import Products from '../Products/Products'
import Detail from '../Detail/Detail'
import Cart from '../Cart/Cart'
import { Route } from 'react-router-dom'
import './Section'

class Section extends React.Component {
    render() {
        return (
            <section>

                <Route exact path='/' component={Products} />
                <Route path='/:id' component={Detail} />
                <Route path='/cart' component={Cart} />
            </section>
        )
    }
}



export default Section;
