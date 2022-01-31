import Card from "./Card";

function CardList({names,filteredName,handleClickedPopup}){
    return(
       names.map((name)=>{

           return <Card name={name} filteredName={filteredName} selectedDog={name} handleClickedPopup={handleClickedPopup}/>
       })
    )
}
export default CardList;