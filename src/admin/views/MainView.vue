<template>
  <el-container class="admin-container">
    <!-- Sidebar -->
    <el-aside width="200px" class="sidebar">
      <el-menu
        :default-active="activeMenu"
        class="sidebar-menu"
        :router="true"
        background-color="#304156"
        text-color="#fff"
      >
        <div class="logo-container">
          <h2 class="logo-text">Admin Panel</h2>
        </div>

        <el-sub-menu index="news">
          <template #title>
            <el-icon><Document /></el-icon>
            <span>News Management</span>
          </template>
          <el-menu-item index="/admin/news-list">News List</el-menu-item>
          <el-menu-item index="/admin/news/create">Create News</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>

    <!-- Main Content -->
    <el-container>
      <!-- Header -->
      <el-header class="header">
        <div class="header-left">
          <el-icon class="toggle-sidebar" @click="toggleSidebar">
            <Fold v-if="!isCollapse"/>
            <Expand v-else/>
          </el-icon>
        </div>
        <div class="header-right">
          <el-dropdown>
            <span class="user-dropdown">
              Admin <el-icon><ArrowDown /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Profile</el-dropdown-item>
                <el-dropdown-item>Settings</el-dropdown-item>
                <el-dropdown-item divided @click="handleLogout">Logout</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <!-- Main Content Area -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  Document,
  Fold,
  Expand,
  ArrowDown
} from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const isCollapse = ref(false)

const activeMenu = computed(() => route.path)

const toggleSidebar = () => {
  isCollapse.value = !isCollapse.value
}

const handleLogout = () => {
  // Add logout logic here
  router.push('/admin/login')
}
</script>

<style scoped>
.admin-container {
  height: 100vh;
}

.sidebar {
  background-color: #304156;
  transition: width 0.3s;
}

.sidebar-menu {
  height: 100%;
  border-right: none;
}

.logo-container {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.logo-text {
  font-size: 18px;
  font-weight: bold;
}

.header {
  background-color: white;
  border-bottom: 1px solid #dcdfe6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.toggle-sidebar {
  font-size: 20px;
  cursor: pointer;
}

.user-dropdown {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}

.el-main {
  background-color: #f0f2f5;
  padding: 20px;
}
</style>