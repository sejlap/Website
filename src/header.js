import React from 'react'
import {Link} from 'react-router-dom'
import './index.css';



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isDesktop: false,
          show: [false] 
        };
    
        this.updatePredicate = this.updatePredicate.bind(this);
      }
      componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
      }
    
      updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 600 });
      }

      
    
      showHide(num){
        this.setState((prevState) => {
            const newItems = [...prevState.show];
            newItems[num] = !newItems[num];
            return {show: newItems};
        });
      }

    render() {
       
 const isDesktop = this.state.isDesktop;
        return (
            
        <div className="nav-link active"> 
        {isDesktop ? (
          
          
            <div id="meni">
               <Link onClick={() => window.open( 'https://github.com/sejlap')} className="fa fa-github">    </Link>
          
              <Link onClick={() => window.open( 'https://www.linkedin.com/in/šejla-p-32b171174/')} className="fa fa-linkedin"></Link>
                   <ul>
                    <li className="meni2"><Link className="link-stil" to={`/website`}>  Home </Link></li>
                    <li className="meni2"><Link className="link-stil" to={`/website/projects`}> Projects </Link></li>
                    <li className="meni2"><Link className="link-stil" to={`/website/workshops`}> Workshops </Link></li>
                    <li className="meni2"><Link className="link-stil" to={`/website/contact`}> Contact </Link></li>
                    </ul>
               </div>
           
            ) : (
            <div id="mali_meni" style={{float:"right"}}>
            
                 
              
              <i className="fa fa-bars"  style={{color:"white"}} onClick={()=>this.showHide(0)}></i>
              { this.state.show[0] && 
                   
                        <ul>
                        <li className="meni2"><Link onClick={() => window.open( 'https://github.com/sejlap')} className="fa fa-github"></Link>
                        </li>
                        <li className="meni2" style={{marginLeft:"1%"}}><Link onClick={() => window.open( 'https://www.linkedin.com/in/šejla-p-32b171174/')} className="fa fa-linkedin"></Link></li><br />
                        <li className="meni2"><Link className="link-stil" to={`/website`}> Home </Link></li><br />
                        <li className="meni2"><Link className="link-stil" to={`/website/projects`}>Projects </Link></li><br />
                         <li className="meni2"><Link className="link-stil" to={`/website/workshops`}> Workshops </Link></li>
                        <li className="meni2"><Link className="link-stil" to={`/website/contact`}> Contact </Link></li>
                        </ul>
                  
              }
            </div> )} </div>
        );
    }
}