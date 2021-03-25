import { useRouter } from 'next/router';
import ProductCard from '../../../components/UI_Elements/ProductCard';
import styles from './ProductListings.module.css';

const ProductListings = () => {

    const router = useRouter();

    return (  
        <div>
            <div className={styles['page-title-bar']}>
                <div className='container'>
                    <h1 style={{textTransform:'capitalize'}}>{router.query.name}</h1>
                </div>
            </div>
            <div className='mt-2'>
                <div className='container'>
                    <div className='row no-gutters'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-9 col-12'>
                            <div className='my-4'>
                                <div className='row no-gutters'>
                                    <div className='col-9 pr-3'>
                                        <input type='text' style={{width:'100%'}} placeholder='Search Product Name' /> 
                                    </div>
                                    <div className='col-3'>
                                        <select>
                                            <option>Name</option>
                                            <option>Price: low to high</option>
                                            <option>Price: high to low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                {Array(10).fill(0).map((item, index)=>(
                                    <div className={`col-lg-4 col-12 ${index > 2 ? 'mt-4' : ''}`} key={index}>
                                        <ProductCard />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProductListings;