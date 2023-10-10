import { useLoaderData } from "react-router-dom";
import ShowCards from "./ShowCards";



const Services = () => {

    const cards =useLoaderData()

    return (
        <div className ='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-8 mx-10  '>
        {

           
           cards ?.map(card =><ShowCards key={card.id} card ={card}> </ShowCards> ) 
        }
</div>
   
    );
};

export default Services;