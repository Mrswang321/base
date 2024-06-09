<template>
  <el-upload
    ref="upload"
    action="http://localhost:3000/api/positions/upload"
    :on-remove="handleRemove"
    :on-success="handleSuccess"
    :auto-upload="false"
    :limit="1"
    :data="{companyLogo_old: extraData.companyLogo}"
    :on-change="handleChange"
    :file-list="fileList"
    list-type="picture"
    name="companyLogo"
  >
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png/gif文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
export default {
  props: {
    fileList: Array,
    extraData: Object
  },
  data() {
    return {
      
    }
  },
  methods: {
    handleSuccess(response, file, fileList) {
      if (response.ret) {
        this.$emit('update:succ-upload', {
          succ: true,
          file: response.data.file
        })
      }
    },

    handleRemove(file, fileList) {
      this.$emit('update:file-list', fileList)
    },

    handleChange(file, fileList) {
      this.$emit('update:change', true)
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>