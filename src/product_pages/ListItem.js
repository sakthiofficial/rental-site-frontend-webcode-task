import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Item } from "../Item";
import { API } from '../port';


export function ListItem() {
    const [cameras, setcameras] = useState([]);
    const [gagets, setgagets] = useState([]);

    const getCameras = async () => {
        fetch(`${API}products/cameras`).then(val => val.json()).then(dt => setcameras(dt))
    }
    const getGagets = async () => {
        fetch(`${API}products/gagets`).then(val => val.json()).then(dt => setgagets(dt))
    }
    useEffect(() => {
        getCameras()
        getGagets()
    }, [])
    return (
        <div className="list_items">
            {cameras.map(val => <Item value={val} name={val.name} product={"cameras"} image={val.image} id={val._id} rent={val.rent} />)}
            {gagets.map(val => <Item value={val} name={val.name} product={"gagets"} image={val.image} id={val._id} rent={val.rent} />)}
        </div>
    );
}
