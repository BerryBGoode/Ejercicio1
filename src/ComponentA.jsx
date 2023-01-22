import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponentB from './ComponentB';

class ComponentA extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
            name : 'Fer',
            lastname : 'Mena',
            email : 'emailexample@gmail.com',            
            contact : '4324-3424',
            connected : false            
        }
        
    }
    
    render() {
        return (
            <div>
                <h4>
                    Data : {this.state.name + ' ' + this.state.lastname} 
                </h4>
                <h4>
                    email : {this.state.email}
                </h4>
                <ComponentB contact={this.state.contact} connect={this.state.connected}></ComponentB>
            </div>
        );
    }
}


ComponentA.propTypes = {
    name : PropTypes.string,
    lastname : PropTypes.string,
    email : PropTypes.string,
    connected : PropTypes.bool
};


export default ComponentA;
