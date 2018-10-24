import axios from 'axios';

const SET_CHAT_LIST = 'SET_CHAT_LIST';
const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT';

interface State {
	chatList: any[];
	currentChat: any
}

const state: State = {
	chatList: [],
	currentChat: {}
};

const getters = {
	chatList: (state: State) => state.chatList,
	currentChat: (state: State) => state.currentChat
};

const mutations = {
	[SET_CHAT_LIST](state: State, chatList: any[]) {
		state.chatList = chatList;
	},
	[SET_CURRENT_CHAT](state: State, chat: any) {
		state.currentChat = chat;
	}
};

const actions = {
	async getChatList(store: any) {
		const res = await axios.get('/api/chat-list.json');

		if (res.data.code === 0) {
			store.commit(SET_CHAT_LIST, res.data.data);
		}
	}
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};
