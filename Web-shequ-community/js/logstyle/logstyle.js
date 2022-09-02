let log = new Object();
function colorlog(text, color) {
  console.log("%c" + text, "color:" + color + ";" + "font-size:14px");
}
log.success = (text) => {
  colorlog(text, "green");
};
log.info = (text) => {
  colorlog(text, "grey");
};
log.warning = (text) => {
  colorlog(text, "orange");
};
log.errol = (text) => {
  colorlog(text, "red");
};
log.v = (text_1, text_2) => {
  console.log(
    "%c" + text_1 + "%c" + text_2,
    "padding:3px 6px;background:#023047;border-radius:5px 0 0 5px;color:white;font-size:12px",
    "padding:3px 10px;background:#219EBC;border-radius:0 5px 5px 0;color:white;font-size:12px"
  );
};
