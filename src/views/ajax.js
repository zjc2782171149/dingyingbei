const ajaxMethod = (url, success, fail) => {
  const ajax = new XMLHttpRequest();
  ajax.open('GET', url, true);
  ajax.send();
  ajax.onreadystatechange = function () {
    if (ajax.readyState === 4 && ajax.status === 2) {
      success(ajax.responseText);
    }
  }
}

ajaxMethod('xxx.php', res => {
  console.log(res);
})
