<template>
  <el-dialog title="用户添加" :visible.sync="dialogFormVisible">
    <el-form ref="user-add-form" :model="form" :rules="rules">
      <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
        <el-input v-model="form.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
        <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { addUser } from '@/api/users-admin'
export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户称', trigger: 'blur' },
        ],
        password: [
          { required: true, min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ]
      },
      dialogFormVisible: this.visible,
      formLabelWidth: '120px'
    }
  },
  // computed: {
  //   dialogFormVisible: {
  //     get() {
  //       return this.visible
  //     },

  //     set(newValue) {
  //       this.abc = newValue
  //     }
  //   }
  // },

  methods: {
    handleCancel() {
      this.dialogFormVisible = false
      this.$emit('update:visible', false)
    },
    handleSubmit() {
      this.$refs['user-add-form'].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = false
          this.$emit('update:visible', false)
          addUser(this.form).then(result=>{
            if(result.data.ret) {
              this.$message({
                message: '恭喜你，用户添加成功',
                type: 'success'
              })
              this.$parent._loadData()
              this.form.username = ''
              this.form.password = ''
            } else {
              this.$message.error(result.data.data.message)
            }
          })
        } else {
          return false
        }
      })
    }
  },

  watch: {
    visible(newValue) {
      this.dialogFormVisible = newValue
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>