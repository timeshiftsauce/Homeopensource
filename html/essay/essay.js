var shijiang;
console.log(JSON.parse(true));
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

let loc_xs = null;
if (
  window.localStorage.getItem("xsms") == "true" ||
  window.localStorage.getItem("xsms") == "false"
) {
  loc_xs = JSON.parse(window.localStorage.getItem("xsms"));
}
let tis = 0;
let sceo = true;
let scis = 0;
let root = document.querySelector(":root");
let i = 0;
const appes = new Vue({
  el: "#app",
  data() {
    return {
      body: "app",
      ismubu: false,
      mubu_style: ["mubu"],
      istishi: false,
      isshezi: false,
      isxiangshang: false,
      xiangshang: "",
      shezi: ["shezi"],
      tishi: ["tishi"],
      btn_xianshi: false,
      tishi_text: "这是一个提示框",
      oldScrollTop: 0,
      i: 0,
    };
  },
  mounted: function () {
    this.$refs.rightContent.addEventListener("scroll", this.handleScroll, true);
    setTimeout(() => {
      if (loc_xs != null) {
        this.btn_xianshi = loc_xs;
        this.btn_xs();
      }
    }, 300);
  },
  methods: {
    nav_btn: function (a) {
      // console.log(777);
      if (a == 1) {
        location.replace("../../?tab=essay");
      } else {
        this.ismubu = true;
        this.isshezi = true;
        this.body = "app none";
        setTimeout(() => {
          this.mubu_style.push("block");
          this.shezi.push("top");
        }, 00);
      }
    },
    esc: function () {
      setTimeout(() => {
        this.ismubu = false;
      }, 300);
      setTimeout(() => {
        this.isshezi = false;
      }, 500);
      this.mubu_style.splice(1);
      this.shezi.splice(1);
      this.body = "app";
    },
    btn_xs: function () {
      setTimeout(() => {
        this.istishi = true;
        window.localStorage.removeItem("xsms");
        if (this.btn_xianshi) {
          this.tishi_text = "已切换到暗夜模式";
          root.style.setProperty("--w-bg", "#1f1f1f");
          root.style.setProperty("--text-bg", "#d4d4d4");
          root.style.setProperty("--btn-bg", "rgba(82, 82, 82, 0.856)");
          root.style.setProperty("--btn-sh-a", "#292b2e");
          root.style.setProperty("--code-", "#262626");
          window.localStorage.setItem("xsms", true);
        } else {
          this.tishi_text = "已切换到白昼模式";
          root.style.setProperty("--w-bg", "rgb(255,255,255)");
          root.style.setProperty("--text-bg", "#3a3a3a");
          root.style.setProperty("--s-bg", "rgba(233, 233, 233, 0.555)");
          root.style.setProperty("--btn-bg", "rgba(197, 197, 197, 0.856)");
          root.style.setProperty("--btn-sh-a", "#d1d9e6");
          root.style.setProperty("--code-", "#f6f8fa");
          window.localStorage.setItem("xsms", false);
        }
        if (tis == 0) {
          setTimeout(() => {
            tis = 1;
            this.tishi.push("open");
            setTimeout(() => {
              this.tishi.splice(1);
              setTimeout(() => {
                this.istishi = false;
                tis = 0;
              }, 500);
            }, 2000);
          }, 00);
        }
      }, 0);
    },
    scrolltop_btn: function () {
      document.querySelector(".app").scrollTop = 0;
      scis = 1;
      // console.log("向上");
      sceo = true;
      this.xiangshang = "";
      setTimeout(() => {
        this.isxiangshang = false;
        scis = 0;
      }, 300);
    },
    handleScroll: function () {
      // 页面滚动距顶部距离
      var scrollTop = this.$refs.rightContent.scrollTop;
      var scroll = scrollTop - this.i;
      this.i = scrollTop;
      if (scis == 0) {
        if (scroll < 0) {
          //当鼠标滚轮向上滚动时
          scis = 1;
          // console.log("向上");
          sceo = true;
          this.xiangshang = "";
          setTimeout(() => {
            this.isxiangshang = false;
            scis = 0;
          }, 300);
        } else {
          if (sceo) {
            //当鼠标滚轮向下滚动时
            sceo = false;
            this.isxiangshang = true;
            // console.log("向下");
            scis = 1;
            setTimeout(() => {
              this.xiangshang = "block";
              scis = 0;
            }, 100);
          }
        }
      }
    },
    authorlink(link) {
      window.open(link);
    }

  },
});
