import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HostView from '@/views/HostView.vue'
import CompetitionView from '@/views/CompetitionView.vue'
import NewsView from '@/views/NewsView.vue'
import NewsInnerView from '@/views/NewsInnerView.vue'
import SkillsView from '@/views/SkillsView.vue'
import GetInvolvedView from '@/views/GetInvolvedView.vue'
import SkillsCategoriesView from '@/views/SkillsCategoriesView.vue'
import MediaView from '@/views/MediaView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

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

      ]
    },
    {
      path: '/get-involved',
      name: 'get-involved',
      component: GetInvolvedView,
    },
    // Catch-all route for 404 errors - must be last
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
    {
      path: '/media',
      name: 'media',
      component: MediaView,
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
        top: 220,
      }
    } else {
      return { top: 0, behavior: 'instant' }
    }
  }
})

// Navigation guard to handle route errors and provide better UX
router.beforeEach((to, from, next) => {
  // Check if the route exists (not a catch-all route)
  if (to.matched.length === 0) {
    // Route not found, redirect to 404 page
    next({ name: 'not-found', replace: true })
  } else {
    // Route found, proceed normally
    next()
  }
})

// Global error handler for route navigation errors
router.onError((error) => {
  console.error('Router navigation error:', error)
  // You could also show a toast notification or other error handling here
})

export default router
