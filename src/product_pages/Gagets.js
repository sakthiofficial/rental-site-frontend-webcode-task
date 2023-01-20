
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { About } from '../About';
import { Item } from '../Item';
import { API } from '../port';

export function Gagets() {

    const { item } = useParams()
    const [gagets, setgagets] = useState([]);
    try {


        const getgagets = async () => {
            fetch(`${API}products/${item}`).then(val => val.json()).then(dt => setgagets(dt));
        };

        useEffect(() => {
            getgagets();
        }, []);
    } catch (err) {
        console.log("Error", err);
    }
    return (
        // 
        <>

            {item == "furnitures" || item == "systems" || item == "vechicals" ? <About /> : <div className="list_items">
                {gagets.map(val => <Item name={val.name} product={item} image={val.image} id={val._id} rent={val.rent} />)}
            </div>}

        </>

    );
}

