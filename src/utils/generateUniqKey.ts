import {v4 as uuidv4} from 'uuid';

export const generateUniqKey = () => {
    const characters = uuidv4()
    let result = ''
    for (let i = 0; i < 10; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length)
      characters.charAt(randomIndex) != '-' ? result += characters.charAt(randomIndex) : i--
      
    }
    return result
  }