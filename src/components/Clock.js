import React from 'react';

{/* <script type="text/babel" data-presets="env,react"> */}
    class Clock extends React.Component {
        state = {time: ''};
        
        componentDidMount() {
            setInterval(() => {
                this.setState({ time: new Date().toLocaleTimeString() })    
            }, 1000)
        }
    
        
        render() {
            return (
                <div className="time">
                    The time is: {this.state.time}
                </div>
            );
        }
    }
// </script>

export default Clock;