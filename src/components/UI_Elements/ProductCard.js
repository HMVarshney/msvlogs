import styles from './ProductCard.module.css';

const ProductCard = () => {
    return (  
        <div className={styles['container']}>
            <div className={styles['card-image']} style={{backgroundImage:`url(/assets/images/card_sample.jpg)`}} />
            <div className='mt-3 text-center'>
                <h4>Watch</h4>
            </div>
            <div className='mt-1 text-center'>
                <h4>₹ 2000</h4>
            </div>
            <div className='mt-2'>
                <span className={styles['buy-text']}>
                    <img src='/assets/icons/whatsapp.png' width='20px' height='20px' />
                    <h6 style={{padding:0, margin:0}} className='ml-2'>Buy Via WhatsApp</h6>
                </span>
            </div>
        </div>  
    );
}
 
export default ProductCard;