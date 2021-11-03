import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Landing extends Component {

    componentDidMount() 
    {
        if (this.props.security.validToken) 
        {
            this.props.history.push("/dashboard");
        }
    }
 

    render() {
        return (
        <div  style={{
                backgroundImage: `url(${"https://webartdevelopers.com/blog/wp-content/uploads/2019/02/CSS-Background-Animation-1.gif"})`,
                height: '100vh',
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat'
            
              }}>

            <div className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4"> <b> Kanban Tool </b> </h1>
                                <p className="lead">
                                    <b><i>Create your account to join some fun projects or start your own new project</i></b>
                            </p>
                                <hr />
                                <Link className="btn btn-lg btn-primary mr-2" to="/register">
                                    Sign Up
                                    </Link>
                                <Link className="btn btn-lg btn-secondary mr-2" to="/login">
                                    Login
                                </Link>

                                <h5>“Nothing is less productive than to make more efficient what should not be done at all.” – Peter Drucker</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         </div>
        )
    }
}

Landing.propTypes = {
    security: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    security: state.security
})

export default connect(mapStateToProps)(Landing);