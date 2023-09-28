/*import React from 'react';
class ItemListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showTitle: false };
    }

    render() {
        return (
          <div>
            <button onClick={() => this.setState({ showTitle: true })}>Click</button>
            {this.state.showTitle && (
              <h1>Hola Mundo</h1>
            )}
          </div>
        );
      }
    }

    export default */
   
    import ItemList from "./ItemList"
    
    import React from 'react'
    
    const ItemListContainer = () => {
      return (
       <ItemList/>
      )
    }
    
    export default ItemListContainer
  