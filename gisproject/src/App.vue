<template>
<div id="app">
    <v-content>
      <page1/>
    </v-content>
</div>
</template>

<script>
import page1 from './components/page1'

export default {
  name: 'App',
  components: {
    page1
  },
  data () {
    return {
      //
    }
  }
}
</script>
