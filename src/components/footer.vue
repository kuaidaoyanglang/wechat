<template>
  <div class="footer">
    <a class="footer-item"
       :class="{ 'active': currentIndex === item.index }"
       v-for="item in list"
       :key="item.icon"
       @click="goto(item)">
      <span class="iconfont"
            :class="item.icon"></span>
      <p class="text">{{item.text}}</p>
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  public currentIndex: number = 0;
  public list = [
    {
      text: '微信',
      icon: 'icon-wechat',
      index: 0,
      type: 'wechat'
    },
    {
      text: '通讯录',
      icon: 'icon-contact',
      index: 1,
      type: 'contact'
    },
    {
      text: '发现',
      icon: 'icon-find',
      index: 2,
      type: 'find'
    },
    {
      text: '我',
      icon: 'icon-me',
      index: 3,
      type: 'me'
    }
  ];

  public goto(item: any): void {
    this.currentIndex = item.index;
    this.$router.push(`/${item.type}`);
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables'
@import '~styles/mixins'

$height-footer = 55px

.footer
  display: flex
  height: $height-footer
  color: #797979
  align-items: center
  text-align: center
  background: #f9f9f9
  border-1px('top')

  &-item
    flex: 1

    .iconfont
      font-size: 24px

    .text
      margin-top: 2px
      font-size: $font-size-small-s
      transform: scale(0.9)

    &.active
      color: $color-theme
</style>

