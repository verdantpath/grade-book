const assignmentTitleField = document.getElementById('assignment-title');
const pointsPossibleField = document.getElementById('points-possible');
const pointsReceivedField = document.getElementById('points-received');
const btnAddEntry = document.getElementById('submit');
const outputContainer = document.getElementById('grade-table');

var output = '<div class="assignment-container"></div>';

const addEntry = (event) => {
  event.preventDefault();
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
  // var output = '<div class="assignment-container"></div>';
  // outputContainer.innerHTML = output;
}

btnAddEntry.addEventListener('click', addEntry);
