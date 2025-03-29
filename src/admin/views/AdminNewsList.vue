<template>
  <div class="news-list">
    <div class="page-header">
      <h2>News List</h2>
      <el-button type="primary" @click="$router.push('/admin/news-create')">
        Create News
      </el-button>
    </div>

    <el-card>
      <el-table :data="newsList" style="width: 100%">
        <el-table-column prop="title" label="Title" />
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="status" label="Status" width="120">
          <template #default="{ row }">
            <el-tag :type="row.status === 'published' ? 'success' : 'warning'">
              {{ row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Actions" width="200">
          <template #default="{ row }">
            <el-button-group>
              <el-button type="primary" size="small" @click="handleEdit(row)">
                Edit
              </el-button>
              <el-button type="danger" size="small" @click="handleDelete(row)">
                Delete
              </el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :total="total"
          layout="total, sizes, prev, pager, next"
          :page-sizes="[10, 20, 50, 100]"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Pagination
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(100)

// Mock data
const newsList = ref([
  {
    id: 1,
    title: 'Sample News Title 1',
    date: '2024-03-20',
    status: 'published'
  },
  {
    id: 2,
    title: 'Sample News Title 2',
    date: '2024-03-19',
    status: 'draft'
  }
])

const handleEdit = (row) => {
  console.log('Edit news:', row)
}

const handleDelete = (row) => {
  ElMessageBox.confirm(
    'Are you sure you want to delete this news?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(() => {
      // Add delete logic here
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
</script>

<style scoped>
.news-list {
  min-height: 100%;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.pagination-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>