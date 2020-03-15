import { LOAD_LISTS } from '../../constants/action-types.constants';

export function getLists() {
  return function (dispatch) {
    const url = "http://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=Gr4pjpry6mtGAQbzufRmNJBhLqxOA3aY";
    return fetch(url, {
      method: "GET",
      withCredentials: true,
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: LOAD_LISTS,
          payload: data.results.lists
        })
      });
  }
};