const fieldAssignmentTitle = document.getElementById('assignment-title');
const fieldPointsPossible = document.getElementById('points-possible');
const fieldPointsReceived = document.getElementById('points-received');
const btnAddEntry = document.getElementById('submit');
const outputContainer = document.getElementById('grade-table');
const gradeAverageContainer = document.getElementById('grade-average');
let gradeAverage = [];
const gradeAverageCalculator = () => {
  let sum = 0;
  for ( let i = 0; i < gradeAverage.length; i++ ) {
    sum += parseInt( gradeAverage[i], 10 );
  }
  let avg = sum/gradeAverage.length;
  return `Grade Average: ${avg}%`;
}

const addEntry = (event) => {
  event.preventDefault();

  let gradeEntry = {
    assignmentTitle: fieldAssignmentTitle.value,
    pointsPossible: fieldPointsPossible.value,
    pointsReceived: fieldPointsReceived.value,
    gradePercentage: () => {
      return  Math.ceil((gradeEntry.pointsReceived / gradeEntry.pointsPossible) * 100);
    }
  };

  let output = `
    <span class="assignment-title column-1">${gradeEntry.assignmentTitle}</span>
    <span class="points-possible column-2">${gradeEntry.pointsPossible}</span>
    <span class="points-received column-3">${gradeEntry.pointsReceived}</span>
    <span class="assignment-grade column-4">${gradeEntry.gradePercentage()}%</span>
  `;

  let assignmentContainer = document.createElement('div');
  assignmentContainer.className = 'assignment-container clearfix';
  assignmentContainer.innerHTML = output;
  outputContainer.appendChild(assignmentContainer);
  gradeAverage.push(gradeEntry.gradePercentage());
  gradeAverageContainer.innerHTML = gradeAverageCalculator();
};

btnAddEntry.addEventListener('click', addEntry);
