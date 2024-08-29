
import ProductCard from "../product_card/ProductCard";
import {ProductCardsContainer} from './Product_cards.styles'
import {IProduct} from '@/app/types'

const ProductCards = ({ products }:{products:IProduct[]}): React.ReactElement => {

  return (
    <ProductCardsContainer>
      {products?.map((product) => {
        return <ProductCard key={product.name} {...product} />;
      })}
    </ProductCardsContainer>
  );
}

export default ProductCards;
