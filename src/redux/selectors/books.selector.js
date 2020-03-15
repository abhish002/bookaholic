import { createSelector } from 'reselect';

export const selectLists = state => state.lists;

export const selectList = createSelector(
    [selectLists],
    (lists, listId) => lists.filter(list => list.list_id === parseInt(listId))
);