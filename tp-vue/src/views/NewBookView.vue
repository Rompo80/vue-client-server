<template>
  <div class="product-add">
    <!-- Section-->
    <section class="">
      <div class="container px-4 px-lg-5 mt-5">
        <div
          :class="modalBox"
        >
          <div class="col-sm-12">
            <h4 class="mb-3">Add new product</h4>
            <!-- <div class="alert alert-danger">{{message}}</div> -->
            <div class="needs-validation" novalidate>
              <div class="row g-2">
                <div v-if="!submitted">
                <div class="col-12">
                  <label for="productName" class="form-label"
                    >Product Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="productName"
                    placeholder=""
                    v-model="product.name"
                    required
                  />
                  <div class="invalid-feedback">Valid name is required.</div>
                </div>
                <div class="col-12">
                  <label for="productPhoto" class="form-label"
                    >Product Photo</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="productPhoto"
                    placeholder=""
                    v-model="product.photo"
                    required
                  />
                  <div class="invalid-feedback">
                    Valid photo path is required.
                  </div>
                </div>
                <div class="col-12">
                  <label for="productPrice" class="form-label">Price</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text">CAD</span>
                    <input
                      type="text"
                      class="form-control"
                      id="productPrice"
                      placeholder=""
                      v-model.number="product.price"
                      required
                    />
                    <div class="invalid-feedback">Price is required.</div>
                  </div>
                </div>
                <div class="col-12">
                  <label for="productDescription" class="form-label"
                    >Product Description</label
                  >
                  <textarea
                    class="form-control"
                    id="productDescription"
                    placeholder=""
                    v-model="product.description"
                  ></textarea>
                  <div class="invalid-feedback">Valid description</div>
                </div>
                <div class="col-12">
                  <label for="productType" class="form-label"
                    >Product Category</label
                  >
                  <select
                    class="form-control"
                    id="productType"
                    placeholder=""
                    v-model="product.category"
                    required
                  >
                  <option value="">Select</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Design">Design</option>
                  <option value="WorkplaceCulture">Workplace Culture</option>
                  <option value="Travel">Travel</option>
                  <option value="Food">Food</option>
                  <option value="Tech">Technology</option>
                  </select>
                  <div class="invalid-feedback">
                    Valid photo path is required.
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                <button class="btn btn-primary btn-lg mt-3" id="save" type="button" @click="saveProduct">Save </button>
                <button class="btn btn-secondary btn-lg mt-3 btnCancel" type="button" @click="backHome">Cancel </button>
                </div>
                </div>
                <div v-else>
                  <div  class="alert alert-success alert-dismissible fade show" role="alert">
                  <strong> You submitted successfully!</strong>
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                  <button class="w-100 btn btn-success btn-lg mt-3" type="button" @click="newProduct">New product </button>
                </div>
              </div>
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
  props: ['addInv'],
  data () {
    return {
      submitted: false,
      product: {
        name: '',
        photo: '',
        price: '',
        description: '',
        category: ''
      },
      modalBox: 'row row-cols-xl-2 justify-content-center'
    }
  },
  methods: {
    saveProduct () {
      ProductDataService.create(this.product).then(response => {
        // console.log(response)
        this.product.id = response.data.id
        this.addInv(this.product)
        this.message = null
        this.submitted = true
        this.$router.replace({ name: 'home' })
      })
        .catch(e => {
          console.log(e.response.data.message)
          this.message = e.response.data.message
        })
      console.log(this.submitted)
    },
    backHome () {
      this.$router.push({ name: 'home' })
    },
    newProduct () {
      this.submitted = false
      this.product = {}
    }
  }
}
</script>
