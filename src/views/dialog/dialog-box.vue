<template>
    <div class="dialog-box">
        <div class="dialog-box-left">
            <img :src="msg.avatar"
                 class="avatar">
        </div>
        <div class="dialog-box-right">
            <p class="text">
                {{msg.text}}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class DialogBox extends Vue {
    @Prop({ default: () => {} }) msg: any;
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables'
@import '~styles/mixins'

.dialog-box
    display: flex
    padding: 10px

    &-left
        .avatar
            size: 36px

    &-right
        padding-left: 10px

        .text
            position: relative
            padding: 8px 10px
            border-radius: 5px
            line-height: 24px
            background: $white
            margin-right: 60px
            font-size: $font-size-normal - 1

            &::before
                content: ''
                absolute: top 12px left -11px
                size: 0
                border: 6px solid transparent
                border-right: 6px solid white
</style>

