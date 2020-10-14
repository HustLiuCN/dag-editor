import { Mind } from '../index'
import MockData from '@data/mind-map-data'
import COLOR from '../color'

new Mind({
  data: MockData,
  options: {
      toolbar: '#toolbar',
      legends: {
          // type: { name, color }
          'default': { name: '业务场景', color: COLOR.blue },
          'tech': { name: '技术应用', color: COLOR.green },
          'todo': { name: 'TODO', color: COLOR.red }
      },
      lineType: 'curve',      // curve, polygon
  },
})

const oCodeBtn = document.getElementById('code-btn')
const oBg = document.querySelector('.popup-bg')

oCodeBtn.addEventListener('click', () => {
  const o = document.querySelector('.popup')
  o && o.classList.add('show')
})

oBg.addEventListener('click', () => {
  const o = document.querySelector('.popup')
  o && o.classList.remove('show')
})
