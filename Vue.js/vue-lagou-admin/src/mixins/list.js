export default {
  data() {
    return {
      tableData: [],
      renderData: [],
      search: '',
      currentPage: 1,
      dialogFormVisible: false
    }
  },

  methods: {
    _sliceData(currentPage) {
      let start = currentPage * this.pageSize
      let end = start + this.pageSize
      this.renderData = this.tableData.slice(start, end)
    },

    handlePageChange(index) {
      this._sliceData(index-1)
      this.currentPage = index
    },

    handleAddButtonClick() {
      this.pageType = 'add'
      this.dialogFormVisible = true
    }
  },

  mounted() {
    this._loadData()
  }
}