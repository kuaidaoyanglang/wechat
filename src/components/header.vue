<template>
  <div class="header">
    <div class="header-left"
         @click="back">
      <span class="iconfont icon-back"
            v-show="showBack"></span>
    </div>
    <div class="header-middle">{{title}}</div>
    <div class="header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop({ default: '微信' }) title!: string
  @Prop({ default: false }) showBack!: boolean

  back() {
    history.go(-1);
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables'

$height-header = 46px
$color-header = #303036

.header
  display: flex
  align-items: center
  text-align: center
  height: $height-header
  font-size: $font-size-large
  color: $white
  background: $color-header

  &-left
    width: 50px

  &-middle
    flex: 1

  &-right
    width: 40px
</style>

