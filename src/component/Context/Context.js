import React from 'react'

export const DataContext = React.createContext()

export class DataProvider extends React.Component {
    state = {
        products: [
            {
                '_id': '1',
                "title": 'Days Gone',
                "src": 'https://www.godisageek.com/wp-content/uploads/days-gone-review.jpg',
                "description": ' Zonbi Game',
                'content': 'When a virus causes a large portion of humanity to become uncontrollably violent, Deacon, his wife Sarah (Courtnee Draper), and his friend Boozer (Jim Pirri) attempt to flee for safety and escape the carnage. Sarah is stabbed and critically wounded, forcing Deacon to evacuate her on a National Emergency Response Organization (NERO) helicopter. Due to the helicopter being at capacity, Deacon stays behind with Boozer, intending to reunite with Sarah.',
                'price': 55,
                'colors': ["red", 'black', 'crimson', 'teal'],
                'count': 1
            },

            {
                '_id': '2',
                "title": 'The Last Of Us 2',
                "src": 'https://i.ytimg.com/vi/eOiUtRF8k28/maxresdefault.jpg',
                "description": ' Zonbi Game',
                'content': 'After the events of the first game, Joel Miller (Troy Baker) confesses his guilt to his brother Tommy (Jeffrey Pierce). Four years later, Joel and Ellie (Ashley Johnson) have built a life in Jackson, though their relationship has become strained. While on patrol, Joel and Tommy rescue a stranger, Abby Anderson (Laura Bailey), from an Infected horde. They return to an outpost run by Abby s group. Joel and Tommy are attacked by Abby s group, who are part of the Washington Liberation Front (WLF), a militia group based in Seattle; Abby seeks revenge against Joel for murdering her father, a Firefly surgeon (Derek Phillips). Meanwhile, Ellie and her girlfriend Dina (Shannon Woodward) leave Jackson in search of the brothers. Ellie enters the WLF camp to witness Abby beat Joel to death, and swears revenge.',
                'price': 100,
                'colors': ["red", 'black', 'crimson', 'teal'],
                'count': 1
            },

            {
                '_id': '3',
                "title": 'Batman Arkham Knight',
                "src": 'https://cdn-products.eneba.com/resized-products/i1ym5pyqnvgmaeuyco4k_390x400_1x-0.jpg',
                "description": ' Action Game',
                'content': 'Arkham Knight features a large ensemble cast of characters from the history of Batman comics. The main character is Batman (Kevin Conroy)—a superhero trained to the peak of human physical and mental perfection and an expert in martial. He is supported by his allies, Robin (Matthew Mercer) Nightwing (Scott Porter) Catwoman (Grey DeLisle), Barbara Gordon (Ashley Greene)—who assists Batman covertly as the hacker Oracle—and her father police commissioner James Gordon (Jonathan Banks). Batmans loyal butler Alfred Pennyworth and Wayne Enterprises colleague Lucius Fox (Dave Fennoy) provide Batman with tactical support, and the holy warrior Azrael (Khary Payton) aims to replace Batman as Gothams protector',
                'price': 75,
                'colors': ["red", 'black', 'crimson', 'teal'],
                'count': 1
            },

            {
                '_id': '4',
                "title": 'Doom',
                "src": 'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Doom_Cover.jpg/220px-Doom_Cover.jpg',
                "description": ' Shooting Game',
                'content': 'According to the games executive producer Marty Stratton, the key principles of Dooms single-player mode are "badass demons, big effing guns, and moving really fast". The game allows players to perform movements such as double jumps and ledge climbs throughout levels of industrial and corporate fields of a Union Aerospace Corporation (UAC) research facility on Mars and then levels of Hell,[4] as the combat system puts emphasis upon momentum and speed.[5] The approach is known as "push-forward combat", which discourages players from taking cover behind obstacles or resting to regain health while playing from the Doom Slayers perspective Players instead collect health and armor pick-ups by killing enemies. "Glory Kills" is a newly-introduced melee execution system; when enough damage has been dealt to an enemy, the game will highlight it and allow the player to perform a quick and violent melee takedown, rewarding the player with small health recovery',
                'price': 75,
                'colors': ["red", 'black', 'crimson', 'teal'],
                'count': 1
            },

            {
                '_id': '5',
                "title": 'Fallout 4',
                "src": 'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Fallout_4_cover_art.jpg/220px-Fallout_4_cover_art.jpg',
                "description": ' Shoot Game',
                'content': 'Fallout 4 is an action role-playing game set in an open world environment. Gameplay is similar to that of Fallout 3 and Fallout: New Vegas, the two previous primary iterations in the series. But unlike the previous two titles, the gun-gameplay was handled by id Software. Returning features include a camera that can switch between a first-person and third-person perspective. Fallout 4 introduces features including a layered armor system, base-building, a dialogue system featuring 111,000 lines of dialogue, and a crafting system which implements every lootable object in the game. Enemies such as Mole Rats, Raiders, Super Mutants, Deathclaws, and Feral Ghouls return, along with the companion Dogmeat.',
                'price': 70,
                'colors': ["red", 'black', 'crimson', 'teal'],
                'count': 1
            },

            {
                '_id': '6',
                "title": 'Shadow of Mordor',
                "src": 'https://upload.wikimedia.org/wikipedia/en/0/01/Shadow_of_Mordor_cover_art.jpg',
                "description": ' War Game',
                'content': 'Middle-earth: Shadow of Mordor is a third-person open world action-adventure video game, where the player controls a ranger by the name of Talion who seeks revenge on the forces of Sauron after his family, consisting of his wife and son, are killed by those that lead them.[1] Players can travel across locations in the game through parkour, riding monsters, or accessing Forge Towers, which serve as fast travel points',
                'price': 25,
                'colors': ["red", 'black', 'crimson', 'teal'],
                'count': 1
            },
        ],
        cart: [],
        total: 0
    }

    addCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item._id !== id
        })



        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            this.setState({ cart: [...cart, ...data] })
        } else {
            alert("the product has been added ")
        }

    }

    reduction = id => {
        const { cart } = this.state
        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1
            }
        })

        this.setState({ cart: cart })
        this.getTotal()
    }

    incerease = id => {
        const { cart } = this.state
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1
            }
        })
        this.setState({ cart: cart })
        this.getTotal()
    }

    removeProduct = id => {
        if (window.confirm('Are you sure ?')) {
            const { cart } = this.state;
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })
            this.setState({ cart: cart })
            this.getTotal()
        }

    }

    getTotal = () => {
        const { cart } = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count)
        }, 0)

        this.setState({ total: res })
    }

    componentDidUpdate() {
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    }

    componentDidMount() {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if (dataCart !== null) {
            this.setState({ cart: dataCart })
        }

        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'))
        if (dataTotal !== null) {
            this.setState({ total: dataTotal })
        }
    }
    render() {
        const { products, cart, total } = this.state;
        const { addCart, reduction, incerease, removeProduct, getTotal } = this

        return (
            <DataContext.Provider value={{ products, addCart, cart, total, getTotal, reduction, incerease, removeProduct }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
