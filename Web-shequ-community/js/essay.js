let nan;
let essays = new Vue({
  el: "#essay_box",
  data() {
    return {
      // 文章分类
      ispush: 1,
      // 内容
      essay_content: [
        {
          essay_img: "./image/essay/essay01.webp",
          essay_title: "来自一名初中生的人生经历",
          essay_text:
            "大家好我是来自福建厦门的一名初中生对编程有着由衷的兴趣我的英语成绩不是很好但是我却十分喜欢看花花绿绿的代码，当然不用指望我能看懂只不过羡慕罢了，还记得在三年级的时候我看到了一个图形化编程的软件看到海报感觉别有兴趣。进入软件就是一个大大的推荐页面里面有很多训练师（玩家）做的作品例如经典还原马里奥，贪吃蛇，扫雷……和很多训练师自己独自做的游戏很有创造性虽说玩着别人的游戏很快乐但是还是没有玩着自己做的作品香。",
          category: "other",
          id: 1,
        },
        {
          essay_img: "./image/essay/vue.png",
          essay_title: "element-plus项目主题换肤与暗黑模式",
          essay_text:
            "暗黑模式在过去几年中最受欢迎，各大操作系统也全部支持了暗黑模式，并在浏览器中提供了查询是否开启暗黑模式接口。接下来以vue3的element-plus为例，通过切换全局css变量的方式，实现主题换肤与暗黑模式设置。",
          category: "tutorial",
          id: 2,
        },
        {
          essay_img:
            "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9e622807-88f2-45c7-8044-6eea4b8f33f7/294211b1-eac7-4c5e-b6c2-176e30411342.jpg",
          essay_title: "flex弹性布局总结",
          essay_text:
            "flex是flexible Box的缩写，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为flex布局。\
            当为父盒子设置为flex布局以后，子元素的float、clear和vertical-align属性将失效。\
            采用flex布局的元素，称为flex容器，他的所有子元素自动成为容器成员，称为flex项目\
            flex布局原理：通过父盒子添加flex属性，控制子盒子的位置和排列方式",
          category: "tutorial",
          id: 3,
        },
        {
          essay_img: "./image/essay/vim_logo.png",
          essay_title: "VIM编辑器使用总结",
          essay_text:
            "Vim是一个功能强大的全屏幕文本编辑器，是Linux/UNlX上最常用的文本编辑器，它的作用是建立、编辑、显示文本文件。Vim没有菜单，只有命令。",
          category: "code",
          id: 4,
        },
        {
          essay_img: "./image/essay/essay05.jpg",
          essay_title: "🍬 为什么 CSS 动画比 JavaScript 高效？",
          essay_text:
            "讲到动画，当然是非常有意思的啦，你可以往上滑一下，看看上面的封面图，是不是相当的炫酷，以为我是代码写出来的吗？那当然不可能啊，我这么摸鱼，怎么会为了个封面图上号呢废话不多说，其实上面的动图用代码实现也不会很困难，这个图是用 canva 做出来的。本文主要讲以下这些内容",
          category: "code",
          id: 5,
        },
        {
          essay_img: "./image/essay/essay06.jpg",
          essay_title: "一个不华丽的标题",
          essay_text: "第六篇编程文章",
          category: "code",
          id: 6,
        },
        {
          essay_img: "./image/essay/essay07.jpg",
          essay_title: "一个不华丽的标题",
          essay_text: "第七篇编程文章",
          category: "code",
          id: 7,
        },
        {
          essay_img: "./image/essay/essay08.jpg",
          essay_title: "一个不华丽的标题",
          essay_text: "第八篇其他文章",
          category: "other",
          id: 8,
        },
        {
          essay_img: "./image/essay/essay09.jpg",
          essay_title: "一个不华丽的标题",
          essay_text: "第九篇教程文章",
          category: "tutorial",
          id: 9,
        },
        {
          essay_img: "./image/essay/essay10.jpg",
          essay_title: "一个不华丽的标题",
          essay_text: "第十篇编程文章",
          category: "code",
          id: 10,
        },
      ].reverse(),
      isshezi: false,
      ispaixu: false,
      isreve: false,
    };
  },
  computed: {
    // 返回指定分类的文章
    essay_content_() {
      var i = [];
      if (this.ispush != 1) {
        for (let index = 0; index < this.essay_content.length; index++) {
          if (
            this.ispush == 2 &&
            this.essay_content[index].category == "code"
          ) {
            i.push(this.essay_content[index]);
          }
          if (
            this.ispush == 3 &&
            this.essay_content[index].category == "tutorial"
          ) {
            i.push(this.essay_content[index]);
          }
          if (
            this.ispush == 4 &&
            this.essay_content[index].category == "other"
          ) {
            i.push(this.essay_content[index]);
          }
        }
      } else {
        i = this.essay_content;
      }
      return i;
    },
  },

  methods: {
    // 文章分类切换
    tab_list: function (list) {
      var essay_con = this.essay_content;
      this.essay_content = [];
      this.ispush = parseInt(list);
      setTimeout(() => {
        this.essay_content = essay_con;
      });
    },
    // 文章被点击切换到指定页面
    jump: function (list_num) {
      window.location.assign("./html/essay/" + list_num + "_essay.html");
    },
    shezi_btn() {
      this.isshezi = !this.isshezi;
    },
    paixu(is_) {
      if (is_ == this.ispaixu) {
        this.ispaixu = !this.ispaixu;
        this.essay_content.reverse();
      }
      var essay_con = this.essay_content;
      this.essay_content = [];
      this.isshezi = !this.isshezi;
      setTimeout(() => {
        this.essay_content = essay_con;
      });
    },
  },
});