import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export enum SkillsEnum {
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
      component: () => import('../views/HostView.vue'),
    },
    {
      path: '/competition',
      name: 'competition',
      component: () => import('../views/CompetitionView.vue'),
    },
    {
      path: '/skills',
      name: 'skills',
      redirect: { name: SkillsEnum.Catrgories },
      component: () => import('../views/SkillsView.vue'),
      children: [
        {
          path: 'categories',
          name: SkillsEnum.Catrgories,
          component: () => import('../views/SkillsCategoriesView.vue'),
        },
        {
          path: 'manufacturing_and_engineering_technology',
          name: SkillsEnum.Manufacturing,
          component: () => import('../views/SkillsManufacturingView.vue'),
        },
        {
          path: 'construction_and_building_technology',
          name: SkillsEnum.Construction,
          component: () => import('../views/SkillsConstructionView.vue'),
        },
        {
          path: 'information_technology',
          name: SkillsEnum.IT,
          component: () => import('../views/SkillsInformationView.vue'),
        },
        {
          path: 'logistics',
          name: SkillsEnum.Logistics,
          component: () => import('../views/SkillsLogisticView.vue'),
        },
        {
          path: 'social_and_personal_services',
          name: SkillsEnum.Social,
          component: () => import('../views/SkillsSocialView.vue'),
        },
        {
          path: 'arts',
          name: SkillsEnum.Art,
          component: () => import('../views/SkillsArtView.vue'),
        },
        {
          path: 'juniors',
          name: SkillsEnum.Juniors,
          component: () => import('../views/SkillsJuniorsView.vue'),
        },

      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'instant' }
    }
  }
})

export default router
