import axios from '@config/axios';

const ProductsService = {
  productsList: () => {
    return axios.get('/products');
  },
};

export default ProductsService;
