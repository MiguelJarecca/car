
export const ItemReducer = (state = [], action) => {

    switch (action.type) {

        case 'AddProductCard':
            return[
                ...state,
                {
                    product: action.payload,
                    quantity: 1,    
                }
            ];
    
        case 'UpdateQuantityProductCard':
                return state.map((i) => {
                    if (i.product.id === action.payload.id) {
                        return {
                            ...i,
                            quantity: i.quantity + 1,
                        };
                    }
                    return i; 
                });
    
        case 'DeleteProductCard':
            //Devuelve un nuevo array menos un item.
            return state.filter((i) => i.product.id !== action.payload);
    
        default:
            return state;
    }

} 