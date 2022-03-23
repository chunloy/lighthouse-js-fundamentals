const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(locations) {
  let candidates = [];
  for (const location of locations) {
    if ((location[2] === 'school' || location[2] === 'community centre') && location[1] >= 20) {
      candidates.push(location[0])
    }
  }
  return candidates;
}

console.log(chooseStations(stations));