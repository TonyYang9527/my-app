import React ,{Component} from  'react' ;
import { Link } from 'react-router-dom';

class Car extends Component{

render(){
    const cars = this.props.route.data;
    console.log(cars);
    const carNode = cars.map((car) => {
        return (
            <Link
                to={"/cars/" + car.id}
                className="list-group-item"
                key={car.id}>
                {car.name}
            </Link>
        )
    });

  return(
      <div>
          <h1>Cars page</h1>
          <div className="list-group">
              {carNode}
          </div>
      </div>

  ) ;
}

}

export default Car ;