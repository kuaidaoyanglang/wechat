<template>
	<div class="wechat">
		<wechat-item v-for="chat in chatList"
		             :chat="chat"
		             :key="chat.mid"></wechat-item>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import wechatItem from './wechat-item.vue';
import { Getter, Action, namespace } from 'vuex-class';

const wechat = namespace('wechat');

@Component({
	components: {
		wechatItem
	}
})
export default class Wechat extends Vue {
	@wechat.Getter chatList!: any[];
	@wechat.Action getChatList: any;

	async mounted() {
		await this.getChatList();
	}
}
</script>
