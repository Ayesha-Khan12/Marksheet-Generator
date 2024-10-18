function generateMarksSheet() {
    var sub1 = prompt("Enter the name of first subject:", "English");
    var sub2 = prompt("Enter the name of second subject:", "Maths");
    var sub3 = prompt("Enter the name of third subject:", "Urdu");

    var totalMarks = 100;
    var obtMarks1 = +prompt(`Enter obtained marks for ${sub1}:`);
    var obtMarks2 = +prompt(`Enter obtained marks for ${sub2}:`);
    var obtMarks3 = +prompt(`Enter obtained marks for ${sub3}:`);

    var perc1 = (obtMarks1 / totalMarks) * 100;
    var perc2 = (obtMarks2 / totalMarks) * 100;
    var perc3 = (obtMarks3 / totalMarks) * 100;
    var totalObtMarks = obtMarks1 + obtMarks2 + obtMarks3;
    var totalPerc = (totalObtMarks / (totalMarks * 3)) * 100;

    var resultHTML = `
      <table>
        <tr>
          <th>Subject</th>
          <th>Total Marks</th>
          <th>Obtained Marks</th>
          <th>Percentage</th>
        </tr>
        <tr>
          <td>${sub1}</td>
          <td>${totalMarks}</td>
          <td>${obtMarks1}</td>
          <td>${perc1.toFixed(2)}%</td>
        </tr>
        <tr>
          <td>${sub2}</td>
          <td>${totalMarks}</td>
          <td>${obtMarks2}</td>
          <td>${perc2.toFixed(2)}%</td>
        </tr>
        <tr>
          <td>${sub3}</td>
          <td>${totalMarks}</td>
          <td>${obtMarks3}</td>
          <td>${perc3.toFixed(2)}%</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td><strong>${totalMarks * 3}</strong></td>
          <td><strong>${totalObtMarks}</strong></td>
          <td><strong>${totalPerc.toFixed(2)}%</strong></td>
        </tr>
      </table>
    `;

    document.getElementById("result").innerHTML = resultHTML;
  }

  function reset(){
      document.getElementById("result").innerHTML = "";
  }