/**
 * 删除空children
 * @param {*} menu
 */
const getMenuData = (menu) => {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].children && menu[i].children.length <= 0) {
      delete menu[i].children
    }
    if (menu[i].children && menu[i].children.length > 0) {
      getMenuData(menu[i].children)
    }
  }
  return menu
}
/**
 * 过滤menu的空children
 * @param {*} menu
 * @returns
 */
export const fliterMenu = (menu) => {
  const newMenu = getMenuData(menu)
  return newMenu
}
