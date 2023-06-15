import featureBackground from '../../../assets/features/feature_bg.jpg';
import './Features.css';

const Features = (props) => {
    const featuresItems = props.featuresItems;
    return(
        <>
        <>
            <div className='features-wrapper'>
                <div className='features-main-wrapper'>
                    <div className='features-image-wrapper panel-grid-cell' style={{backgroundImage:`url(${featureBackground})`}}></div>
                    <div className='features-items-wrapper panel-grid-cell'>
                    {featuresItems.map((item,index)=>(
                        <div className='features-item' key={index}>
                            <div className='icon-wrapper'>
                                <span>{item.icon}</span>
                            </div>
                            <div className='features-content-wrapper'>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                    </div>

                </div>
            </div>
            </>
        </>
    )
}
export default Features