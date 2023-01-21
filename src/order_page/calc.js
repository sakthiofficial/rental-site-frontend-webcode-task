function MonthDays(month) {
    const calender = {
        0: 31,
        1: 28,
        2: 31,
        3: 30,
        4: 31,
        5: 30,
        6: 31,
        7: 31,
        8: 30,
        9: 31,
        10: 30,
        11: 31

    }
    return calender[month]
}
export default function calcDate(Today, currMonth, date, month) {
    if (currMonth != month) {
        let days = MonthDays(currMonth) - Today;
        for (let i = currMonth + 1; i < month; i++) {
            days = days + MonthDays(i);
        }
        return days + date
    } else {
        return date - Today
    }

}