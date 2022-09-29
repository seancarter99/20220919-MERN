// Create an array of items to render
const groceries = [{
        item: 'Eggs',
        store: 'Cub Foods',
        price: 0.70,
        id: 5425324
    }, {
        item: 'Milk',
        store: 'Target',
        price: 2.50,
        id: 643254324
    }, {
        item: 'Ice Cream',
        store: 'Kroger',
        price: 5.50,
        id: 753636435
    }, {
        item: 'Ramen',
        store: 'Walgreens',
        price: 1.08,
        id: 312415431
    }, {
        item: 'Honey',
        store: 'Publix',
        price: 4.00,
        id: 559869485
    }
];

export const SimpleList = () => {
    return (
        <table>
            {/* Columns */}
            <thead>
                <tr>
                    {/* Column header. Table header */}
                    <th>Item</th>
                    <th>Store</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {/* Table row */}
                {/* <tr>
                    <td>{groceries[0].item}</td>
                    <td>{groceries[0].store}</td>
                    <td>{groceries[0].price}</td>
                </tr> */}
                {/* Since map returns a new array, we can transform our data into a JSX array */}
                {groceries.map((grocery, index) => {
                    return (   
                        
                        /**
                         * React is expecting the outermost element or the wrapper element (tr) to have
                         * a key property.
                         * 
                         * React needs this key to keep track of each element in the array
                         * 
                         * Keys should be a unique value across the entire list and be STABLE
                         * Stable means that the value isn't computed, it will be the same value every time
                         * 
                         * The best choice for a key is the id from the database since that is unique
                         * A good fallback option is if there's a field on the object that is unique or can
                         * be paired another field to become unique
                         * 
                         * The last resort should be using the index in the array as the key
                         * This is what React defaults to if you don't provide a key
                         */

                        <tr key={grocery.id}>{/* Table row */}
                            {/* Column in the row, table data */}
                            <td>{grocery.item}</td>
                            <td>{grocery.store}</td>
                            <td>{grocery.price}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}