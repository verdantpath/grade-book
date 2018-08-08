const assignmentTitleField = document.getElementById('assignment-title');
const pointsPossibleField = document.getElementById('points-possible');
const pointsReceivedField = document.getElementById('points-received');
const btnAddEntry = document.getElementById('submit');
const outputContainer = document.getElementById('grade-table');
let gradeAverage = document.getElementById('grade-average');

const addEntry = (event) => {
  event.preventDefault();
  
  let gradeEntry = {
    assignmentTitle: assignmentTitleField.value,
    pointsPossible: pointsPossibleField.value,
    pointsReceived: pointsReceivedField.value,
    gradePercentage: () => {
      return  (gradeEntry.pointsReceived / gradeEntry.pointsPossible) * 100 + '%';
    }
  };

  let output = `
    <span class="assignment-title column-1">${gradeEntry.assignmentTitle}</span>
    <span class="points-possible column-2">${gradeEntry.pointsPossible}</span>
    <span class="points-received column-3">${gradeEntry.pointsReceived}</span>
    <span class="assignment-grade column-4">${gradeEntry.gradePercentage()}</span>
  `;

  let assignmentContainer = document.createElement('div');
  assignmentContainer.className = 'assignment-container clearfix';
  assignmentContainer.innerHTML = output;
  outputContainer.appendChild(assignmentContainer);

}

btnAddEntry.addEventListener('click', addEntry);
