<template>
  <div class="news-create">
    <div class="page-header">
      <h2>{{ isEdit ? 'Edit News' : 'Create News' }}</h2>
    </div>

    <el-card class="news-form">
      <el-form
        ref="formRef"
        :model="formData"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="Title" prop="title">
          <el-input v-model="formData.title" placeholder="Enter news title" />
        </el-form-item>

        <el-form-item label="Cover Image" prop="coverImage">
          <el-upload
            class="cover-uploader"
            :show-file-list="false"
            :on-success="handleUploadSuccess"
            :before-upload="beforeUpload"
            action="/api/upload"
          >
            <img v-if="formData.coverImage" :src="formData.coverImage" class="cover-image" />
            <el-icon v-else class="cover-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>

        <el-form-item label="Summary" prop="summary">
          <el-input
            v-model="formData.summary"
            type="textarea"
            :rows="3"
            placeholder="Enter news summary"
          />
        </el-form-item>

        <el-form-item label="Content" prop="content">
          <div class="editor-container">
            <Toolbar
              style="border-bottom: 1px solid #ccc"
              :editor="editorRef"
              :defaultConfig="toolbarConfig"
              :mode="mode"
            />
            <Editor
              style="height: 500px"
              v-model="formData.content"
              :defaultConfig="editorConfig"
              :mode="mode"
              @onCreated="handleCreated"
            />
          </div>
        </el-form-item>

        <el-form-item label="Status" prop="status">
          <el-select v-model="formData.status">
            <el-option label="Draft" value="draft" />
            <el-option label="Published" value="published" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleSubmit">
            {{ isEdit ? 'Update' : 'Create' }}
          </el-button>
          <el-button @click="$router.back()">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, shallowRef, onBeforeUnmount, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Plus } from '@element-plus/icons-vue'
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const mode = ref('default')
const route = useRoute()
const router = useRouter()
const formRef = ref()
const isEdit = computed(() => route.params.id)

// editor instance
const editorRef = shallowRef()

// editor content
const formData = ref({
  title: '',
  coverImage: '',
  summary: '',
  content: '',
  status: 'draft'
})

const rules = {
  title: [
    { required: true, message: 'Please input title', trigger: 'blur' },
    { min: 3, max: 100, message: 'Length should be 3 to 100', trigger: 'blur' }
  ],
  summary: [
    { required: true, message: 'Please input summary', trigger: 'blur' }
  ],
  content: [
    { required: true, message: 'Please input content', trigger: 'blur' }
  ]
}

// editor configuration
const toolbarConfig = {
  excludeKeys: [
    'uploadVideo',
    'insertTable',
    'group-video',
    'group-image'
  ]
}

const editorConfig = {
  placeholder: 'Please enter content...',
  MENU_CONF: {
    uploadImage: {
      server: '/api/upload', // Replace with your upload API endpoint
      fieldName: 'file',
      maxFileSize: 10 * 1024 * 1024, // 10MB
      maxNumberOfFiles: 10,
      allowedFileTypes: ['image/*'],
      metaWithUrl: true,
      customInsert: (result, insertFn) => {
        // Customize how to insert the image
        insertFn(result.url, result.alt, result.href)
      }
    }
  }
}

// Handle editor creation
const handleCreated = (editor) => {
  editorRef.value = editor
}

// Image upload handlers
const handleUploadSuccess = (res) => {
  formData.value.coverImage = res.url // Adjust according to your API response
}

const beforeUpload = (file) => {
  const isImage = file.type.startsWith('image/')
  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isImage) {
    ElMessage.error('You can only upload image files!')
    return false
  }
  if (!isLt2M) {
    ElMessage.error('Image size can not exceed 2MB!')
    return false
  }
  return true
}

// Form submission
const handleSubmit = async () => {
  if (!formRef.value) return

  try {
    await formRef.value.validate()

    // Add your API call here
    const response = await (isEdit.value
      ? updateNews(route.params.id, formData.value)
      : createNews(formData.value)
    )

    ElMessage.success(isEdit.value ? 'News updated!' : 'News created!')
    router.push('/admin/news/list')
  } catch (error) {
    console.error('Error:', error)
    ElMessage.error('Operation failed')
  }
}

// Clean up
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
</script>

<style scoped>
.news-create {
  padding: 20px;
}

.news-form {
  margin-top: 20px;
}

.editor-container {
  border: 1px solid #ccc;
  z-index: 100;
}

.cover-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 178px;
  height: 178px;
}

.cover-uploader:hover {
  border-color: #409EFF;
}

.cover-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cover-image {
  width: 178px;
  height: 178px;
  display: block;
  object-fit: cover;
}
</style>