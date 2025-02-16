import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
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
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
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
      component: () => import('../views/HostView.vue'),
    },
    {
      path: '/competition',
      name: 'competition',
      component: () => import('../views/CompetitionView.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue'),

    },
    {
      path: '/news/:id',
      name: 'news-detail',
      component: () => import('../views/NewsInnerView.vue'),
    },
    {
      path: '/skills',
      name: 'skills',
      redirect: { name: SkillsRouteEnum.Catrgories },
      component: () => import('../views/SkillsView.vue'),
      children: [
        {
          path: 'categories',
          name: SkillsRouteEnum.Catrgories,
          component: () => import('../views/SkillsCategoriesView.vue'),
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
      component: () => import('../views/GetInvolvedView.vue'),
    }
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
