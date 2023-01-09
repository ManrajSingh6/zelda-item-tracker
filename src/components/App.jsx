import React, {useEffect, useState} from 'react';
import uniqid from 'uniqid';

// Component imports
import Header from "./Header";
import SearchBar from './SearchBar';
import Footer from './Footer';
import { Grid } from '@mui/material';
import { CircularProgress } from '@mui/material';
import MonsterTreasureCard from './MonsterTreasureCard';
import EquipmentCard from './EquipmentCard';
import MaterialsCard from './MaterialsCard';
import CreaturesCard from './CreaturesCard';

// Styling for the pre loader
const preLoaderStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    margin: 'auto'
};

function App(){

    // State Management
    const[data, setData] = useState(null);
    const[globalCategory, setCategory] = useState("monsters"); 
    const[creatureType, setCreatureType] = useState("food");

    // Use the useEffect() hook and fetch API to make an API call and get a response - used for initial loading
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://botw-compendium.herokuapp.com/api/v2/category/monsters");
            const data = await res.json();
            setData(data);
        }
        fetchData();
    }, [])

    // Method to change the category of items displayed upon click of header items
    async function changeCategory(category){
        const res = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/' + category);
        const data = await res.json();
        setData(data);
        setCategory(category);
    }

    // While the data is loading, display a preloader
    if (!data){
        return <CircularProgress style={preLoaderStyle}/>
    }

    // Format API response fields that are arrays
    function formatProp(item){
        if (item === null || item.length === 0){
            return "Unavailable..."
        } else {
            return item.join(", ");
        }
    }

    // Capitalize the names
    function capitalizeNames(name){
        if (name.length === 0){
            return "Unavailable...";
        } else {
            return (name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()));
        }
    }
    
    //Provide different props to cards depending on card type
    function getValueChoices(){
        if (globalCategory === "monsters" || globalCategory === "treasure"){
            return(
                data.data.map((card) => (
                    <Grid item key={uniqid()} >
                        <MonsterTreasureCard 
                            key={uniqid()} 
                            cName={capitalizeNames(card.name)}
                            cDesc={card.description} 
                            cImageURL={card.image}
                            commonLoc={formatProp(card.common_locations)}
                            cID={card.id}
                            category={card.category}
                            itemDrops={formatProp(card.drops)}
                        />
                    </Grid>
                ))
            );
        } else if (globalCategory === "equipment"){
            return(
                data.data.map((card) => (
                    <Grid item key={uniqid()} >
                        <EquipmentCard 
                            key={uniqid()}  
                            cName={capitalizeNames(card.name)}
                            cDesc={card.description} 
                            cImageURL={card.image}
                            commonLoc={formatProp(card.common_locations)}
                            cID={card.id}
                            category={card.category}
                            defense={card.defense}
                            attack={card.attack}
                        />
                    </Grid>
                ))
            );
        } else if (globalCategory === "materials"){
            return(
                data.data.map((card) => (
                    <Grid item key={uniqid()} >
                        <MaterialsCard 
                            key={uniqid()} 
                            cName={capitalizeNames(card.name)}
                            cDesc={card.description} 
                            cImageURL={card.image}
                            commonLoc={formatProp(card.common_locations)}
                            cID={card.id}
                            category={card.category}
                            cookingEffect={capitalizeNames(card.cooking_effect)}
                            hRecovered={card.hearts_recovered}
                        />
                    </Grid>
                ))
            );
        } else if (globalCategory === "creatures"){
            if (creatureType === "food"){
                return(
                    data.data.food.map((card) => (
                        <Grid item key={uniqid()} >
                            <CreaturesCard 
                                key={uniqid()} 
                                cName={capitalizeNames(card.name)}
                                cDesc={card.description} 
                                cImageURL={card.image}
                                commonLoc={formatProp(card.common_locations)}
                                cID={card.id}
                                category={card.category}
                                cookingEffect={capitalizeNames(card.cooking_effect)}
                                hRecovered={card.hearts_recovered}
                                cType={creatureType}
                            />
                        </Grid>
                    ))
                );
            } else {
                return(
                    data.data.non_food.map((card) => (
                        <Grid item key={uniqid()} >
                            <CreaturesCard 
                                key={uniqid()} 
                                cName={capitalizeNames(card.name)}
                                cDesc={card.description} 
                                cImageURL={card.image}
                                commonLoc={formatProp(card.common_locations)}
                                cID={card.id}
                                category={card.category}
                                cType={creatureType}
                                itemDrops={formatProp(card.drops)}
                            />
                        </Grid>
                    ))
                );
            }
            
        }

    }

    return(
        <div>
            <Header updateDisplay={changeCategory} currentCategory={globalCategory} updateCType={setCreatureType}/>
            <SearchBar />
            <Grid key={uniqid()}  container spacing={4} className="grid-container" sx={{justifyContent: "center", padding: "10px", marginBottom: "30px"}}>            
                {getValueChoices()}
            </Grid>
            <Footer />
        </div>
    );
}

export default App;