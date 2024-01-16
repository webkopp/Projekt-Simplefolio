import ListItem from "../listitem/ListItem";

const CardItem = (props) => {
    return ( 
        <>
            <h3>title:{props.title}</h3>
            <p>{props.text}</p>
            <h4>{props.h4}</h4>
        </>
     );
}
 
export default CardItem;