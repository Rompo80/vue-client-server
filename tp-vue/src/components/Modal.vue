<template>
<div>
<button @click="showModal" :class="btnStyle">Open Modal</button>
 <div class="modal" :class="{ active: showModalFlag }">
  <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title">{{ modalTitle }}</h5>
    <button type="button" class="btn btn-outline-dark" @click="closeModal">
      <span class="h5">&#10005;</span>
    </button>
    </div>
    <div class="modal-body">
      <NewBookView />
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
    </div>
    </div>
    </div>
 </div>
</div>

</template>
<script>

import { defineAsyncComponent } from 'vue'

export default {
  components: {
    NewBookView: defineAsyncComponent(() => import('@/views/NewBookView.vue'))
  },
  data () {
    return {
      showModalFlag: false,
      modalTitle: '',
      btnStyle: 'btn btn-outline-secondary'
    }
  },
  methods: {
    showModal () {
      const btnCancel = document.querySelector('.btnCancel')
      console.log('modal')
      this.modalTitle = 'Add the book'
      this.showModalFlag = true
      document.body.style.overflow = 'hidden'
      btnCancel.classList.add('hidden')
    },
    closeModal () {
      this.showModalFlag = false
      this.$router.replace({ name: '' })
      document.body.style.overflow = ''
    }
  }
}
</script>
