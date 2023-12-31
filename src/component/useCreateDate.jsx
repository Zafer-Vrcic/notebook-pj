const useCreateDate = () => {
  const dateObj = new Date();
  console.log(dateObj);
  const month = dateObj.getMonth();
  console.log(month);
  let montName;
  switch (month) {
    case 0:
      montName = "January ";
      break;
    case 1:
      montName = "February ";
      break;
    case 2:
      montName = "March ";
      break;
    case 3:
      montName = "April ";
      break;
    case 4:
      montName = "May";
      break;
    case 5:
      montName = "June ";
      break;
    case 6:
      montName = "July ";
      break;
    case 7:
      montName = "August ";
      break;
    case 8:
      montName = "September";
      break;
    case 9:
      montName = "October ";
      break;
    case 10:
      montName = "November ";
      break;
    case 11:
      montName = "December ";
      break;
  }
  const date = `${montName} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()} ]`;
  return date;
};
export default useCreateDate;
