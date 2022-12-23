export async function request(
  url: string,
  data: { [key: string]: any },
  method: "POST" | "GET",
  responseFormat: "JSON" | "RAW"
) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    // we defined the xhr

    xhr.onreadystatechange = function () {
      if (this.readyState != 4) return;

      if (this.status == 200) {
        switch (responseFormat) {
          case "JSON":
            var data = JSON.parse(this.responseText);
            resolve(data);
            break;
          case "RAW":
            resolve(data);
            break;
        }
        // we get the returned data
      } else {
        reject("Got back response status " + this.status);
      }

      // end of state change: it can be after some time (async)
    };
    switch (method) {
      case "POST":
        xhr.open("POST", url, true);
        const dataString: string = JSON.stringify(data);
        xhr.send(dataString);
        break;
      case "GET":
        const urlObject = new URL(url);
        data.array.forEach((element) => {
          urlObject.searchParams.set(element.key, element.value);
        });
        xhr.open("GET", urlObject.toString(), true);
        xhr.send();
        break;
    }
  });
}
export function scrollToElm(elmName: string) {
  document.getElementById(elmName).scrollIntoView({ behavior: "smooth" });
  return false;
}
declare global {
  interface Window {
    scrollToElm: Function;
  }
}
window.scrollToElm = scrollToElm;
