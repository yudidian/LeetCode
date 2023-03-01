// 图片信息
let imgList = new Array(9).fill("")
imgList = imgList.map((item, index) => {
  return {
    path: `./images/${index + 1}.jpg`,
    name: `图片${index + 1}`
  }
})
imgList.push(...imgList)


// 获取元素
const waterfall = document.getElementById('waterfall');
let str = ""
for (let i = 0; i < imgList.length; i++) {
  str += `<li><img src="${imgList[i].path}" alt="${imgList[i].name}"/></li>`
}
waterfall.innerHTML = str

const image = waterfall.querySelectorAll('li');

// 定义每列的高度
const columnHeights = new Array(image.length).fill(0);
// 确定每个元素渲染完成

let loadCount = 0
image.forEach(item => {
  item.children[0].onload = function () {
    loadCount++
    checkAllImagesLoaded()
  }
})

// 图片加载完成之后调用
function checkAllImagesLoaded() {
  // 确定每列的宽度和间隔
  const columnWidth = 300; // 每列宽度
  const gutterWidth = 20; // 间隔宽度

// 计算需要显示的列数
  const screenWidth = window.innerWidth;
  const columnCount = Math.floor((screenWidth + gutterWidth) / (columnWidth + gutterWidth));
  if (loadCount === image.length) {
    for (let i = 0; i < columnCount; i++) {
      const el = image[i]
      columnHeights[i] = el.clientHeight
    }
    // 遍历所有元素，计算出每个元素应该放置在哪一列
    for (let i = 0; i < image.length; i++) {
      const el = image[i]
      if (i >= columnCount) {
        columnHeights[i] += columnHeights[i - columnCount] + el.clientHeight
        el.style.top = columnHeights[i - columnCount] + 'px';
      } else {
        el.style.top = 0 + 'px';
      }
      el.style.left = columnWidth * (i % columnCount) + 'px';
    }
  }
}

let timer
window.addEventListener("resize", function () {
  if (!timer) {
    timer = setTimeout(() => {
      console.log(123)
      checkAllImagesLoaded()
      timer = null
    }, 400)
  }
})

