import women from '../images/women.jpg';
import men from '../images/men.jpg';
import furniture from '../images/furniture.jpg';
import laptop from '../images/laptop.png';
export function PlatziHome(){
    return(
        <div>
            .
            <div className='d-flex justify-content-around flex-wrap ' style={{marginTop:"50px"}} >
                <div>
                    <img src={women} alt="" height="300px" width="300px"/>
                </div>
                <div>
                     <img src={men} alt="" height="300px" width="300px"/>
                </div>
                <div>
                <img src={furniture} alt="" height="300px" width="300px"/>
                </div>
                <div>
                <img src={laptop} alt="" height="300px" width="300px"/>
                </div>
            </div>
        </div>
    )
}