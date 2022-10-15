const createSchedule = (numTeams) => {

  const gameMatrix = []

  console.log("numTeams", numTeams)

  // Put a limit
  if (numTeams > 16 || numTeams <= 2) {
    console.log('Number of teams must bemore than 1 and less than 16!')
    return
  }

  // Will add this functionality later
  const oddNumTeams = numTeams % 2 == 1
  if (oddNumTeams) {
    console.log('Must be an even number of teams!')
    return
  }

}

createSchedule(4)