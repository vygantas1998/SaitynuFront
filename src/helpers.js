export async function postData(url = "", data = {}) {
  let options = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  };
  if (getCookie("token")) {
    options.headers["Authorization"] = "Bearer " + getCookie("token");
  }
  const response = await fetch(url, options);
  return response.json();
}
export async function getData(url = "") {
  let options = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };
  if (getCookie("token")) {
    options.headers["Authorization"] = "Bearer " + getCookie("token");
  }
  const response = await fetch(url, options);
  return response.json();
}
export async function deleteData(url = "") {
  let options = {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };
  if (getCookie("token")) {
    options.headers["Authorization"] = "Bearer " + getCookie("token");
  }
  const response = await fetch(url, options);
  const dat = await response.text();
  if(dat){
    return JSON.parse(dat);
  }
  else{
    return dat;
  }
}
export async function patchData(url = "",data) {
  let options = {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  };
  if (getCookie("token")) {
    options.headers["Authorization"] = "Bearer " + getCookie("token");
  }
  const response = await fetch(url, options);
  const dat = await response.text();
  if(dat){
    return JSON.parse(dat);
  }
  else{
    return dat;
  }
}
export function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
export function getErrors(errors) {
  let err = {};
  errors.forEach((e) => {
    err[e.path.replace("/", "")] = e.message;
  });
  return err;
}

export function putOnArray(array1, array2) {
  let dat = { ...array1 };
  Object.keys(dat).forEach((el) => {
    dat[el] = array2[el];
  });
  return dat;
}
export function compareObjects(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  Object.keys(object1).forEach((e) => {
    if (object1[e] !== object2[e]) {
      return false;
    }
  });
  return true;
}
