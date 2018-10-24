<template>
  <div class="home">
    <lt-header />
    <div class="home-content">
      <wechat />
    </div>
    <lt-footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import LtHeader from '@/components/header.vue';
import LtFooter from '@/components/footer.vue';
import Wechat from '@/views/wechat/wechat.vue';

@Component({
  components: {
    LtHeader,
    LtFooter,
    Wechat
  }
})
export default class Home extends Vue {
  public msg: string = 'hello world';

  @State counter!: number
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables'
@import '~styles/mixins'

.home
  fixed: top right bottom left
  display: flex
  flex-direction: column
  background: $color-bg

  &-content
    flex: 1
</style>

