import React, { Component } from "react";
export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      //this.label = 0;
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Buscar:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  /*
class Buscador extends Component {

    busquedaRef = React.creatRef();
    handlerObtenerDatos = (e) =>{
        e.preventDefault();
        console.log(this.busquedaRef.current.value)

    }

    render(){
        return (
            <form onSubmit={this.handlerObtenerDatos}>
                <div className='row'>
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="from-control form-control-lg"
                        placeholder="Buscar proyecto."/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block"
                        value="Buscar"/>
                    </div>

                </div>
            </form>
        )
    }
} 
export default Buscador


};*/ 