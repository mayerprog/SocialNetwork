import React from "react";
import Header from "./Header";
import axios from "axios";
import connect from "react-redux/lib/connect/connect";
import {setUserData} from "../../redux/auth-reducer"
import { usersAPI } from "../../api/api";


class HeaderContainer extends React.Component {

  componentDidMount() {
    // this.props.toggleIsFetching(true)
    usersAPI.getLogin()
      .then(data => {
        // this.props.toggleIsFetching(false)
        if (data.resultCode === 0) {
          let {email, id, login} = data.data
          this.props.setUserData(id, email, login)
        }
      })
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

export default connect(mapStateToProps, { setUserData })(HeaderContainer);