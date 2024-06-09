<template>
  <div class="position-container">
    <el-button @click.native="handleAddButtonClick" style="margin-bottom: 10px" type="primary" icon="el-icon-plus">职位添加</el-button>
    <el-table
      :data="renderData.filter(data => !search || data.positionName.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
      border
      :header-cell-style="{backgroundColor: '#eee'}"
    >
      <el-table-column
        label="公司Logo"
        prop="companyLogo"
        width="100"
      >
        <template v-slot:default="scope">
          <img width="50" height="50" :src="`http://localhost:3000/uploads/${scope.row.companyLogo}`" alt="">
        </template>
      </el-table-column>
      <el-table-column
        label="公司名称"
        prop="companyName">
      </el-table-column>
      <el-table-column
        label="职位名称"
        prop="positionName">
      </el-table-column>
      <el-table-column
        label="城市"
        prop="city">
      </el-table-column>
      <el-table-column
        label="岗位薪资"
        prop="salary">
      </el-table-column>
      <el-table-column
        label="发布时间"
        prop="createTime">
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
            type="primary"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
    <PositionEdit v-if="pageType==='edit'" ref="position-edit" :row="row" :visible.sync="dialogFormVisible"></PositionEdit>
    <PositionAdd v-else :visible.sync="dialogFormVisible"></PositionAdd>
  </div>
</template>

<script>
  import { getPositionsList, deletePosition } from '@/api/positions'
  import PositionEdit from './PositionEdit'
  import PositionAdd from './PositionAdd'
  import mixins from '@/mixins/list'
  export default {
    mixins: [mixins],

    data() {
      return {
        row: {},
        pageType: 'add'
      }
    },

    components: {
      PositionEdit,
      PositionAdd
    },

    created() {
      this.pageSize = 5
    },

    methods: {
      _loadData() {
        return getPositionsList().then(result => {
          this.tableData = result.data.map(v => ({
            companyName: v.companyName,
            companyLogo: v.companyLogo,
            positionName: v.positionName,
            city: v.city,
            salary: v.salary,
            createTime: v.createTime,
            id: v._id
          }))
          this._sliceData(this.currentPage-1)
        })
      },

      handleDelete(index, row) {
        deletePosition(row.id).then(async (v) => {
          await this._loadData()

          if(this.renderData.length === 0) {
            this.currentPage--
            this._sliceData(this.currentPage-1)
          }
        })
      },

      async handleEdit(index, row) {
        this.pageType = 'edit'
        // 等待DOM渲染完毕后再做其他的事情
        await this.$nextTick()
        this.dialogFormVisible = true
        this.row = row
      }
    }
  }
</script>

<style lang="scss" scoped>
.position-container {
  padding: 20px
}
</style>