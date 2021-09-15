export default function({user, computer}) {
  if(user === computer) return 'draw'
  if(user === 'stone') {
    if(computer === 'scissors') return 'win'
    return 'lose'
  }
  if(user === 'paper') {
    if(computer === 'stone') return 'win'
    return 'lose'
  }
  if(user === 'scissors') {
    if(computer === 'paper') return 'win'
    return 'lose'
  }
}