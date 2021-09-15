export default function() {
  const randomNumber = Math.ceil(Math.random()*3)
  let image
  switch(randomNumber) {
    case 1 :
      image = 'stone'
      break
    case 2 :
      image = 'paper'
      break
    case 3 :
      image = 'scissors'
      break
  }
  return image
}