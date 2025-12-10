<template>
  <template v-if="locale === 'en'">
    <h2 class="news-inner-title">
      2025 Asian Skills Competition – "Skill Mission" Prize Winners Announcement
    </h2>
    <div class="news-inner-content">
      <p>
        Thank you for your enthusiastic participation in the worldskills Asia Taipei2025 – Skill
        Mission event.
      </p>
      <p>Congratulations to the following five lucky winners:</p>

      <h3>SANSUI SUTV-QG65220 – 65" LCD TV</h3>
      <p>Tsai O-tzeng 0966***125</p>

      <h3>ASUS Expert Book B1 – Laptop</h3>
      <p>Chen O-tong 0930***507</p>

      <h3>VA279HG Eye Care Gaming Monitor</h3>
      <p>Lin O-hsien 0978***809</p>
      <p>Huang O-hui 0933***250</p>

      <h3>Gaming Set – Gaming Accessories Package</h3>
      <p>Lin O-chuan 0926***560</p>

      <p>The organizer will contact all winners by phone.</p>
      <p>
        Please complete the prize collection procedures no later than 12:00 p.m., December 16, 2025
        (Tuesday) at the Taipei Computer Association.
      </p>

      <h3>Notes:</h3>
      <ul>
        <li>Prize collection must be done in person.</li>
        <li>
          If authorizing a representative to collect on your behalf, both the winner's and the
          representative's identity documents must be presented for verification.
        </li>
      </ul>

      <h3>Prize Collection Venue:</h3>
      <p>11F., No. 2, Sec. 3, Bade Rd., Songshan Dist., Taipei City</p>
      <p>(Taipei Computer Association)</p>

      <h3>Collection Hours:</h3>
      <p>Monday to Friday, 09:00–18:00</p>
    </div>
  </template>
  <template v-else>
    <h2 class="news-inner-title">2025亞洲技能競賽【技能出任務】得獎名單</h2>
    <div class="news-inner-content">
      <p>感謝大家熱情參與 2025 亞洲技能競賽【技能出任務】活動，</p>
      <p>恭喜以下 5 位幸運得獎者：</p>

      <h3>SANSUI SUTV-QG65220 山水65吋液晶電視</h3>
      <p>蔡O宸 0966***125</p>

      <h3>ASUS Expert Book B1 筆電</h3>
      <p>陳O彤 0930***507</p>

      <h3>VA279HG Eye Care Gaming Monitor 護眼電競螢幕</h3>
      <p>林O嫻 0978***809</p>
      <p>黃O慧 0933***250</p>

      <h3>Gaming Set 電競套組</h3>
      <p>林O川 0926***560</p>

      <p>主辦單位將陸續以電話通知得獎者。</p>
      <p>
        請得獎者於 114 年 12 月 15日、12月 16 日（星期一、星期二）至台北市電腦公會完成領獎手續。
      </p>

      <h3>附註：</h3>
      <ul>
        <li>以 本人親領 為原則。</li>
        <li>
          若委託他人代領，請務必攜帶 得獎者與代領人之身分證件 以供查驗。
        </li>
      </ul>

      <h3>領獎地點：</h3>
      <p>台北市松山區八德路三段 2 號 11 樓（台北市電腦公會）</p>

      <h3>領獎時間：</h3>
      <p>週一、週二 09:00–18:00</p>
    </div>
  </template>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>

