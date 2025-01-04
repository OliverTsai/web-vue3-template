import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    home: 'Home',
  },
  zh_hk: {
    home: '首頁',
  },
  zh_cn: {
    home: '首页',
  },
  thai: {
    home: 'หน้าแรก',
  }
}

const i18n = createI18n({
  locale: 'zh_hk', // 设置默认语言
  messages
})

export default i18n