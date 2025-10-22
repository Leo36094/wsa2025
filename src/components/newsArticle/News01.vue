<template>
  <template v-if="locale === 'en'">
    <h2 class="news-inner-title">The 3<sup>rd </sup> Worldskills Asia Competition Skills</h2>
    <div class="news-inner-content">
      <p>
        The 3rd WorldSkills Asia Competition will take place in Taipei Nangang Exhibition Center
        from November 27 to 29, 2025. The event will feature 34 official skills, 5 junior skills,
        and 5 exhibition skills, attracting thousands of experts and competitors from all over Asia.
      </p>

      <h3>Official Skills (34 skills in total) :</h3>
      <ul>
        <li>Robot System Integration</li>
        <li>Industrial Design Technology</li>
        <li>Mechatronics</li>
        <li>Industrial Control</li>
        <li>CNC Turning</li>
        <li>CNC Milling</li>
        <li>Cooking</li>
        <li>Hairdressing</li>
        <li>Beauty Therapy</li>
        <li>Restaurant Service</li>
        <li>Health and Social Care</li>
        <li>Automobile Technology</li>
        <li>Car Painting</li>
        <li>Autobody Repair</li>
        <li>Bricklaying</li>
        <li>Electrical Installations</li>
        <li>Refrigeration and Air Conditioning</li>
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
        <li>Software Applications Development</li>
        <li>Mobile Applications Development</li>
        <li>Mechanical Engineering CAD</li>
        <li>Autonomous Mobile Robotics</li>
        <li>Welding</li>
        <li>Electronics</li>
      </ul>
      <h3>Exhibition Skills (5 skills in total) :</h3>
      <ul>
        <li>Wall and Floor Tiling</li>
        <li>Plastering and Drywall System</li>
        <li>Digital Construction</li>
        <li>Painting and Decorating(Youth Team & Junior Team)</li>
      </ul>
      <h3>Junior Skills (5 skills in total) :</h3>
      <ul>
        <li>Electrical Installations</li>
        <li>Graphic Design Technology</li>
        <li>Web Technologies</li>
        <li>Autonomous Mobile Robotics</li>
        <li>Electronics</li>
      </ul>
      <p>The skills to be held are as per the announcement by WSA.</p>
      <a href="https://www.worldskillsasia.net/en/Pages/default.aspx" target="_blank"
        >Official Website: WorldSkills Asia</a
      >
    </div>
  </template>
  <template v-else>
    <h2 class="news-inner-title">第三屆亞洲技能競賽職類公布</h2>
    <div class="news-inner-content">
      <p>
        第三屆亞洲技能競賽將於2025年11月27日至29日在<strong>臺北南港展覽館</strong>舉行。本次賽事將包含<strong>34項正式職類、5項青少年職類及5項示範職類</strong>，吸引來自亞洲各地的專家與選手參與。
      </p>
      <h3>正式職類（共34項）</h3>
      <ul>
        <li>機器人系統整合</li>
        <li>工業設計技術</li>
        <li>機電整合</li>
        <li>工業控制</li>
        <li>CNC車床</li>
        <li>CNC銑床</li>
        <li>西餐烹飪</li>
        <li>美髮</li>
        <li>美容</li>
        <li>餐飲服務</li>
        <li>健康照護</li>
        <li>汽車技術</li>
        <li>汽車噴漆</li>
        <li>汽車板金</li>
        <li>砌磚</li>
        <li>電氣裝配</li>
        <li>冷凍空調</li>
        <li>家具木工</li>
        <li>門窗木工</li>
        <li>資訊網路布建</li>
        <li>服裝創作</li>
        <li>平面設計技術</li>
        <li>3D數位遊戲藝術</li>
        <li>花藝</li>
        <li>網頁技術</li>
        <li>雲端運算</li>
        <li>網路安全</li>
        <li>資訊與網路技術</li>
        <li>商務軟體設計</li>
        <li>行動應用開發</li>
        <li>CAD機械設計製圖</li>
        <li>自主移動機器人</li>
        <li>銲接</li>
        <li>電子</li>
      </ul>
      <h3>示範職類（共5項）</h3>
      <ul>
        <li>建築舖面</li>
        <li>粉刷技術與乾牆系統</li>
        <li>數位建設BIM</li>
        <li>漆作裝潢（青年組/青少年組）</li>
      </ul>
      <h3>青少年職類（共5項）</h3>
      <ul>
        <li>電氣裝配</li>
        <li>平面設計技術</li>
        <li>網頁技術</li>
        <li>自主移動機器人</li>
        <li>電子</li>
      </ul>
      <p>所有競賽職類均依據亞洲技能組織（WSA）公告為準。</p>
      🔗 官方網站：<a href="https://www.worldskillsasia.net/en/Pages/default.aspx" target="_blank"
        >WorldSkills Asia</a
      >
    </div>
  </template>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>
