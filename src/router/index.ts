import { createRouter, createWebHistory } from 'vue-router'
import FrontStage from '../views/FrontStage.vue'
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
          path: '',
          name: 'home',
          component: async () => await import('../views/HomeView.vue'),
        },
        {
          path: '/host',
          name: 'host',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: async () => await import('@/views/HostView.vue'),
        },
        {
          path: '/competition',
          name: 'competition',
          component: async () => await import('../views/CompetitionView.vue'),
        },
        {
          path: '/news',
          name: 'news',
          component: async () => await import('../views/NewsView.vue'),

        },
        {
          path: '/news/:id',
          name: 'news-detail',
          component: async () => await import('../views/NewsInnerView.vue'),
        },
        {
          path: '/skills',
          name: 'skills',
          redirect: { name: SkillsRouteEnum.Catrgories },
          component: async () => await import('../views/SkillsView.vue'),
          children: [
            {
              path: 'categories',
              name: SkillsRouteEnum.Catrgories,
              component: async () => await import('../views/SkillsCategoriesView.vue'),
            },
            {
              path: 'manufacturing_and_engineering_technology',
              name: SkillsRouteEnum.Manufacturing,
              component: async () => await import('../views/SkillsManufacturingView.vue'),
            },
            {
              path: 'construction_and_building_technology',
              name: SkillsRouteEnum.Construction,
              component: async () => await import('../views/SkillsConstructionView.vue'),
            },
            {
              path: 'information_technology',
              name: SkillsRouteEnum.IT,
              component: async () => await import('../views/SkillsITView.vue'),
            },
            {
              path: 'logistics',
              name: SkillsRouteEnum.Logistics,
              component: async () => await import('../views/SkillsLogisticView.vue'),
            },
            {
              path: 'social_and_personal_services',
              name: SkillsRouteEnum.Social,
              component: async () => await import('../views/SkillsSocialView.vue'),
            },
            {
              path: 'arts',
              name: SkillsRouteEnum.Art,
              component: async () => await import('../views/SkillsArtView.vue'),
            },
            {
              path: 'juniors',
              name: SkillsRouteEnum.Juniors,
              component: async () => await import('../views/SkillsJuniorsView.vue'),
            },

          ]
        },
        {
          path: '/get-involved',
          name: 'get-involved',
          component: async () => await import('../views/GetInvolvedView.vue'),
        },
      ],
    },
    {
      path: '/admin',
      name: 'admin',
      component: async () => await import('@/admin/pages/AdminPage.vue'),
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if (!token) {
          next({ name: 'admin-login' })
        } else {
          next()
        }
      },
      children: [
      ],
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: async () => await import('@/admin/pages/LoginPage.vue'),
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
  }
})

export default router
