const forms = document.querySelectorAll('form') // 获取所有表单
const submitBtn = document.querySelector('button') // 获取提交按钮
submitBtn.addEventListener('click', submitForm) // 给提交按钮添加点击事件
function submitForm() { // 根据表单书籍计算分数
  // 定义各个维度的分数和总分
  let score1 = 0
  let score2 = 0
  let score3 = 0
  let score4 = 0
  let totalScore = 0
  // 遍历所有表单，分维度求和
  for (let i = 0; i < forms.length; i++) { 
    if (i < 5) {
      score1 += +forms[i].querySelector('input:checked').value
    } else if (i < 9) {
      score2 += +forms[i].querySelector('input:checked').value
    } else if (i < 14) {
      score3 += +forms[i].querySelector('input:checked').value
    } else {
      score4 += +forms[i].querySelector('input:checked').value
    }
  }
  // 计算总分和各个维度的标准分
  totalScore = ((score1 + score2 + score3 + score4) / 18 - 4.40) / 0.58
  score1 = (score1 / 5 - 3.13) / 1.15
  score2 = (score2 / 4 - 5.35) / 0.96
  score3 = (score3 / 5 - 5.35) / 0.83
  score4 = (score4 / 4 - 3.85) / 1.20
  // 弹出提示框
  alert(`
    在在校学生这一群体中
    您的内卷程度总分超过了${Math.round(fromZtoP(totalScore))}%的人
    其中：
    心理压力维度：超过了${Math.round(fromZtoP(score1))}%的人
    社会规范维度：超过了${Math.round(fromZtoP(score2))}%的人
    竞争行为维度：超过了${Math.round(fromZtoP(score3))}%的人
    资源稀缺维度：超过了${Math.round(fromZtoP(score4))}%的人
  `)
}
// 定义一个函数，用来计算正态分布函数的近似值
function fromZtoP (z) {
  let result = 0.5 * (1 + math.erf(z / Math.sqrt(2))) // P 值
  result = result * 100 // 百分比
  result = result.toFixed(2) // 保留两位小数
  return result
}








