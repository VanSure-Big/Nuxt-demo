export default function (context) {
  const API = {};
  API.systemInit = function (params) {
    return context.$api({
      url: '/client/systemInit',
      method: 'get',
      params,
    })
  };
  context.API = API;
}