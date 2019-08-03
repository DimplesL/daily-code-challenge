/**
 * Company: Mailchimp.
 *
 * You are given an array representing the heights of neighboring buildings on a city street,
 * from east to west. The city assessor would like you to write an algorithm that returns how
 * many of these buildings have a view of the setting sun, in order to properly value the street.
 *
 * For example, given the array [3, 7, 8, 3, 6, 1], you should return 3, since the top floors of
 * the buildings with heights 8, 6, and 1 all have an unobstructed view to the west.
 *
 * Can you do this using just one forward pass through the array?
 */
const findNumberOfBuilding = function(buildings) {
  let ans = 0;
  let max = 0;

  for (let i = buildings.length - 1; i >= 0; i--) {
    const building = buildings[i];
    if (building > max) {
      ans++;
      max = building;
    }
  }

  return ans;
};

console.log(findNumberOfBuilding([3, 7, 8, 3, 6, 1]));
