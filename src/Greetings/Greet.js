import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export function Greet() {
    const navigate = useNavigate()
    return (
        <div className="greet">
            <div className="greet_img">
                <img src="https://img.freepik.com/free-vector/thank-you-placard-concept-illustration_114360-13436.jpg?w=996&t=st=1675591944~exp=1675592544~hmac=f734c4a5640ac65032ae8aaca6920ae00dcdf46946de538bb7892c3295d39b0a" alt="" />
            </div>
            <div className="greet_btn">
                <Button onClick={() => navigate("/")}>Ok</Button>
            </div>

        </div>
    )
}