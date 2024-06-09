<template>
  <div class="user-admin-container">
    <el-button @click.native="handleAddButtonClick" style="margin-bottom: 10px" type="primary" icon="el-icon-plus">用户添加</el-button>
    <el-table
      :data="renderData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
      border
      :header-cell-style="{backgroundColor: '#eee'}"
    >
      <el-table-column
        label="用户名"
        prop="name">
      </el-table-column>
      <el-table-column
        align="center"
        width="150"
      >
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="tableData.length"
      @current-change="handlePageChange"
      :page-size="pageSize"
      :current-page="currentPage"
      :style="{margin: '10px 0', 'text-align': 'right'}"
    >
    </el-pagination>
    <UsersAdd :visible.sync="dialogFormVisible"></UsersAdd>
  </div>
</template>

<script>
  import { getUsersList, deleteUser } from '@/api/users-admin'
  import UsersAdd from './UsersAdd'
  import mixins from '@/mixins/list'
  export default {
    mixins: [mixins],
    components: {
      UsersAdd
    },
    created() {
      this.pageSize = 3
    },
    methods: {
      // _sliceData(currentPage) {
      //   let start = currentPage * this.pageSize
      //   let end = start + this.pageSize
      //   this.renderData = this.tableData.slice(start, end)
      // },

      _loadData() {
        return getUsersList().then(result => {
          this.tableData = result.data.data.map(v => ({
            name: v.username,
            id: v._id
          }))
          this._sliceData(this.currentPage-1)
        })
      },

      handleDelete(index, row) {
        deleteUser(row.id).then(async (v) => {
          await this._loadData()

          if(this.renderData.length === 0) {
            this.currentPage--
            this._sliceData(this.currentPage-1)
          }
        })

      },
      
      // handlePageChange(index) {
      //   this._sliceData(index-1)
      //   this.currentPage = index
      // },

      // handleAddUser() {
      //   this.dialogFormVisible = true
      // }
    },
    // mounted() {
    //   this._loadData()
    // },
  }
</script>

<style lang="scss" scoped>
.user-admin-container {
  padding: 20px
}
</style>