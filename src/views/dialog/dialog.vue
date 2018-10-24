<template>
	<div class="dialog">
		<lt-header :showBack="true"
		           :title="title">
			<span slot="right"
			      class="iconfont icon-chat-friends"></span>
		</lt-header>
		<div class="dialog-box-wrapper">
			<dialog-box v-for="(msg, index) in currentChat.msg"
			            :msg="msg"
			            :key="index"></dialog-box>
		</div>
	</div>
</template>

<script lang="ts">
import LtHeader from '@/components/header.vue';
import { Vue, Component } from 'vue-property-decorator';
import { Getter, namespace } from 'vuex-class';
import DialogBox from './dialog-box.vue';

const wechat = namespace('wechat');

@Component({
	components: {
		LtHeader,
		DialogBox
	}
})
export default class Home extends Vue {
	@wechat.Getter currentChat: any;

	get title() {
		if (this.currentChat.group_name) {
			return `${this.currentChat.group_name}(${this.currentChat.users.length})`;
		}

		return this.currentChat.users[0].nickname;
	}
}

</script>

<style lang="stylus">
.dialog
	background: url('https://sinacloud.net/vue-wechat/images/bg/alarm.jpg') center center

	.dialog-box-wrapper
		margin-top: 20px
</style>
