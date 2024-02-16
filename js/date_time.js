// Unicode circles for binary clock:
// Empty Circle: &#x25CB;
// Filled Circle: &#x25CF;

// === Main Loop =======================================================================================================

function update_time_elements() {
    insert_clock();
    insert_weekday();
    insert_calendar();
    setTimeout(update_time_elements, 16);
}


// === Local Time ======================================================================================================

function insert_clock() {
    document.getElementById("local_clock").textContent = get_clock_string();
    document.getElementById("binary_local_clock").textContent = get_binary_clock_string();
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

function get_binary_clock_string() {
    // Get the time from the system
    date_time = new Date();
    time_hours = date_time.getHours();
    time_minutes = date_time.getMinutes();
    time_seconds = date_time.getSeconds();
    // Determine if AM or PM and convert from military time
    is_pm = "0";
    if(time_hours > 12) {
        is_pm = "1";
        time_hours %= 12;
    }
    // Convert time from decimal to binary string
    bin_time_hours = time_hours.toString(2);
    bin_time_minutes = time_minutes.toString(2);
    bin_time_seconds = time_minutes.toString(2);
    // Pad binary time strings if needed
    // Hours
    string_difference = 3 - bin_time_hours.length;
    for(let i = 0; i < string_difference; i++)
        bin_time_hours = "0" + bin_time_hours;
    // Minutes
    string_difference = 6 - bin_time_minutes.length;
    for(let i = 0; i < string_difference; i++)
        bin_time_minutes = "0" + bin_time_minutes;
    // Seconds
    string_difference = 6 - bin_time_seconds.length;
    for(let i = 0; i < string_difference; i++)
        bin_time_seconds = "0" + bin_time_seconds;
    // Concat binary strings to one large string
    binary_time = is_pm + bin_time_hours + bin_time_minutes + bin_time_seconds;
    // Convert 0 and 1 to Unicode circles
    let empty_circle = '\u{25CB}';
    let filled_circle = '\u{25CF}';
    for(let i = 0; i < binary_time.length; i++) {
        if(binary_time[i] == '0')
            binary_time[i] = empty_circle;
        else
            binary_time[i] = filled_circle;
    }

    return binary_time;
}


// === Weekday Info ====================================================================================================

function insert_weekday() {
    document.getElementById("local_weekday").textContent = get_weekday_string();
}

function get_weekday_string() {
    // Get the weekday
    date_time = new Date();
    calendar_week_day = date_time.toLocaleString("default", {weekday: "long"});
    return calendar_week_day;
}


// === Calendar Info ===================================================================================================

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
