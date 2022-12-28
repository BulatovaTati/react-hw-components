export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user;

export const selectIsFetchingCurrent = state => state.auth.isRefreshingCurrent;
