const BOOKMARKS_KEY = 'fi_bookmarks';

export const getBookmarks = () => {
  try {
    const data = localStorage.getItem(BOOKMARKS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

export const saveBookmark = (articleId) => {
  const bookmarks = getBookmarks();
  if (!bookmarks.includes(articleId)) {
    bookmarks.push(articleId);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }
  return bookmarks;
};

export const removeBookmark = (articleId) => {
  let bookmarks = getBookmarks();
  bookmarks = bookmarks.filter(id => id !== articleId);
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  return bookmarks;
};

export const isBookmarked = (articleId) => {
  const bookmarks = getBookmarks();
  return bookmarks.includes(articleId);
};
