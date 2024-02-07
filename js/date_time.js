
function update_clock() {
    insert_clock()
    setTimeout(update_clock, 16); // Update clock on webpage ~60 times per second
}

function insert_clock() {
    document.getElementById("local_clock").innerHTML = get_clock_string();
}

function get_clock_string() {
    // Get time data from user's browser
    date_time = new Date();
    time_hours = date_time.getHours();
    time_minutes = date_time.getMinutes();
    time_seconds = date_time.getSeconds();
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
    time_string = time_hours.toString() + ":" + time_minutes.toString() + ":" + time_seconds.toString();
    return time_string;
}
