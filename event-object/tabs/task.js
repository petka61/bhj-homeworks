const tab = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"));
const tabNavi = Array.from(document.querySelectorAll(".tab__navigation"));

for (let i in tab) {
  tab[i].addEventListener("click", openTabs => {
    tab.forEach(item => item.classList.remove("tab_active"))
    const clickIndex = tab.indexOf(tab[i]);
    for (let p in tabContent) {
      tabContent[p].classList.remove("tab__content_active")
      if (clickIndex === tabContent.indexOf(tabContent[p])) {
        tabContent[p].classList.add("tab__content_active");
        tab[clickIndex].classList.add("tab_active")
      }
    }
  })
}
