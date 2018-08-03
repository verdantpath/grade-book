const assignmentTitleField = document.getElementById('assignment-title');
const pointsPossibleField = document.getElementById('points-possible');
const pointsReceivedField = document.getElementById('points-received');
const btnAddEntry = document.getElementById('submit');

const addEntry = (e) => {
  e.preventDefault();
  console.log('function addEntry called');
  var gradeEntry = {
    assignmentTitle: assignmentTitleField.value,
    pointsPossible: pointsPossibleField.value,
    pointsReceived: pointsReceivedField.value,
    gradePercentage: () => {
      return  gradeEntry.pointsReceived / gradeEntry.pointsPossible;
    }
  };
  console.log(gradeEntry.assignmentTitle);
  console.log(gradeEntry.pointsPossible);
  console.log(gradeEntry.pointsReceived);
  console.log(gradeEntry.gradePercentage());
}

btnAddEntry.addEventListener('click', addEntry);
