import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem';
import data from '../Utils/data';




export default function Home() {
  return (
   <Layout title ="Home Page - ">
    <div className="responsive-card-content">

      {data.products.map((product) =>(
        <ProductItem product ={product} key = {product.slug}></ProductItem>

      ))}
       </div>
   </Layout>

  );
}
