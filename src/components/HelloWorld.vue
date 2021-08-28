<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form action="">
      <input type="text" name="email" id="cs" @input="res.ch" />
      <button>submit</button>
    </form>
    <p>{{ res.main }}</p>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  props: {
    msg: String
  },
  /* eslint-disable */
  setup() {
    const res = reactive({
      main: 'asas',
      ch: (e) => {
        res.main = e.target.value
      }
    })
    return { res }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
