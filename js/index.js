var shijiang;
function time() {
  var now = new Date();
  setTimeout(time, 1000);
  var dangqian =
    now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
  shijiang = "本破站：已经安全运行：" + DateDiff("2022-7-26", dangqian) + " 天";
}


time();
/* 计算运行天数的封装函数 */
function DateDiff(sDate1, sDate2) {
  //sDate1和sDate2是2002-12-18格式
  var aDate, oDate1, oDate2, iDays;
  aDate = sDate1.split("-");
  oDate1 = new Date(aDate[1] + "-" + aDate[2] + "-" + aDate[0]); //转换为12-18-2002格式
  aDate = sDate2.split("-");
  oDate2 = new Date(aDate[1] + "-" + aDate[2] + "-" + aDate[0]);
  iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
  return iDays;
}
log.errol(
  "Welcome to ❤ Shi Qianjiang Stage - v1.3.8-alpha.2 ❤ for Home o(*￣▽￣*)ブ"
);
log.warning("⭐️ Shi Qianjiang Blink - v1.3.8 ⭐️");
log.success(shijiang);
log.v("版本", "v1.3.8");
const home = document.getElementById("home");
const essay = document.getElementById("essay");
const introduce = document.getElementById("introduce");
const link = document.getElementById("link");
const list = document.querySelectorAll(".list");
const head_text = document.getElementById("head_text");
let search = location.search.substring(1).split("=");
var tab_seach = 0;
if (search.length > 1) {
  if (search[1] == "home") {
    tab_seach = 1;
    list.forEach((item) => item.classList.remove("default"));
    document
      .querySelector(".nav .list:nth-child(" + tab_seach + ")")
      .classList.add("default");
    head_text.innerText = "首页";
    essay.style.display = "none";
    introduce.style.display = "none";
    link.style.display = "none";
    home.style.display = "";
    console.log(true);
  } else if (search[1] == "essay") {
    tab_seach = 2;
    list.forEach((item) => item.classList.remove("default"));
    document
      .querySelector(".nav .list:nth-child(" + tab_seach + ")")
      .classList.add("default");
    head_text.innerText = "文章";
    home.style.display = "none";
    introduce.style.display = "none";
    link.style.display = "none";
    essay.style.display = "";
    console.log(true);
  } else if (search[1] == "introduce") {
    tab_seach = 3;
    list.forEach((item) => item.classList.remove("default"));
    document
      .querySelector(".nav .list:nth-child(" + tab_seach + ")")
      .classList.add("default");
    head_text.innerText = "介绍";
    home.style.display = "none";
    essay.style.display = "none";
    link.style.display = "none";
    introduce.style.display = "";
    console.log(true);
  } else if (search[1] == "link") {
    tab_seach = 4;
    list.forEach((item) => item.classList.remove("default"));
    document
      .querySelector(".nav .list:nth-child(" + tab_seach + ")")
      .classList.add("default");
    head_text.innerText = "链接";
    home.style.display = "none";
    essay.style.display = "none";
    introduce.style.display = "none";
    link.style.display = "";
    console.log(true);
  } else {
    console.log("errol");
  }
}
function activeLink() {
  list.forEach((item) => item.classList.remove("default"));
  this.classList.add("default");
  // console.log(document.querySelector(".default  p"));
  var xz = document.querySelector(".default p").innerText;
  if (xz == "首页") {
    head_text.innerText = "首页";
    essay.style.display = "none";
    introduce.style.display = "none";
    link.style.display = "none";
    home.style.display = "";
  }
  if (xz == "文章") {
    head_text.innerText = "文章";
    home.style.display = "none";
    introduce.style.display = "none";
    link.style.display = "none";
    essay.style.display = "";
  }
  if (xz == "介绍") {
    head_text.innerText = "介绍";
    home.style.display = "none";
    essay.style.display = "none";
    link.style.display = "none";
    introduce.style.display = "";
  }
  if (xz == "链接") {
    head_text.innerText = "链接";
    home.style.display = "none";
    essay.style.display = "none";
    introduce.style.display = "none";
    link.style.display = "";
  }
}
list.forEach((item) => item.addEventListener("click", activeLink));
let app = new Vue({
  el: "#app",
  data: {
    timer: null, //定时器
    active_index: 0, //当前轮播下标
    is_prev: false, //是否点击上一张(控制吃豆人朝向)
    // 轮播图数据(json格式)
    list: [
      {
        title: "标题一",
        image: "./image/bg.webp",
        bottom_color: "#383838",
      },
      {
        title: "标题二",
        image: "./image/bg1.webp",
        bottom_color: "#d7bbdd",
      },
      {
        title: "标题三",
        image: "./image/bg2.webp",
        bottom_color: "#49a4d8",
      },
      {
        title: "标题四",
        image: "./image/bg3.webp",
        bottom_color: "#49a4d8",
      },
      {
        title: "标题五",
        image: "./image/bg4.webp",
        bottom_color: "#e943ff",
      },
      {
        title: "标题六",
        image: "./image/bg5.webp",
        bottom_color: "#b8ab00",
      },
      {
        title: "标题七",
        image: "./image/bg6.webp",
        bottom_color: "#93504D",
      },
      {
        title: "标题八",
        image: "./image/bg7.webp",
        bottom_color: "#0065b8",
      },
      {
        title: "标题九",
        image: "./image/bg8.webp",
        bottom_color: "#ff56ff",
      },
    ],
  },
  methods: {
    // 停止轮播
    stopAutoPlay() {
      // 清空定时器
      for (let i = 0; i <= this.timer; i++) {
        clearInterval(i);
      }
    },
    // 开始轮播
    startAutoPlay() {
      // 停止轮播
      this.stopAutoPlay();
      let _t = this;
      this.timer = setInterval(function () {
        _t.active_index++;
        if (_t.active_index > _t.list.length - 1) {
          _t.active_index = 0;
        }
        _t.is_prev = false;
        _t.changeBanner(_t.active_index);
      }, 3000);
    },
    // 切换banner 参数:index=轮播下标(点击上一张,下一张按钮时,该值为-1;点击指示器时,该值为对应的轮播下标),is_prev=是否上一张(true为上一张,false为下一张)
    changeBanner(index, is_prev) {
      if (index >= 0) {
        // 点击指示器时
        // 默认是下一张,吃豆人向右
        this.is_prev = false;
        if (index < this.active_index) {
          // 点击时轮播下标小于当前轮播下标时,则为上一张,吃豆人向左
          this.is_prev = true;
        }
        // 设置当前轮播下标
        this.active_index = index;
      } else {
        // 点击按钮时
        if (is_prev) {
          // 上一张
          this.active_index--;
          if (this.active_index < 0) {
            this.active_index = this.list.length - 1;
          }
        } else {
          // 下一张
          this.active_index++;
          if (this.active_index > this.list.length - 1) {
            this.active_index = 0;
          }
        }
        // 指明上一张或下一张
        this.is_prev = is_prev;
      }
      // --m-left,--c-color是css的自定义属性,可通过var函数进行调用
      // 设置偏移量以达到显示指定图片的目的
      document
        .querySelector(".img-box")
        .style.setProperty("--m-left", this.active_index);
      // 设置图片底部的渐变效果
      document
        .querySelector(".bottom-box")
        .style.setProperty(
          "--b-color",
          this.list[this.active_index].bottom_color
        );
    },
  },
  mounted() {
    // 初始化,自动轮播
    this.startAutoPlay();
  },
});