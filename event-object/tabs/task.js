const tab = Array.from(document.querySelectorAll(".tab"));
const tab_content = Array.from(document.querySelectorAll(".tab__content"));

for (let i in tab) {
  tab[i].addEventListener("click", openTabs => {
    const click_index = tab.indexOf(tab[i]);
    for (let p in tab_content) {
      tab_content[p].classList.remove("tab__content_active")
      if (click_index === tab_content.indexOf(tab_content[p])) {
        tab_content[p].classList.add("tab__content_active");
      }
    }
  })
}
