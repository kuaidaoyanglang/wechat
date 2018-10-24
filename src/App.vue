<template>
  <div id="app">
    <home class="transition"
          :class="{ 'hide-left': $route.path.split('/').length > 2 }" />

    <transition :name="transitionName">
      <router-view class="child-view" />
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import Home from '@/views/home/home.vue';

@Component({
  components: {
    Home
  }
})
export default class App extends Vue {
  public transitionName: string = 'slider-left';

  @Watch('$route')
  function(to: any, from: any): void {
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;

    this.transitionName = toDepth > fromDepth ? 'slider-left' : 'slider-right';

    if (toDepth === 3) {
        this.$nextTick(() => {
          this.transitionName = 'slider-right';
        });
    }
  }
}
</script>


<style lang="stylus">
@import '~styles/variables'
@import '~styles/mixins'

#app
  background: $color-bg

  .transition
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1)

    &.hide-left
      transform: translate3d(-100%, 0, 0)

  .child-view
    fixed: top right bottom left
    z-index: 1
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1)

    &.slider
      &-left-enter, &-right-leave-active
        transform: translate(100%, 0)

      &-left-leave-active, &-right-enter
        transform: translate(-100%, 0)
</style>
