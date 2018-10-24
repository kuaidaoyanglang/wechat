<template>
	<div class="wechat-item"
	     @click="skip">
		<div class="wechat-item-left">
			<div class="msg-count"
			     v-if="!chat.read && !chat.quiet">{{chat.msg.length}}</div>
			<div class="msg-dot"
			     v-if="!chat.read && chat.quiet"></div>

			<img :src="user.avatar"
			     :class="avatarClass"
			     v-for="user in chat.users"
			     :key="user.wxid">
		</div>

		<div class="wechat-item-right">
			<p class="name">{{name}}</p>
			<p class="msg">{{msg}}</p>
			<p class="time">{{(chat.msg[chat.msg.length - 1].date) | time}}</p>
			<span class="iconfont icon-mute"
			      v-show="chat.quiet"></span>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Mutation, namespace } from 'vuex-class';

const wechat = namespace('wechat');

@Component
export default class WechatItem extends Vue {
	@Prop({ default: () => {} }) chat: any;

	@wechat.Mutation('SET_CURRENT_CHAT') setCurrentChat: any;


	get avatarClass() {
		if (this.chat.group_name) {
			if (this.chat.users.length <= 4) {
				return 'two-avatar';
			}
			return 'three-avatar';
		}

		return 'avatar';
	}

	get name() {
		if (this.chat.group_name) {
			return this.chat.group_name;
		}

		return this.chat.users[0].nickname;
	}

	get msg() {
		if (this.chat.group_name) {
			return `${this.chat.msg[this.chat.msg.length - 1].name}: ${this.chat.msg[this.chat.msg.length - 1].text}`;
		}

		return this.chat.msg[this.chat.msg.length - 1].text;
	}

	skip() {
		this.setCurrentChat(this.chat);
		this.$router.push('/wechat/dialog');
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables'
@import '~styles/mixins'

.wechat-item
	display: flex
	padding: 10px
	align-items: center
	border-1px()
	background: $white

	&:active
		background: #ECECEC

	&-left
		size: 48px
		background: #dddbdb
		position: relative
		font-size: 0

		.avatar
			width: 100%

		.two-avatar
			width: 50%

		.three-avatar
			width: 33.33%

		.msg-count
			absolute: top -5px right -5px
			size: 18px
			background: #f43531
			border-radius: 50%
			text-align: center
			line-height: 18px
			color: $white
			font-size: $font-size-small-s

		.msg-dot
			absolute: top -5px right -5px
			size: 10px
			background: #f43531
			border-radius: 50%

	&-right
		flex: 1
		padding-left: 10px
		position: relative

		.name
			font-size: $font-size-normal

		.msg
			font-size: $font-size-small
			margin-top: 8px
			color: #888

		.time
			absolute: right 0 top 0
			font-size: $font-size-small-s
			color: #b8b8b8

		.icon-mute
			absolute: right 0 bottom 0
			font-size: $font-size-normal
			color: #b8b8b8
</style>

