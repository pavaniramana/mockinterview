import React from 'react';

const UpdatedComponent = originalComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }
        Increment = () => {
            this.setState({
                count:this.state.count+1
            })
        }
        render(){
            return(
                <button onClick={this.Increment}>click here</button>
            )
        }
    }
    return NewComponent
}
export default UpdatedComponent
