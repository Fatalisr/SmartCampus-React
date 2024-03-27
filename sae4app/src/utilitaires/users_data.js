const users = [
  {
    "username": "perso1",
    "password": "perso1",
    "role": "personnel"
  },
  {
    "username": "perso2",
    "password": "perso2",
    "role": "personnel"
  },
  {
    "username": "tech1",
    "password": "tech1",
    "role": "technicien"
  },
  {
    "username": "tech2",
    "password": "tech2",
    "role": "technicien"
  },
]

export const users$ = new Promise((resolve)=>setTimeout(resolve, 0, users))