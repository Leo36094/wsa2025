import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HostView from '@/views/HostView.vue'
import CompetitionView from '@/views/CompetitionView.vue'
import NewsView from '@/views/NewsView.vue'
import NewsInnerView from '@/views/NewsInnerView.vue'
import SkillsView from '@/views/SkillsView.vue'
import GetInvolvedView from '@/views/GetInvolvedView.vue'
import SkillsCategoriesView from '@/views/SkillsCategoriesView.vue'
import FrontStage from '@/views/FrontStage.vue'
import { nextTick } from 'vue'

export enum SkillsRouteEnum {
  Catrgories = 'categories',
  Manufacturing = 'manufacturing_and_engineering_technology',
  Construction = 'construction_and_building_technology',
  IT = 'information_technology',
  Logistics = 'logistics',
  Social = 'social_and_personal_services',
  Art = 'arts',
  Juniors = 'juniors',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'front-stage',
      component: FrontStage,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/host',
          name: 'host',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: HostView,
        },
        {
          path: '/competition',
          name: 'competition',
          component: CompetitionView,
        },
        {
          path: '/news',
          name: 'news',
          component: NewsView,
        },
        {
          path: '/news/:id',
          name: 'news-detail',
          component: NewsInnerView,
        },
        {
          path: '/skills',
          name: 'skills',
          redirect: { name: SkillsRouteEnum.Catrgories },
          component: SkillsView,
          children: [
            {
              path: 'categories',
              name: SkillsRouteEnum.Catrgories,
              component: SkillsCategoriesView,
            },
            {
              path: 'manufacturing_and_engineering_technology',
              name: SkillsRouteEnum.Manufacturing,
              component: () => import('../views/SkillsManufacturingView.vue'),
            },
            {
              path: 'construction_and_building_technology',
              name: SkillsRouteEnum.Construction,
              component: () => import('../views/SkillsConstructionView.vue'),
            },
            {
              path: 'information_technology',
              name: SkillsRouteEnum.IT,
              component: () => import('../views/SkillsITView.vue'),
            },
            {
              path: 'logistics',
              name: SkillsRouteEnum.Logistics,
              component: () => import('../views/SkillsLogisticView.vue'),
            },
            {
              path: 'social_and_personal_services',
              name: SkillsRouteEnum.Social,
              component: () => import('../views/SkillsSocialView.vue'),
            },
            {
              path: 'arts',
              name: SkillsRouteEnum.Art,
              component: () => import('../views/SkillsArtView.vue'),
            },
            {
              path: 'juniors',
              name: SkillsRouteEnum.Juniors,
              component: () => import('../views/SkillsJuniorsView.vue'),
            },
          ],
        },
        {
          path: '/get-involved',
          name: 'get-involved',
          component: GetInvolvedView,
        },
      ],
    },
    {
      path: '/admin',
      name: 'admin',
      component: async () => await import('@/admin/views/MainView.vue'),
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if (!token) {
          next({ name: 'admin-login' })
        } else {
          next()
        }
      },
      children: [
        {
          path: 'news',
          name: 'admin-news',
          component: async () => await import('@/admin/views/AdminNewsList.vue'),
        },
        {
          path: 'news-create',
          name: 'admin-news-create',
          component: async () => await import('@/admin/views/AdminNewsCreate.vue'),
        },
        {
          path: 'news-edit/:id',
          name: 'admin-news-edit',
          component: async () => await import('@/admin/views/AdminNewsCreate.vue'),
        },
      ],
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: async () => await import('@/admin/views/AdminLogin.vue'),
    },
  ],
  async scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      await nextTick()
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 20,
      }
    } else {
      return { top: 0, behavior: 'instant' }
    }
  },
})

export default router
