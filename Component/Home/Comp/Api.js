// const URL = "https://randomuser.me/api?results=4";
// //var customData = require('./Data.json');
// export function GetImages() {
//     return fetch(URL)
//       .then(res => res.json())
//         .then(resjson => resjson.results);
// }

function CallCategory() {
  return fetch("https://dev.api.nguyenkimonline.com/v1/CateHome", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      password: "eJwrtjIytVJyyMvOj8/MK0ktykvMSTUyMDR3yPPWS87PVbIGALc2Cqc=",
      Authorization: "nko_internal"
    }
  })
    .then(res => res.json())
    .then(resjson => resjson.data.data_blocks);
};
export default CallCategory;
