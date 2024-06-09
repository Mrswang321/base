<template>
  <el-upload
    ref="upload"
    action="http://localhost:3000/api/positions/upload"
    :on-remove="handleRemove"
    :on-success="handleSuccess"
    :auto-upload="false"
    :limit="1"
    name="companyLogo"
  >
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png/gif文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
export default {
  methods: {
    handleSuccess(response, file, fileList) {
      if (response.ret) {
        this.$emit('update:succ-upload', {
          succ: true,
          file: response.data.file
        })
      }
    },

    handleRemove() {
      console.log(0)
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>