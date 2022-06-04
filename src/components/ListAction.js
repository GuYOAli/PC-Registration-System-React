import React from 'react';

const ListActions = (props) => {
    const { items, textProperty, valueProperty, selectedItem } = props;
    return ( 
        <ul className="list-group">
            {items.map(item => (
                <li key={item[valueProperty]} className={
                    item === selectedItem ? "list-group-item active" : "list-group-item"
                  }>{item[textProperty]}</li>
            ))}
        </ul>
     );
}

ListActions.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};
 
export default ListActions;