import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogue-reducer";
import Messages from "./Messages";
import connect from "react-redux/lib/connect/connect";
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

/*const MessagesContainer = (props) => {
    let state = props.store.getState().dialoguesPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let messageOnChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Messages addMessage={addMessage}
                  updateNewMessageText={messageOnChange}
                  dialoguesPage={state}
        />
    )
}*/

const mapStateToProps = (state) => { //запускается каждый раз, когда в стейте происходят какие-то изменения
    return {
        dialoguesPage: state.dialoguesPage, //props.store.getState().dialoguesPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text)),
    }
}

// let authRedirectComponent = withAuthRedirect(Messages)

// const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent) // коннектим презентационный компонент Messages к state и dispatch
// // теперь коннект отвечает за ререндер(перерисовку компонентов).
// // Каждый раз, когда в стейте происходят изменения, запускается mapStateToProps, что позволяет рендерить не всё дерево, а определенные его части.
export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Messages) //возьми Messages, закинь в withAuthRedirect, получи результат и сконнекти 

// export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Messages)) //оборачиваем в HOC withAuthRedirect контейнерный
// //компонент, который коннектит пропсы с презентационным компонентом Messages

