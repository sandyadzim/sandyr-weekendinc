import axios from 'axios'

const baseURL: string = 'https://wknd-take-home-challenge-api.herokuapp.com/'

export const api = () => axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-User-Agent': 'sandy-fe'
  }
})