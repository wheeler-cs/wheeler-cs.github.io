
function update_time_elements() {
    insert_clock();
    insert_weekday();
    insert_calendar();
    setTimeout(update_time_elements, 16);
}

function insert_clock() {
    document.getElementById("local_clock").textContent = get_clock_string();
}

function get_clock_string() {
    // Get time data from user's browser
    date_time = new Date();
    time_hours = date_time.getHours();
    time_minutes = date_time.getMinutes();
    time_seconds = date_time.getSeconds();
    // Convert military time to 12-hour time
    clock_period = "AM"
    if(time_hours > 12)
        clock_period = "PM"
    time_hours = time_hours % 12;
    // Add a zero in front of single-digit numbers
    if(time_hours < 10) {
        time_hours = "0" + time_hours;
    }
    if(time_minutes < 10) {
        time_minutes = "0" + time_minutes;
    }
    if(time_seconds < 10) {
        time_seconds = "0" + time_seconds;
    }
    // Concat time strings into one large clock
    time_string = time_hours.toString() + ":" + time_minutes.toString() + ":" + time_seconds.toString() + " " + clock_period;
    return time_string;
}

function insert_weekday() {
    document.getElementById("local_weekday").textContent = get_weekday_string();
}

function get_weekday_string() {
    // Get the weekday
    date_time = new Date();
    calendar_week_day = date_time.toLocaleString("default", {weekday: "long"});
    return calendar_week_day;
}

function insert_calendar() {
    document.getElementById("local_calendar").textContent = get_calendar_string();
}

function get_calendar_string() {
    // Get calendar information from user's browser
    date_time = new Date();
    calendar_day = date_time.getDate();
    calendar_year = date_time.getFullYear();

    calendar_month = date_time.toLocaleString("default", {month: "long"});

    calendar_string = calendar_month + " " + calendar_day.toString() + ", " + calendar_year.toString();

    return calendar_string;
}
