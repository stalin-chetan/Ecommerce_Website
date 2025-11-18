
import Hero from '../components/Layout/Hero'
import GenderCollection from '../components/Products/GenderCollection'
import  NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'

const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollection />
        <NewArrivals />
        {/* Best Sellers */}
        <h2 className='text-3xl text-center font-bold mb-4'>Best seller</h2>
        <ProductDetails />
    </div>
  )
}

export default Home