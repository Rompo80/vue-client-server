<template>
    <div class="">
      <section class="py-5">
          <div class="container px-4 px-lg-5 my-5">
              <div class="row gx-4 gx-lg-5 align-items-center">
                <div class="col-md-6"><img class="card-img-top mb-5" style="width: 65%; hieght: 65%;" :src="require(`@/assets/img/${product.photo}`)" :alt="product.name" /></div>
                  <div class="col-md-6">
                    <h1 class="display-5 fw-bolder">{{product.name}}</h1>
                    <div class="mb-3">
                        <span class="text-decoration-line-through"></span>
                        <span class="h5">${{product.price}}</span>
                    </div>
                    <div class="mb-3">
                      <span class="h4">Genre: </span>
                      <p class="lead">{{ product.category }}</p>
                    </div>
                    <span class="h4">Description:</span>
                    <p class="lead">{{ product.description }}</p>
                    <hr>
                    <div class="d-flex justify-content-between flex-wrap">
                    <router-link class="btn btn-dark w-50 mb-3" :to="{name: 'edit-book', params:{id:product.id} }">Edit</router-link>
                    <router-link class="btn btn-outline-dark ms-4 mb-3" tag="button" to="/">Go Back</router-link>
                    <button class="btn btn-outline-danger ms-5 mb-3" type="button" @click="deleteProduct">Delete</button>
                  </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>

import ProductDataService from '@/services/ProductDataService'
export default {
  props: ['inventory', 'removeInv'],
  methods: {
    deleteProduct () {
      ProductDataService.delete(this.product.id)
        .then(response => {
          this.removeInv(this.productIndex)
        })
        .catch(error => {
          console.log(error)
        })
      this.$router.push({ name: 'home' })
    }
  },
  computed: {
    product () {
      const product = this.inventory.find((p) => {
        return p.name === this.$route.params.id
      })
      return product
    },
    productIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.name === this.$route.params.id
      })
      return index
    }
  }
}
</script>
