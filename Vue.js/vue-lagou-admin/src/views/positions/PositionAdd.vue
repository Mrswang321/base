<template>
  <el-dialog title="职位添加" :visible.sync="dialogFormVisible">
    <el-form ref="position-add-form" :model="form" :rules="rules">
      <el-form-item label="公司LOGO" :label-width="formLabelWidth" prop="companyLogo">
        <Upload ref="add-upload" :succ-upload.sync="succUpload"></Upload>
      </el-form-item>
      <el-form-item label="公司名称" :label-width="formLabelWidth" prop="companyName">
        <el-input v-model="form.companyName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="职位名称" :label-width="formLabelWidth" prop="positionName">
        <el-input v-model="form.positionName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="所在城市" :label-width="formLabelWidth" prop="city">
        <el-input v-model="form.city" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="岗位薪资" :label-width="formLabelWidth" prop="salary">
        <el-input v-model="form.salary" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { addPosition } from '@/api/positions'
import Upload from './Upload'
export default {
  components: {
    Upload
  },
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      form: {
        companyName: '',
        positionName: '',
        city: '',
        salary: '',
        companyLogo: ''
      },
      rules: {
        // companyLogo: [
        //   { required: true, message: '请选择Logo图片', trigger: 'blur' },
        // ],
        companyName: [
          { required: true, message: '请输入公司名称', trigger: 'blur' },
        ],
        positionName: [
          { required: true, message: '请输入职位名称', trigger: 'blur' },
        ],
        city: [
          { required: true, message: '请输入所在城市', trigger: 'blur' },
        ],
        salary: [
          { required: true, message: '请输入岗位薪资', trigger: 'blur' },
        ],
      },
      dialogFormVisible: this.visible,
      formLabelWidth: '120px',
      succUpload: null
    }
  },

  methods: {
    handleCancel() {
      this.dialogFormVisible = false
      this.$emit('update:visible', false)
    },

    handleSubmit() {
      this.$refs['add-upload'].$refs.upload.submit()
    }
  },

  watch: {
    visible(newValue) {
      this.dialogFormVisible = newValue
    },

    succUpload(value) {
      if(value.succ) {
        this.$refs['position-add-form'].validate((valid) => {
          if (valid) {
            this.dialogFormVisible = false
            this.$emit('update:visible', false)

            // 将成功上传的图片的文件名赋值给form
            this.form.companyLogo = value.file

            addPosition(this.form).then(result=>{
              if(result.data.ret) {
                this.$message({
                  message: '恭喜你，职位添加成功',
                  type: 'success'
                })
                this.$parent._loadData()

                // 重置表单
                this.$refs['position-add-form'].resetFields()
              } else {
                this.$message.error(result.data.data.message)
              }
            })
          } else {
            return false
          }
        })
      }
    }
  }
}


</script>

<style lang='stylus' scoped>

</style>