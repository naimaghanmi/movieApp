import React from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
class App extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false,
      name:'',
      src:'',
      rate:'',
      year:''
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  handlchange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
 
 
 
  openModal=() =>{
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal=()=> {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal=()=> {
    this.setState({modalIsOpen: false});
  }
 
  render()
  {
    return (
      <div>
        <button className="newModal" onClick={this.openModal}><i class="fas fa-plus"></i></button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}></h2>
          <button onClick={this.closeModal}>close</button>
          <div>New Movie</div>
          <div className="newMovie">
            <input  onChange={this.handlchange} name="name"/>
            <input  onChange={this.handlchange} name="src"/>
            <input onChange={this.handlchange} name="year"/>
            <input onChange={this.handlchange} name="rate"/>
            <button onClick={()=>this.props.add(this.state.name,this.state.src,this.state.rate,this.state.year)}>Add</button>
          </div>
        </Modal>
      </div>
    );
  }
}
 export default App;