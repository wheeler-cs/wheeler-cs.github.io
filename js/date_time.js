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
    document.getElementById("binary_local_day").textContent = get_binary_weekday_string();
    document.getElementById("binary_local_calendar").textContent = get_binary_calendar_string();
}

function get_clock_string() {
    // Get time data from user's browser
    date_time = new Date();
    time_hours = date_time.getHours();
    time_minutes = date_time.getMinutes();
    time_seconds = date_time.getSeconds();
    // Convert military time to 12-hour time
    clock_period = "AM"
    if(time_hours > 11)
        clock_period = "PM"
    time_hours = time_hours % 12;
    if(time_hours == 0)
        time_hours = 12
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
    if(time_hours > 11) {
        is_pm = "1";
        time_hours %= 12;
    }
    if(time_hours == 0)
        time_hours = 12
    // Convert time from decimal to binary string
    bin_time_hours = time_hours.toString(2);
    bin_time_minutes = time_minutes.toString(2);
    bin_time_seconds = time_seconds.toString(2);
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
    binary_time = is_pm + " " + bin_time_hours + " " + bin_time_minutes + " " + bin_time_seconds;

    // Convert values of 0 and 1 to empty and filled circles
    binary_time = binary_time.replaceAll('0', '\u{25CB}')
    binary_time = binary_time.replaceAll('1', '\u{25CF}')

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

function get_binary_weekday_string() {
    day = date_time.toLocaleString("default", {weekday: "long"});

    if(day == "Sunday")
        binary_day = "10000000";
    else if(day == "Monday")
        binary_day = "0100000";
    else if(day == "Tuesday")
        binary_day = "0010000";
    else if(day == "Wednesday")
        binary_day = "0001000";
    else if(day == "Thursday")
        binary_day = "0000100";
    else if(day == "Friday")
        binary_day = "0000010";
    else if(day == "Saturday")
        binary_day = "0000001";
    else
        binary_day = "0000000";
    
    // Convert values of 0 and 1 to empty and filled circles
    binary_day = binary_day.replaceAll('0', '\u{25CB}')
    binary_day = binary_day.replaceAll('1', '\u{25CF}')

    return binary_day
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

function get_binary_calendar_string() {
    date_time = new Date();
    
    month_num = date_time.getMonth() + 1;
    bin_calendar_month = month_num.toString(2);
    string_difference = 4 - bin_calendar_month.length;
    for(let i = 0; i < string_difference; i++)
        bin_calendar_month = "0" + bin_calendar_month;

    calendar_day = date_time.getDate();
    bin_calendar_day = calendar_day.toString(2);
    string_difference = 5 - bin_calendar_day.length;
    for(let i = 0; i < string_difference; i++)
        bin_calendar_day = "0" + bin_calendar_day;

    calendar_year = date_time.getFullYear();
    bin_calendar_year = calendar_year.toString(2);
    string_difference = 12 - calendar_year.length;
    for(let i = 0; i < string_difference; i++)
        bin_calendar_day = "0" + bin_calendar_day;

    binary_calendar_string = bin_calendar_month + " " + bin_calendar_day + " " + bin_calendar_year;
    
    // Convert values of 0 and 1 to empty and filled circles
    binary_calendar_string = binary_calendar_string.replaceAll('0', '\u{25CB}')
    binary_calendar_string = binary_calendar_string.replaceAll('1', '\u{25CF}')

    return binary_calendar_string;
}
