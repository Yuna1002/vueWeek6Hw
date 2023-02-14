<template>
    <h2>購物車</h2>
    <div class="text-end">
            <button
              class="btn btn-outline-danger"
              type="button"
              @click="delAllCart"
            >
              清空購物車
            </button>
    </div>
    <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 150px">數量/單位</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click="delCart(item.id)"
                      :disabled="loadingItem===item.id"
                    >
                      x
                    </button>
                  </td>
                  <td>
                    {{item.product.title }}
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <select
                        name=""
                        id=""
                        class="form-control"
                        v-model="item.qty"
                        @change="updateQty(item)"
                        :disabled="loadingItem===item.id"
                      >
                        <option :value="i" v-for="i in 20" :key="i">
                          {{i}}
                        </option>
                      </select>
                    </div>
                  </td>
                  <td class="text-end">
                    {{item.total }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{cart.total }}</td>
              </tr>
            </tfoot>
    </table>

</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      cart: {},
      loadingItem: ''
    }
  },
  methods: {
    getCarts () {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          // console.log(res)
          this.cart = res.data.data
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    updateQty (cartItem) {
      const data = {
        product_id: cartItem.product.id,
        qty: cartItem.qty
      }
      this.$http
        .put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${cartItem.id}`, { data })
        .then((res) => {
          alert(res.data.message)
          this.getCarts()
          this.loadingItem = ''
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    delCart (id) {
      this.loadingItem = id
      this.$http
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${id}`)
        .then((res) => {
          alert(res.data.message)
          this.getCarts()
          this.loadingItem = ''
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    delAllCart () {
      this.$http
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`)
        .then((res) => {
          alert(res.data.message)
          this.getCarts()
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
