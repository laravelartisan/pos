<template>
  <div class="md-table-pagination">
    <span class="md-table-pagination-label">{{ mdLabel }}:</span>

    <md-select v-model="currentSize" md-menu-class="md-pagination-select" @change="changeSize" v-if="mdPageOptions">
      <md-option v-for="amount in mdPageOptions" :value="amount" :key="amount">{{ amount }}</md-option>
    </md-select>

    <span>{{ ((currentPage - 1) * currentSize) + 1 }}-{{ subTotal }} {{ mdSeparator }} {{ mdTotal }}</span>

    <md-button class="md-icon-button md-table-pagination-previous" @click.native="previousPage" :disabled="currentPage === 1">
      <md-icon>keyboard_arrow_left</md-icon>
    </md-button>

    <md-button class="md-icon-button md-table-pagination-next" @click.native="nextPage" :disabled="shouldDisable">
      <md-icon>keyboard_arrow_right</md-icon>
    </md-button>
  </div>
</template>

<script>
  export default {

    /**
     * The component's properties.
     */
    props: {
      mdSize: {
        type: [Number, String],
        default: 10
      },
      mdPageOptions: [Array, Boolean],
      mdPage: {
        type: [Number, String],
        default: 1
      },
      mdTotal: {
        type: [Number, String],
        default: 'Many'
      },
      mdLabel: {
        type: String,
        default: 'Rows per page'
      },
      mdSeparator: {
        type: String,
        default: 'of'
      }
    },

    /**
     * The component's data.
     */
    data() {
      return {
        subTotal: 0,
        totalItems: 0,
        currentPage: 1,
        currentSize: 0
      };
    },

    /**
     * The component's watchers.
     */
    watch: {
      mdTotal(val) {
        this.totalItems = isNaN(val) ? Number.MAX_SAFE_INTEGER : parseInt(val, 10);

        const sub = this.currentPage * this.currentSize;
        this.subTotal = sub > this.mdTotal ? this.mdTotal : sub;
      },
      mdSize(val) {
        this.currentSize = parseInt(val, 10);
      },
      mdPage(val) {
        this.currentPage = parseInt(val, 10);
      }
    },

    /**
     * The component's computed properties.
     */
    computed: {
      lastPage() {
        return false;
      },

      shouldDisable() {
        return this.currentSize * this.currentPage >= this.totalItems;
      }
    },

    methods: {
      /**
       * Submit event when page is changed.
       */
      emitPaginationEvent() {
        if (this.canFireEvents) {
          const sub = this.currentPage * this.currentSize;

          this.subTotal = sub > this.mdTotal ? this.mdTotal : sub;
          this.$emit('pagination', {
            size: this.currentSize,
            page: this.currentPage
          });
        }
      },

      /**
       * Change number of items to display.
       */
      changeSize() {
        if (this.canFireEvents) {
          this.$emit('size', this.currentSize);
          this.emitPaginationEvent();
        }
      },

      /**
       * Go to previous page.
       */
      previousPage() {
        if (this.canFireEvents) {
          this.currentPage--;
          this.$emit('page', this.currentPage);
          this.emitPaginationEvent();
        }
      },

      /**
       * Go to next page.
       */
      nextPage() {
        if (this.canFireEvents) {
          this.currentPage++;
          this.$emit('page', this.currentPage);
          this.emitPaginationEvent();
        }
      }
    },

    /**
     * Prepare the component.
     */
    mounted() {
      this.$nextTick(() => {
        this.subTotal = this.currentPage * this.currentSize;
        this.mdPageOptions = this.mdPageOptions || [10, 25, 50, 100];
        this.currentSize = this.mdPageOptions[0];
        this.canFireEvents = true;
      });
    }
  };
</script>
