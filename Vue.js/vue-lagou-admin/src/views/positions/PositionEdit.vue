<template>
  <el-dialog title="职位编辑" :visible.sync="dialogFormVisible" @close="handleClose">
    <el-form ref="position-edit-form" :model="form" :rules="rules">
      <el-form-item label="公司LOGO" :label-width="formLabelWidth" prop="companyLogo">
        <UploadEdit 
          ref="edit-upload" 
          :succ-upload.sync="succUpload"
          :file-list.sync="fileList"
          :change.sync="isChange"
          :extra-data="row"
        ></UploadEdit>
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
import { editPosition } from '@/api/positions'
import UploadEdit from './UploadEdit'
export default {
  components: {
    UploadEdit
  },
  props: {
    visible: {
      type: Boolean,
      required: true
    },

    row: {
      type: Object,
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
      succUpload: null,
      fileList: [],
      isChange: false
    }
  },

  methods: {
    handleCancel() {
      this.dialogFormVisible = false
    },

    handleSubmit() {
      // 判断用户是否不修改图片
      if (this.isChange) {
        this.$refs['edit-upload'].$refs.upload.submit()
      } else {
        this.submitForm()
      }

      this.$emit('update:visible', false)
    },

    // 点击右上角的X触发
    handleClose() {
      this.$emit('update:visible', false)
    },

    submitForm(value) {
      this.$refs['position-edit-form'].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = false
          this.$emit('update:visible', false)

          // 将成功上传的图片的文件名赋值给form
          if (value) {
            this.form.companyLogo = value.file
            this.form.companyLogo_old = this.row.companyLogo
          }

          editPosition(this.form).then(result=>{
            if(result.data.ret) {
              this.$message({
                message: '恭喜你，职位添加成功',
                type: 'success'
              })
              this.$parent._loadData()

              // 重置表单
              this.$refs['position-edit-form'].resetFields()
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
      const logo = this.row.companyLogo
      this.fileList = [
        {
          name: logo,
          url: 'http://localhost:3000/uploads/' + logo
        }
      ]
    },

    succUpload(value) {
      if(value.succ) {
        this.submitForm(value)
      }
    },

    row(value) {
      const logo = value.companyLogo
      this.form = {
        ...this.form,
        ...value,
        companyLogo_old: logo
      }
      this.fileList = [
        {
          name: logo,
          url: 'http://localhost:3000/uploads/' + logo
        }
      ]
    }
  }
}


</script>

<style lang='stylus' scoped>

</style>