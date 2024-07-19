import React from 'react'

export const ThemeContext = React.createContext({
  isDarkTheme: false,
  changePageTheme: () => {},
  menuStatus: '',
  menuStatusChange: () => {},
})

export const SavedVideosContext = React.createContext({
  savedVideosList: [],
  updateSavedView: () => {},
  deleteListItem: () => {},
})
