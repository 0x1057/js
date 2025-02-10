/*
Number of days in a month
*/
const month = Number(prompt("Enter a month of the year (1-12):"));

switch(month) {
    case 1:
        alert("January has 31 days");
        break;
    case 2:
        alert("February has 28 or 29 days");
        break;
    case 3:
        alert("March has 31 days.");
        break;
    case 4:
        alert("April has 30 days.");
        break;
    case 5:
        alert("May has 31 days.");
        break;
    case 6:
        alert("June has 30 days.");
        break;
    case 7:
        alert("July has 31 days.");
        break;
    case 8:
        alert("August has 31 days.");
        break;
    case 9:
        alert("Sepetember has 30 days.");
        break;
    case 10:
        alert("October has 31 days.");
        break;
    case 11:
        alert("November has 30 days.");
        break;
    case 12:
        alert("December has 31 days.");
        break;
    default:
        alert("Bad input.")
        break;
}