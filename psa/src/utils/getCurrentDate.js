export function getDiffDate(firstDate, secondDate){
    secondDate = new Date(secondDate);
    let date = secondDate.getDate();
    let month = secondDate.getMonth() + 1;
    let year = secondDate.getFullYear();

    secondDate = new Date(`${date < 10 ? `0${date}` : `${date}` }$/${month<10?`0${month}`:`${month}`}/${year}`);
    let Difference_In_Time = secondDate.getTime() - firstDate.getTime();
    console.log()
    return Difference_In_Time / (1000 * 3600 * 24);
}