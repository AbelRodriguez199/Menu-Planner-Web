import http from './BaseService';

const getMenuRandom = () => http.get('/menus')

const deleteMenuRandom = id => http.delete(`/random-menu/${id}`)

const createMenuRandom = menuRandom => http.post(`/random-menu`, menuRandom)

export default {
  getMenuRandom,
  deleteMenuRandom,
  createMenuRandom
}