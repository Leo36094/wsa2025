<template>
  <div class="news-inner-container">
    <div class="news-inner">
      <h1 class="news-inner-title">{{ newsDetail.en.title }}</h1>
      <div class="news-inner-content" v-html="newsDetail.en.content"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const newsId = route.params.id
const newsDetail = {
  en: {
    title: 'The 3rd WorldSkills Asia Competition Skills',
    content: `
<p>
The 3rd WorldSkills Asia Competition will take place in Taipei Nangang Exhibition Center from November 27 to 29, 2025. The event will feature 36 official skills, 8 junior skills, and 4 exhibition skills, attracting thousands of experts and competitors from all over Asia.</p>
<img src="${import.meta.env.BASE_URL}images/news/news_01.jpg" alt="The 3rd WorldSkills Asia Competition Skills" style="width: 100%;">
<p style="font-weight: 700; font-size: 0.24rem; text-align: left; width: 100%;">
Official Skills (36 skills in total) :
</p>
<ul>
<li>Robot System Integration</li>
<li>Industrial Design Technology</li>
<li>Mechatronics</li>
<li>Industrial Control</li>
<li>CNC Turning</li>
<li>CNC Milling,
<li>Cooking</li>
<li>Hairdressing,
<li>Beauty Therapy</li>
<li>Restaurant Service</li>
<li>Health and Social Care</li>
<li>Automobile Technology</li>
<li>Car Painting</li>
<li>Autobody Repair</li>
<li>Bricklaying</li>
<li>Electrical Installations</li>
<li>Plastering and Drywall System</li>
<li>Refrigeration and Air Conditioning</li>
<li>Digital Construction</li>
<li>Cabinetmaking</li>
<li>Joinery</li>
<li>Information Network Cabling</li>
<li>Fashion Technology</li>
<li>Graphic Design Technology</li>
<li>3D Digital Game Art</li>
<li>Floristry</li>
<li>Web Technologies</li>
  <li>Cloud Computing</li>
  <li>Cybersecurity</li>
  <li>IT Network Systems Administration</li>
  <li>IT Software Solutions for Business</li>
  <li>Mobile Applications Development</li>
  <li>Mechanical Engineering CAD</li>
  <li>Autonomous Mobile Robotics</li>
  <li>Welding</li>
  <li>Electronics</li>
  </ul>
  <p style="font-weight: 700; font-size: 0.24rem; text-align: left; width: 100%;">
  Exhibition Skills (4 skills in total) :
  </p>
  <ul>

  <li>Prototype Modelling</li>
  <li>Plastic Die Engineering</li>
  <li>Wall and Floor Tiling</li>
  <li>Painting and Decorating</li>
  </ul>
<p style="font-weight: 700; font-size: 0.24rem; text-align: left; width: 100%;">Junior Skills (8 skills in total) :</p>
<ul>
<li>Restaurant Service</li>
<li>Hairdressing</li>
<li>Electrical Installations</li>
<li>Graphic Design Technology</li>
<li>Web Technologies</li>
<li>Autonomous Mobile Robotics</li>
<li>Electronics</li>
<li>Floristry</li>
</ul>
<p>The skills to be held are as per the announcement by WSA.</p>
<a href="https://www.worldskillsasia.net/en/Pages/default.aspx" target="_blank">https://www.worldskillsasia.net/en/Pages/default.aspx</a>

  `,
  },
  zh: {
    title: 'Title',
    content: ``,
  },
}
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
async function fetchNewsInfo(newsId: string) {
  console.log('fetchNewsInfo', newsId)
  await delay(1000)
  return newsDetail
}
const newsInfo = ref<{
  en: {
    title: string
    content: string
  }
  zh: {
    title: string
    content: string
  }
}>({
  en: {
    title: '',
    content: '',
  },
  zh: {
    title: '',
    content: '',
  },
})
onMounted(async () => {
  // Fetch news info
  newsInfo.value = await fetchNewsInfo(newsId as string)
})
</script>
<style lang="scss" scoped>
.news-inner-container {
  @include withContainer;
  padding-top: 0.76rem;
  .news-inner {
    margin-top: 0.72rem;
    padding-bottom: 1.6rem;
    :deep {
      a {
        text-decoration: underline;
        font-size: 0.18rem;
      }
      ul {
        list-style: disc;
        margin-left: 0.2rem;
        margin-bottom: 0.2rem;
        li {
          font-size: 0.18rem;
          list-style: disc;
        }
      }
      ol {
        list-style: decimal;
        margin-left: 0.2rem;
      }
    }
    .news-inner-title {
      font-size: 0.48rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
      padding: 0 0.8rem;
      text-align: center;
    }
    .news-inner-content {
      max-width: 8.88rem;
      margin: 0 auto;
      @include flexCenter(column);
      justify-content: flex-start;
      align-items: flex-start;
      :deep {
        h1 {
          font-size: 0.48rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }
        h2 {
          font-size: 0.32rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }
        h3 {
          font-size: 0.24rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }
        h4 {
          font-size: 0.16rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }

        p {
          font-size: 0.16rem;
          margin: 0.2rem 0;
        }
        img {
          border-radius: 0.08rem;
          aspect-ratio: 16/9;
          width: 100%;
        }
      }
    }
  }
}
@include tablet {
  .news-inner-container {
    .news-inner {
      margin-top: 0.16rem;
      .news-inner-title {
        padding: 0 0.4rem;
        line-height: normal;
      }
      .news-inner-content {
        padding: 0 0.4rem;
        line-height: normal;
      }
    }
  }
}
@include mobile {
  .news-inner-container {
    .news-inner {
      .news-inner-title {
        font-size: 0.24rem;
        margin-bottom: 0.16rem;
        padding: 0 0.24rem;
      }
      .news-inner-content {
        padding: 0 0.24rem;
      }
    }
  }
}
</style>
