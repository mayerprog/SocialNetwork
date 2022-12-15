import React from "react";
import Header from "./Header";
import axios from "axios";
import connect from "react-redux/lib/connect/connect";
import { getLoginData } from "../../redux/auth-reducer"


class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getLoginData()
  }

  render() {
    return <Header {...this.props} />
  }
};

const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, { getLoginData })(HeaderContainer);