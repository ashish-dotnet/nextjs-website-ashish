
import classes from './event-item.module.css'
import Button from '../ui/button'
import AddressIcon from '../icons/address-icon'
import DateIcon from '../icons/date-icon'
import ArrowIcon from '../icons/arrow-right-icon'

function EventItem(props) {
    const { title, image, date, location, id } = props;
    const humanReadalbeDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formateAddress = location.replace(',', '\n');
    const exploreLink = `/events/${id}`;
    return (<li className={classes.item}>
        <img src={'/' + image} alt={title} />
        <div className={classes.summary}>
            <div>
                <h2>{title}</h2>
                <div className={classes.date}> 
                <DateIcon/>
                <time>{humanReadalbeDate}</time>

                </div>
                <div  className={classes.address}>
                    <AddressIcon/>
                        <address>
                        {formateAddress}
                        </address>
                    
                </div>
            </div>
            <div  className={classes.actions}>
                
                <Button link={exploreLink}>
                <span> Explore event </span>
                <span className={classes.icon}>
                    <ArrowIcon/>
                </span>
                    </Button>
               
            </div>
        </div>
    </li>)
}
export default EventItem;