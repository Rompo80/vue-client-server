<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-xxl">
      <router-link to="/" class="navbar-brand">Book Store</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/new-product" class="nav-link">Add Product</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <header>
    <Header msg="Book Store" />
  </header>

  <Router-view
  :inventory = "inventory"
  :addInv = "addInventory"
  :updateInv = "updateInventory"
  :removeInv = "removeInventory"
  />

  <div class="footer text-center py-3 bg-light text-dark opacity-2 h5 mt-3">
    bookstore.com
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import ProductDataService from '@/services/ProductDataService'
export default {
  components: {
    Header
  },
  data: () => {
    return {
      inventory: []
    }
  },
  methods: {
    addInventory (product) {
      this.inventory.push(product)
    },
    removeInventory (index) {
      this.inventory.splice(index, 1)
    },
    updateInventory (index, data) {
      this.inventory[index].name = data.name
      this.inventory[index].photo = data.photo
      this.inventory[index].price = data.price
      this.inventory[index].description = data.description
      this.inventory[index].category = data.category
    }
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
        // console.log(response.data)
      })
  }
}
</script>
