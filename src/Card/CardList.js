import Card from "./Card";

function CardList({names,handleClickedPopup}){
    return(
       names.map((name)=>{

           return <Card name={name}  selectedDog={name} handleClickedPopup={handleClickedPopup}/>
       })
    )
}
export default CardList;