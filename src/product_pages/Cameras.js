import { useEffect, useState } from 'react';
import { Item } from '../Item';
import { API } from '../port';

export function Cameras() {
    const [cameras, setcameras] = useState([]);

    const getCameras = async () => {
        fetch(`${API}products/cameras`).then(val => val.json()).then(dt => setcameras(dt));
    };

    useEffect(() => {
        getCameras();
    }, []);
    return (
        <div className="list_items">
            {cameras.map(val => <Item name={val.name} product={"cameras"} image={val.image} id={val._id} rent={val.rent} />)}
        </div>
    );
}
