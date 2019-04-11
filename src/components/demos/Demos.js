import React, { Component } from "react";
import Loader from "../loader/Loader";

class Demos extends Component {

    state = {
        isLoading: true
      }
    
    toogleLoading = () => {
        this.setState({
          isLoading: !this.state.isLoading
        })
      }

    componentDidMount() {

        setTimeout(this.toogleLoading, 4000)
    
    }

    render() {
        return(
            <React.Fragment>
                <Loader isLoading={ this.state.isLoading }/>
                <div id="demos" className="sticky_footer">
        
                    <div>
                        <iframe src="https://www.youtube.com/embed/OWk1NIT3PuY" title="Demo Reel 2018"></iframe>
                        <h2>Demo Reel 2018</h2>
                    </div>
        
                    <div>
                        <iframe src="https://www.youtube.com/embed/2NQSHHJWxD0" title="Demo Reel 2016"></iframe>
                        <h2>Demo Reel 2016</h2>
                    </div>
        
                    <div>
                        <iframe src="https://www.youtube.com/embed/9wVIiiLDv34" title="Demo Reel 2014"></iframe>
                        <h2>Demo Reel 2014</h2>
                    </div>
                    
                    <div>
                        <iframe src="https://www.youtube.com/embed/SxGLRXrPgaI" title="Demo Reel Comedia"></iframe>
                        <h2>Demo Reel "Comedia"</h2>
                    </div>
        
                </div>
            </React.Fragment>
        )
    }
    
}

export default Demos;