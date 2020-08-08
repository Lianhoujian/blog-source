/**
 * Aurora 主题配置文件
 * 食用指南：https://github.com/chanshiyucx/blog/issues/41
 * 联系作者：Blog https://chanshiyu.com     QQ 1124590931
 */

export default {
  /**
   * ==================================================
   *                 站点功能【必需】
   * ==================================================
   **/

  /**
   * 站点标题
   */
  title: '执笔看墨花开',
  subtitle: '微末凡尘 心向天空',

  /**
   * Github Issues 配置【文章、说说、书单、友链】
   */
  username: 'Lianhoujian', // github 用户名
  repository: 'blog', // 文章仓库地址
  // token 从中间任意位置拆开成两部分，避免 github 代码检测失效
  token: ['f0f56c63a50cfad9560', '7eb9475c326a8ea9a04c7'],

  /**
   * Gitalk 配置【评论功能】，详细文档参见：https://github.com/gitalk/gitalk
   */
  gitalk: {
    clientID: '5d9c883628bbd3978456',
    clientSecret: '1931d6f7632595f8894d694c9f2622cec4214313',
    repo: 'comment', // 评论仓库地址
    owner: 'Lianhoujian',
    admin: ['Lianhoujian'],
    distractionFreeMode: false // 是否开始无干扰模式【背景遮罩】
  },

  /**
   * leancloud 配置 【文章浏览次数】
   */
  leancloud: {
    appId: 'wyoU1Psr7JXLhMl9RIyhpXHq-gzGzoHsz',
    appKey: 'kN1sHizwah8DWyYjzRxBPt36',
    serverURLs: 'https://g58zbduk.lc-cn-n1-shared.com'
  },

  /**
   * ====================================================
   *                     页面设置
   * ====================================================
   */

  /**
   * 归档页面
   */
  archiveOpts: {
    display: true, // 是否显示该页面
    enableComment: false, // 是否开启评论功能
    qoute: '華枝春滿 天心月圓' // 页面顶部一言
  },

  /**
   * 分类页面【与 Github Issues 的 Milestone 对应】
   */
  categoryOpts: {
    display: true,
    enableComment: false,
    qoute: '桜華月想 暮色蒼然'
  },

  /**
   * 标签配置
   */
  tagOpts: {
    display: true,
    enableComment: false,
    qoute: '灯笼流丽，百鬼夜行'
  },

  /**
   * 灵感页面
   */
  inspirationOpts: {
    display: true,
    enableComment: true,
    qoute: '詠奏妖華，明鏡止水'
  },

  /**
   * 书单页面
   */
  bookOpts: {
    display: true,
    enableComment: true,
    qoute: '追想風景 彼岸帰航'
  },

  /**
   * 友链页面
   */
  friendOpts: {
    display: true,
    enableComment: true,
    qoute: '青青子衿，悠悠我心'
  },

  /**
   * 关于页面
   */
  aboutOpts: {
    display: true,
    enableComment: true,
    qoute: '尽力而为，顺其自然',
    avatar: 'https://i0.hdslb.com/bfs/album/5f87da36a07024188d7fe0feb081a470a6cdcf31.jpg@200w_200h_1e_1c.webp',
    graduated: 'Hangzhou Dianzi University (HDU)',
    college: 'Computer Science',
    // 联系方式，可自由添加
    contact: [
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/poi/2019/email.png',
        link: 'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=Z1ZXVlBfUVFWUV8nFhZJBAgK'
      },
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/poi/2019/github.png',
        link: 'https://github.com/xlzy520'
      },
      {
        icon: 'https://www.bilibili.com/favicon.ico',
        link: 'https://space.bilibili.com/7560113'
      },
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/poi/2019/music.png',
        link: 'https://music.163.com/#/user/home?id=69174403'
      }
    ]
  },

  /**
   * ======================================================
   *                      主题自定义
   * ======================================================
   */

  /**
   * 赛钱箱
   */
  qrcode: [
    {
      name: '支付宝',
      img: 'https://i0.hdslb.com/bfs/album/6c5015061df9f2a3db9c98dea366a1a45408ef45.png@1e_1c.webp'
    },
    {
      name: '微信',
      img: 'https://i0.hdslb.com/bfs/album/0be95edda50ca691c3f2207a594459f1d258c0bf.png@1e_1c.webp'
    }
  ],

  /**
   * 加载动画
   */
  loadingImg: 'https://i0.hdslb.com/bfs/album/adb6a03b821b8ab92894d668f8ab8ce3e24a51d6.gif@1e_1c.webp',

  /**
   * 文章默认图
   */
  defaultCover: 'https://i0.hdslb.com/bfs/album/a707edf425f0bf5ec557d687e4ef45fa6c82eada.jpg',

  /**
   * 音乐播放器,
   */
  APlayer: [
    {
      name: '三年幻想郷',
      artist: '神乃木製作所',
      url: 'https://music.163.com/song/media/outer/url?id=767452.mp3',
      cover: 'https://p1.music.126.net/QdxRMFtZCNkTsvJtNfpHpg==/565148976688829.jpg?param=130y130'
    },
    {
      name: '水面の満月',
      artist: '神乃木製作所',
      url: 'https://music.163.com/song/media/outer/url?id=767726.mp3',
      cover: 'https://p2.music.126.net/7AvaL3kt8uaC-ouLOr1C4w==/664105023188835.jpg?param=130y130'
    },
    {
      name: '素直と不器用と意地っ張り',
      artist: '三輪学',
      url: 'https://music.163.com/song/media/outer/url?id=478095.mp3',
      cover: 'https://p2.music.126.net/RIOvUtQejxeI5S2sP_nmiw==/3434874333355654.jpg?param=130y130'
    },
    {
      name: '比翼の羽根',
      artist: 'eufonius',
      url: 'https://music.163.com/song/media/outer/url?id=718551.mp3',
      cover: 'https://p2.music.126.net/c5-mvashaLJseFBwP3md4A==/109951163351769650.jpg?param=130y130'
    },
    {
      name: '春よ、来い',
      artist: 'SMOOTH J',
      url: 'https://music.163.com/song/media/outer/url?id=511369.mp3',
      cover: 'https://p1.music.126.net/DWZH0eov-uLttdjzpNB26w==/6050612487861686.jpg?param=130y130'
    },
    {
      name: '山水之间',
      artist: '许嵩',
      url: 'https://music.163.com/song/media/outer/url?id=28802028.mp3',
      cover: 'https://p1.music.126.net/WoR2LbM1IFauFpvhBWOjqA==/6642149743396577.jpg?param=130y130'
    },
    {
      name: '我想牵着你的手',
      artist: '许嵩',
      url: 'https://music.163.com/song/media/outer/url?id=167903.mp3',
      cover: 'https://p2.music.126.net/l-WSrtuUVlxINzqz6ADOOA==/45079976751178.jpg?param=130y130'
    },
    {
      name: '花のように',
      artist: '松たか子',
      url: 'https://music.163.com/song/media/outer/url?id=610661.mp3',
      cover: 'https://p1.music.126.net/048eUFnzBGOef54h84XeFg==/811439581298946.jpg?param=130y130'
    },
    {
      name: '光るなら(TV动画《四月是你的谎言》OP1 ；TVアニメ「四月は君の嘘」OP1)',
      artist: 'Goose house',
      url: 'https://music.163.com/song/media/outer/url?id=29732992.mp3',
      cover: 'https://p2.music.126.net/hspOpLQKDm_ODcZj9Rd1CQ==/109951163477942900.jpg?param=200y200'
    },
    {
      name: 'secret base ~君がくれたもの~ (10 years after Ver.)',
      artist: '茅野愛衣 / 戸松遥 / 早見沙織',
      url: 'https://music.163.com/song/media/outer/url?id=33911781.mp3',
      cover: 'httpss://p1.music.126.net/6fw0sKYnqkWjisM7w7_4DQ==/109951163078058569.jpg?param=180y180'
    },
    {
      name: '恋愛サーキュレーション',
      artist: '花澤香菜',
      url: 'https://music.163.com/song/media/outer/url?id=579954.mp3',
      cover: 'https://p2.music.126.net/hWrYLdhzF4waj4WL1dFPmg==/642114790633458.jpg?param=130y130'
    },
  ],

  /**
   * 主题配色，目前主要用于文章、说说、关于等卡片配色，以后可能会有其他用途
   * 推荐一个好看的取色站，日本の伝統色：http://nipponcolors.com/
   */
  themeColors: [
    '#B28FCE', // 薄
    '#86C166', // 苗
    '#F596AA', // 桃
    '#F19483', // 曙
    '#F9BF45', // 玉子
    '#FAD689', // 浅黄
    '#E79460', // 洗柿
    '#2EA9DF', // 露草
    '#FB966E', // 洗朱
    '#BC9F77', // 白茶
    '#867835', // 黄海松茶
    '#B9887D' // 水がき
  ]
}
