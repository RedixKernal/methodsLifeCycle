import React, { Component } from 'react';

class Testprops extends Component {
    
    render() {
        const {type , base} = this.props?.data ? this.props?.data : this.props;
        return (
            <div>
                {/* <code>
                    
                        {
                            this.props.type
                            ?this.props.type
                            :this.props.data.type
                        }
                     - :: - 
                        {
                            this.props.base
                            ?this.props.base
                            :this.props.data.base
                        }
                </code> */}
            <p>{type} :: {base}</p>
            </div>
        );
    }
}

export default Testprops;
