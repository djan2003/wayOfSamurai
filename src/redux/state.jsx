import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";

export let store = {
    _state : {
        friends:
            {
                nameFriend: [
                    {name: "первый друг", id: 1},
                    {name: "второй друг", id: 2},
                    {name: "просто Вася", id: 3}
                ]
            },

        profilePage:
            {
                newPostText: "something Bla-bla-bla",
                message: [
                    {name: "10", id: 1},
                    {name: "а тебе зачем это знать", id: 2},
                    {name: "еще одна проверка", id: 2}
                ]
            },
        dialogsPage: {
            newMessageText: "Bla-bla-bla",
            dialogsData:

[
    {"name": "Vasia", "id": 1},
    {"name": "Petia", "id": 2},
    {"name": "Olia", "id": 3},
    {"name": "Kolia", "id": 4},
    {"name": "Oleg", "id": 5}
],
    messageData:

[
    {"name": "Hi", "id": 1},
    {"name": "how are you", "id": 2},
    {"name": "every thing ok", "id": 3}
]

}
},
    getState(){
        return this._state;
    },
    rerender () {},
    subscribe (observer)  {
        this.rerender = observer;
    },

    updateNewPost (newText) {
        this._state.profilePage.newPostText = newText;
        this.rerender(this._state);
    },
    addPost  () {
        let nextPost = {
            id: 5,
            name: this._state.profilePage.newPostText
        }
        this._state.profilePage.message.push(nextPost);
        this._state.profilePage.newPostText = " ";
        this.rerender( this._state);
    },
    addMessage () {
        let nextMessage = {
            id: 3,
            name: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messageData.push(nextMessage);
        this._state.dialogsPage.newMessageText = " ";
        this.rerender(this._state);
    },
    updateNewMessage (newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this.rerender(this._state);
    },

    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this.rerender(this._state);}



}


