<template>
  <div class="w-100 z-index-0 bg-dark bg-gradient opacity-5 text-center" style="height: 17rem;">
    <h1 class="pt-5 mb-5 text-light">{{ msg }}</h1>
    <Modal :class="btnStyle"/>
    </div>
</template>

<script>

import Modal from '@/components/Modal.vue'

export default {
  components: {
    Modal
  },
  name: 'Header',
  props: {
    msg: String,
    btnStyle: String
  }
}
</script>
